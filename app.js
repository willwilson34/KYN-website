'use strict';

// ============================================================
// KYN — app.js
// ============================================================

// ── State ─────────────────────────────────────────────────────────────────────
let currentNeighborhood = null;
let activeCity          = 'Chicago';
let isChatTyping        = false;
let chatTypingTimeout   = null;

// ── DOM References ─────────────────────────────────────────────────────────────
const $ = id  => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

const dom = {
  // Search
  heroSearchForm:    $('hero-search-form'),
  searchInput:       $('search-input'),
  searchBar:         document.querySelector('.search-bar'),

  // Sections (shown/hidden)
  reportSection:     $('report-section'),
  chatSection:       $('chat-section'),

  // Browse bar
  browseCitiesInner: $('browse-bar-cities'),
  browsePillsInner:  document.querySelector('.browse-bar__inner'),

  // Report header
  neighborhoodName:  $('report-neighborhood-name'),
  overallScoreValue: $('overall-score-value'),
  scoreCircleFill:   $('score-circle-fill'),
  trendBadge:        $('report-trend-badge'),
  updatedTag:        $('report-updated-tag'),

  // Category score numbers
  scores: {
    noise:        $('score-noise'),
    safety:       $('score-safety'),
    traffic:      $('score-traffic'),
    schools:      $('score-schools'),
    construction: $('score-construction'),
  },

  // Category score bars
  bars: {
    noise:        $('bar-noise'),
    safety:       $('bar-safety'),
    traffic:      $('bar-traffic'),
    schools:      $('bar-schools'),
    construction: $('bar-construction'),
  },

  // AI Summary
  aiSummaryTitle: $('ai-summary-title'),
  aiSummaryText:  $('ai-summary-text'),

  // Quotes
  quoteTexts:     [0, 1, 2].map(i => $(`quote-text-${i}`)),
  quoteUsernames: [0, 1, 2].map(i => $(`quote-username-${i}`)),
  quoteTimestamps:[0, 1, 2].map(i => $(`quote-timestamp-${i}`)),
  quoteAvatars:   [0, 1, 2].map(i => $(`quote-avatar-${i}`)),
  quotesCount:    $('quotes-count'),

  // City badge
  cityBadge: $('report-city-badge'),

  // Construction
  constructionAlertText: $('construction-alert-text'),

  // Chat
  chatContextChip: $('chat-context-chip'),
  chatWelcomeMsg:  $('chat-welcome-msg'),
  chatMessages:    $('chat-messages'),
  chatInput:       $('chat-input'),
  chatSendBtn:     $('chat-send-btn'),

  // Email
  emailForm:       $('email-capture-form'),
  signupSuccess:   $('signup-success'),
  signupSubmitBtn: $('signup-submit-btn'),
  signupName:      $('signup-name'),
  signupEmail:     $('signup-email'),
  signupSegment:   $('signup-segment'),
};

// ── Utility Functions ──────────────────────────────────────────────────────────

function scoreClass(s) {
  if (s >= 80) return 'high';
  if (s >= 65) return 'medium';
  return 'low';
}

function scoreLabel(s) {
  if (s >= 85) return 'excellent';
  if (s >= 75) return 'good';
  if (s >= 65) return 'moderate';
  if (s >= 55) return 'below average';
  return 'poor';
}

function circleOffset(score) {
  return 283 - (283 * score / 100);
}

function formatDate(isoString) {
  return new Date(isoString).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  });
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fadeIn(el) {
  el.style.display = '';
  el.style.opacity = '0';
  el.style.transition = 'opacity 0.45s ease';
  requestAnimationFrame(() => requestAnimationFrame(() => { el.style.opacity = '1'; }));
}

// ── Neighborhood Search / Matching ─────────────────────────────────────────────

function findNeighborhood(query) {
  if (!query || !query.trim()) return null;
  const q = query.toLowerCase().trim();
  const cityData = neighborhoodData.filter(n => n.city === activeCity);

  // 1. Exact name match
  let hit = cityData.find(n => n.name.toLowerCase() === q);
  if (hit) return hit;

  // 2. Name fully contains query or vice-versa
  hit = cityData.find(n =>
    n.name.toLowerCase().includes(q) || q.includes(n.name.toLowerCase())
  );
  if (hit) return hit;

  // 3. Any individual word (length > 2) matches any word in a neighborhood name
  const words = q.split(/[\s,\-/]+/).filter(w => w.length > 2);
  hit = cityData.find(n => {
    const nameWords = n.name.toLowerCase().split(/\s+/);
    return words.some(w => nameWords.some(nw => nw.startsWith(w) || w.startsWith(nw)));
  });
  return hit || null;
}

// ── Browse Bar ─────────────────────────────────────────────────────────────────

function buildBrowseBar() {
  // City toggle pills (left container)
  dom.browseCitiesInner.innerHTML = '';
  ['Chicago', 'Eugene'].forEach(city => {
    const btn = document.createElement('button');
    btn.className = 'browse-bar__city-pill' + (city === activeCity ? ' active' : '');
    btn.textContent = city;
    btn.dataset.city = city;
    btn.addEventListener('click', () => switchCity(city));
    dom.browseCitiesInner.appendChild(btn);
  });

  // Neighborhood pills for active city (right scrolling container)
  dom.browsePillsInner.innerHTML = '';
  neighborhoodData.filter(n => n.city === activeCity).forEach(n => {
    const btn = document.createElement('button');
    btn.className = 'browse-bar__pill';
    btn.textContent = n.name;
    btn.dataset.neighborhood = n.name;
    btn.addEventListener('click', () => showReport(n));
    dom.browsePillsInner.appendChild(btn);
  });
}

function switchCity(city) {
  if (activeCity === city) return;
  dom.browsePillsInner.style.transition = 'opacity 120ms ease';
  dom.browsePillsInner.style.opacity = '0';
  setTimeout(() => {
    activeCity = city;
    buildBrowseBar();
    updateSearchPlaceholder();
    dom.reportSection.style.display = 'none';
    dom.chatSection.style.display   = 'none';
    currentNeighborhood = null;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      dom.browsePillsInner.style.transition = 'opacity 200ms ease';
      dom.browsePillsInner.style.opacity = '1';
    }));
  }, 130);
}

function updateSearchPlaceholder() {
  dom.searchInput.placeholder = activeCity === 'Eugene'
    ? 'Enter a Eugene address or neighborhood…'
    : 'Enter a Chicago address or neighborhood…';
}

function setActivePill(name) {
  $$('.browse-bar__pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.neighborhood === name);
  });
}

// ── Score & Bar Class Helpers ──────────────────────────────────────────────────

function setScoreClass(el, score, prefix) {
  ['high', 'medium', 'low'].forEach(c => el.classList.remove(`${prefix}--${c}`));
  el.classList.add(`${prefix}--${scoreClass(score)}`);
}

// ── Report Population ──────────────────────────────────────────────────────────

function populateReport(n) {
  // ── Header ──────────────────────────────────────────────────────────────────
  dom.neighborhoodName.textContent = n.name;
  if (dom.cityBadge) dom.cityBadge.textContent = n.city === 'Eugene' ? 'Eugene, OR' : 'Chicago, IL';

  if (n.overallScore >= 80) {
    dom.trendBadge.textContent = '↑ High-rated';
    dom.trendBadge.className = 'report__badge report__badge--green';
  } else if (n.overallScore >= 65) {
    dom.trendBadge.textContent = '→ Mid-rated';
    dom.trendBadge.className = 'report__badge report__badge--navy';
  } else {
    dom.trendBadge.textContent = '↓ Lower-rated';
    dom.trendBadge.className = 'report__badge report__badge--amber';
  }

  // Derive "updated" from most recent resident quote timestamp
  const latestDate = new Date(
    Math.max(...n.residentQuotes.map(q => new Date(q.timestamp)))
  );
  dom.updatedTag.textContent = `Updated ${latestDate.toLocaleDateString('en-US', {
    month: 'short', year: 'numeric',
  })}`;

  // ── Overall Score Circle ─────────────────────────────────────────────────────
  // Reset offset, then animate via double-rAF to trigger CSS transition
  dom.scoreCircleFill.style.transition = 'none';
  dom.scoreCircleFill.setAttribute('stroke-dashoffset', 283);
  setScoreClass(dom.scoreCircleFill, n.overallScore, 'score-circle__fill');

  requestAnimationFrame(() => requestAnimationFrame(() => {
    dom.scoreCircleFill.style.transition = 'stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1)';
    dom.scoreCircleFill.setAttribute('stroke-dashoffset', circleOffset(n.overallScore));
  }));

  dom.overallScoreValue.textContent = n.overallScore;

  // ── Category Scores & Bars ───────────────────────────────────────────────────
  ['noise', 'safety', 'traffic', 'schools', 'construction'].forEach(cat => {
    const s = n.categoryScores[cat];

    // Score number
    dom.scores[cat].textContent = s;
    setScoreClass(dom.scores[cat], s, 'score-card__score');

    // Bar: reset to 0 width, then animate
    dom.bars[cat].style.transition = 'none';
    dom.bars[cat].style.width = '0%';
    setScoreClass(dom.bars[cat], s, 'score-bar__fill');

    requestAnimationFrame(() => requestAnimationFrame(() => {
      dom.bars[cat].style.transition = 'width 0.85s cubic-bezier(0.4,0,0.2,1)';
      dom.bars[cat].style.width = `${s}%`;
    }));

    // ARIA
    const progressEl = dom.bars[cat].parentElement;
    progressEl.setAttribute('aria-valuenow', s);
    progressEl.setAttribute('aria-label',
      `${cat.charAt(0).toUpperCase() + cat.slice(1)} score ${s} out of 100`
    );
  });

  // ── AI Summary ───────────────────────────────────────────────────────────────
  dom.aiSummaryTitle.textContent = `${n.name} at a glance`;
  dom.aiSummaryText.textContent  = n.summary;

  // ── Resident Quotes ───────────────────────────────────────────────────────────
  n.residentQuotes.forEach((q, i) => {
    dom.quoteTexts[i].textContent     = q.text;
    dom.quoteUsernames[i].textContent = q.username;
    dom.quoteTimestamps[i].textContent = formatDate(q.timestamp);
    dom.quoteAvatars[i].textContent   = q.username[0].toUpperCase();
  });
  dom.quotesCount.textContent = `${n.residentQuotes.length} recent reviews`;

  // ── Construction Alert ────────────────────────────────────────────────────────
  dom.constructionAlertText.textContent = n.constructionAlert;
}

// ── Show / Reveal Report ───────────────────────────────────────────────────────

function showReport(n) {
  currentNeighborhood = n;

  populateReport(n);
  resetChat(n);
  setActivePill(n.name);

  const reportWasHidden = dom.reportSection.style.display === 'none';
  const chatWasHidden   = dom.chatSection.style.display   === 'none';

  if (reportWasHidden) fadeIn(dom.reportSection);
  if (chatWasHidden)   fadeIn(dom.chatSection);

  // Scroll to report (give fade a head-start)
  setTimeout(() => {
    dom.reportSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, reportWasHidden ? 120 : 0);
}

// ── Search Error Flash ─────────────────────────────────────────────────────────

function flashSearchError() {
  const bar = dom.searchBar;
  bar.style.transition = 'box-shadow 0.2s ease';
  bar.style.boxShadow  = '0 0 0 3px rgba(192,57,43,0.35)';
  const examples = activeCity === 'Eugene'
    ? '"Whiteaker" or "South Eugene"'
    : '"Logan Square" or "Hyde Park"';
  dom.searchInput.placeholder = `Try a name like ${examples}`;
  dom.searchInput.value = '';

  setTimeout(() => {
    bar.style.boxShadow = '';
    updateSearchPlaceholder();
  }, 2800);
}

// ── Chat: Reset on Neighborhood Switch ────────────────────────────────────────

function resetChat(n) {
  // Cancel any pending typing response from the previous neighborhood
  if (chatTypingTimeout) {
    clearTimeout(chatTypingTimeout);
    chatTypingTimeout = null;
  }
  isChatTyping = false;

  // Remove typing indicator if present
  const indicator = $('typing-indicator');
  if (indicator) indicator.remove();

  // Update context chip (location pin + name)
  dom.chatContextChip.innerHTML =
    `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">` +
    `<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> ${n.name}`;

  // Update welcome bubble
  dom.chatWelcomeMsg.innerHTML =
    `Hi! I'm trained on real resident reviews for <strong>${n.name}</strong>. ` +
    `Ask me anything — noise levels, parking, safety, schools, commute, or what ` +
    `living here is actually like day to day.`;

  // Update commute chip to match city
  const commuteChip = document.querySelector('.chat-prompt-chip[data-prompt*="Loop"]') ||
    document.querySelector('.chat-prompt-chip[data-prompt*="campus"]');
  if (commuteChip) {
    if (n.city === 'Eugene') {
      commuteChip.textContent = 'Commute to campus?';
      commuteChip.dataset.prompt = "What's the commute to UO campus like?";
    } else {
      commuteChip.textContent = 'Commute to the Loop?';
      commuteChip.dataset.prompt = "What's the commute to the Loop like?";
    }
  }

  // Clear all messages except the first (welcome)
  while (dom.chatMessages.children.length > 1) {
    dom.chatMessages.removeChild(dom.chatMessages.lastChild);
  }
}

// ── Chat: Keyword Detection ────────────────────────────────────────────────────

const KEYWORD_RULES = [
  { re: /\b(noise|loud|quiet|sound|volume|noisy|hear)\b/i,              key: 'noise' },
  { re: /\b(park|parking|car|garage|spot|street\s+park)\b/i,            key: 'parking' },
  { re: /\b(safe|safety|crime|dangerous|secure|walk\s+alone|sketchy)\b/i, key: 'safety' },
  { re: /\b(school|schools|education|cps|grade|teacher|class)\b/i,      key: 'schools' },
  { re: /\b(kid|kids|family|families|children|child|stroller|baby|toddler)\b/i, key: 'families' },
  { re: /\b(nightlife|bar|bars|restaurant|restaurants|drink|drinks|party|night\s+out|brunch)\b/i, key: 'nightlife' },
  { re: /\b(commute|loop|downtown|drive|driving|rush\s+hour)\b/i,       key: 'commute' },
  { re: /\b(construction|building|crane|build|jackhammer|scaffold)\b/i, key: 'construction' },
  { re: /\b(walk|walkable|walkability|on\s+foot|pedestrian|stroll)\b/i, key: 'walkability' },
  { re: /\b(transit|cta|train|l\s+train|bus|subway|metra|el\s+stop|red\s+line|blue\s+line|brown\s+line|ltd|emx)\b/i, key: 'transit' },
];

function detectKeyword(text) {
  for (const { re, key } of KEYWORD_RULES) {
    if (re.test(text)) return key;
  }
  return 'general';
}

// ── Chat: Response Generation ──────────────────────────────────────────────────

function buildResponse(keyword, n) {
  const cs = n.categoryScores;
  // Convenience: first resident quote for neighborhood color
  const q0 = n.residentQuotes[0];

  switch (keyword) {

    case 'noise':
      return (
        `Noise in <strong>${n.name}</strong> scores <strong>${cs.noise}/100</strong> — ` +
        `${scoreLabel(cs.noise)} for Chicago. ` +
        (cs.noise >= 80
          ? `Most residents describe it as comfortably quiet, even on weekend evenings.`
          : cs.noise >= 65
          ? `Noise is manageable — there's life on the streets but it rarely becomes overwhelming.`
          : `It can get genuinely loud, especially on weekends and near commercial corridors. ` +
            `Light sleepers should visit on a Friday night before committing.`) +
        ` A local perspective: <em>"${q0.text}"</em>`
      );

    case 'parking':
      return (
        `Street parking in <strong>${n.name}</strong> is ` +
        (cs.traffic >= 78
          ? `generally findable with patience — side streets are your best bet, and most residents figure it out.`
          : cs.traffic >= 63
          ? `competitive, especially evenings and weekends. A city permit for your zone helps a lot.`
          : `genuinely difficult. Many daily drivers in this area budget for a monthly garage spot ` +
            `rather than hunting for street parking each night.`) +
        ` Traffic score: <strong>${cs.traffic}/100</strong>.`
      );

    case 'safety':
      return (
        `<strong>${n.name}</strong> has a safety score of <strong>${cs.safety}/100</strong> — ` +
        `${scoreLabel(cs.safety)}. ` +
        (cs.safety >= 85
          ? `Residents routinely report feeling comfortable at most hours, including evening walks. ` +
            `It's one of the more consistently safe neighborhoods across the North Side.`
          : cs.safety >= 70
          ? `Most residents feel comfortable day-to-day. Block-by-block variation exists — as it does ` +
            `across all of Chicago — so connecting with neighbors on Nextdoor is always smart.`
          : `Safety is more mixed and block-dependent. Residents recommend researching your ` +
            `specific block before committing, and getting intel from the neighborhood Facebook ` +
            `group or Nextdoor for street-level accuracy.`)
      );

    case 'schools':
      if (n.city === 'Eugene') {
        return (
          `Schools in <strong>${n.name}</strong> score <strong>${cs.schools}/100</strong> — ` +
          `${scoreLabel(cs.schools)} by Oregon standards. ` +
          (cs.schools >= 85
            ? `The area is served by well-regarded schools in Eugene's 4J School District, and families ` +
              `here actively choose to stay in the public system. That's a meaningful signal.`
            : cs.schools >= 70
            ? `Solid 4J School District options nearby, though families typically research ` +
              `specific school assignments carefully before committing to a particular block.`
            : `School quality is more variable here. Look up your specific address on the 4J ` +
              `School District or Great Schools website before assuming coverage.`)
        );
      }
      return (
        `Schools in <strong>${n.name}</strong> score <strong>${cs.schools}/100</strong> — ` +
        `${scoreLabel(cs.schools)} by CPS standards. ` +
        (cs.schools >= 85
          ? `Multiple well-regarded neighborhood schools serve the area, and families here ` +
            `actively choose to stay in the public system rather than going private. That's a meaningful signal.`
          : cs.schools >= 70
          ? `Solid CPS options nearby, though families typically research specific school assignments ` +
            `carefully. Selective enrollment programs are a popular alternative for families with options.`
          : `School quality is more variable here. Many families supplement with magnet programs ` +
            `or private schools — look up your specific address on the CPS school locator before assuming.`)
      );

    case 'families':
      const famScore = Math.round((cs.safety + cs.schools) / 2);
      return (
        `For families, <strong>${n.name}</strong> scores roughly <strong>${famScore}/100</strong> ` +
        `combining safety (${cs.safety}) and schools (${cs.schools}). ` +
        (famScore >= 82
          ? `It's a genuinely family-oriented neighborhood — parks, playgrounds, strollers on every ` +
            `block, and a school community that keeps families rooted here for years.`
          : famScore >= 67
          ? `Families do well here with some planning. The right block and school assignment makes ` +
            `a meaningful difference in the day-to-day experience.`
          : `Families are here and build real community, but the experience varies more by specific ` +
            `block than in some other neighborhoods. Worth multiple visits at different times of day before deciding.`)
      );

    case 'nightlife':
      return (
        `<strong>${n.name}</strong>'s nightlife energy is ` +
        (cs.noise <= 55
          ? `very active — bars, restaurants, and late-night spots define the neighborhood's character. ` +
            `Fantastic if you love it; less ideal if you're a light sleeper or want quiet evenings in.`
          : cs.noise <= 72
          ? `lively but balanced — great food and bar options without the chaotic volume of denser ` +
            `entertainment districts. A solid choice if you want a scene but also value your sleep.`
          : `on the quieter, neighborhood-bar end of the spectrum — think good cocktails and regulars ` +
            `rather than late-night crowds. Ideal if you want dining over nightclubbing.`) +
        ` (Noise score: <strong>${cs.noise}/100</strong> — higher means quieter here.)`
      );

    case 'commute':
      if (n.city === 'Eugene') {
        return (
          `Commuting from <strong>${n.name}</strong> to downtown Eugene or UO campus is ` +
          (cs.traffic >= 78
            ? `genuinely easy — Eugene's bike network is among the best in Oregon, and most ` +
              `trips that feel like a drive are faster by bike or LTD bus once you learn the routes.`
            : cs.traffic >= 63
            ? `manageable, especially by bike or LTD bus. Eugene is compact enough that ` +
              `most destinations are reachable in under 20 minutes without a car.`
            : `a bit of a commitment by car at peak hours, but LTD routes and the city's bike ` +
              `lanes make transit a real alternative — the EmX BRT is especially reliable.`) +
          ` Traffic score: <strong>${cs.traffic}/100</strong>.`
        );
      }
      return (
        `Commuting from <strong>${n.name}</strong> to the Loop is ` +
        (cs.traffic >= 78
          ? `genuinely smooth by Chicago standards. Both the L and bus routes are reliable, ` +
            `and driving is viable outside peak hours.`
          : cs.traffic >= 63
          ? `manageable, especially by CTA. Residents strongly recommend transit over driving ` +
            `for the daily commute — once you build the habit, it's often faster.`
          : `a challenge by car, but CTA makes it workable. Skip driving to the Loop entirely ` +
            `during rush hour — the transit alternative is consistently faster and less stressful.`) +
        ` Traffic score: <strong>${cs.traffic}/100</strong>.`
      );

    case 'construction':
      return (
        `Construction impact in <strong>${n.name}</strong> scores <strong>${cs.construction}/100</strong> — ` +
        `${scoreLabel(cs.construction)}. ` +
        (cs.construction >= 82
          ? `Relatively calm right now — fewer active sites than most Chicago neighborhoods at the moment.`
          : cs.construction >= 67
          ? `Some active projects, but nothing that dominates daily life for most residents.`
          : `Construction is a real daily factor here. Multiple active projects mean noise, truck ` +
            `traffic, and street disruptions are part of the deal right now.`) +
        ` Current alert: <em>"${n.constructionAlert}"</em>`
      );

    case 'walkability':
      if (n.city === 'Eugene') {
        return (
          `<strong>${n.name}</strong> is ` +
          (cs.traffic >= 78
            ? `highly bikeable and walkable — Eugene's trail network and protected bike lanes ` +
              `put most errands and destinations within easy reach. Many residents live entirely car-free.`
            : cs.traffic >= 63
            ? `reasonably bikeable, with good access to Eugene's trail network and LTD buses on foot ` +
              `or two wheels. A car is handy but not essential for most daily needs.`
            : `car-dependent for some trips, but Eugene's bike infrastructure is improving. ` +
              `Check the specific bike lane coverage near your address before going car-free.`) +
          ` Traffic score: <strong>${cs.traffic}/100</strong>.`
        );
      }
      return (
        `<strong>${n.name}</strong> is ` +
        (cs.traffic >= 78
          ? `highly walkable — Chicago's grid puts most errands, restaurants, and transit stops within ` +
            `easy walking distance. Many residents live entirely car-free.`
          : cs.traffic >= 63
          ? `reasonably walkable, with good access to transit, food, and parks on foot. A car ` +
            `is handy but not essential for most daily needs.`
          : `walkable in the Chicago sense — the grid gets you somewhere — but more transit-dependent ` +
            `than some neighborhoods when it comes to daily errands and grocery runs.`) +
        ` Traffic score: <strong>${cs.traffic}/100</strong>.`
      );

    case 'transit':
      if (n.city === 'Eugene') {
        return (
          `Transit access in <strong>${n.name}</strong> is <strong>${scoreLabel(cs.traffic)}</strong> ` +
          `— traffic score <strong>${cs.traffic}/100</strong>. ` +
          (cs.traffic >= 78
            ? `LTD bus routes and Eugene's protected bike network serve the area well. The EmX ` +
              `Bus Rapid Transit line provides fast connections to downtown and the UO campus. ` +
              `Car-free living is very viable here.`
            : cs.traffic >= 63
            ? `LTD bus coverage is decent — routes connect most destinations, though frequency ` +
              `drops on evenings and weekends. Eugene's bike network often beats the bus for ` +
              `short trips.`
            : `Transit coverage is thinner here than in the central neighborhoods. Check the ` +
              `LTD trip planner for your specific routes — and consider whether Eugene's bike ` +
              `lanes might make a bicycle the more practical option.`)
        );
      }
      return (
        `Transit access in <strong>${n.name}</strong> is <strong>${scoreLabel(cs.traffic)}</strong> ` +
        `— traffic score <strong>${cs.traffic}/100</strong>. ` +
        (cs.traffic >= 78
          ? `Multiple CTA bus and rail lines serve the area well, with solid frequency throughout the day. ` +
            `Car-free living is very viable and most residents embrace it.`
          : cs.traffic >= 63
          ? `CTA coverage is decent — rail and bus options cover most destinations, though rush-hour ` +
            `crowding on popular lines is a real factor.`
          : `Transit exists but coverage is thinner than in higher-scoring neighborhoods. ` +
            `Check the CTA trip planner for your specific commute routes before committing.`)
      );

    default:
      return (
        `<strong>${n.name}</strong> scores <strong>${n.overallScore}/100</strong> overall. ` +
        `${n.summary.split('.')[0].trim()}. ` +
        `Ask me anything more specific — noise, parking, safety, schools, nightlife, ` +
        `commute, walkability, or what daily life actually feels like here.`
      );
  }
}

// ── Chat: Message Rendering ────────────────────────────────────────────────────

function renderMessage(html, role) {
  const time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  const avatar = role === 'ai' ? '🏘️' : '👤';

  const el = document.createElement('div');
  el.className = `chat-msg chat-msg--${role}`;
  el.innerHTML =
    `<div class="chat-msg__avatar" aria-hidden="true">${avatar}</div>` +
    `<div>` +
      `<div class="chat-msg__bubble">${html}</div>` +
      `<div class="chat-msg__time">${time}</div>` +
    `</div>`;

  dom.chatMessages.appendChild(el);
  dom.chatMessages.scrollTop = dom.chatMessages.scrollHeight;
}

function showTypingIndicator() {
  const el = document.createElement('div');
  el.id        = 'typing-indicator';
  el.className = 'chat-msg chat-msg--ai';
  el.setAttribute('aria-label', 'KYN AI is typing');
  el.innerHTML =
    `<div class="chat-msg__avatar" aria-hidden="true">🏘️</div>` +
    `<div class="chat-typing">` +
      `<div class="chat-typing__dot"></div>` +
      `<div class="chat-typing__dot"></div>` +
      `<div class="chat-typing__dot"></div>` +
    `</div>`;

  dom.chatMessages.appendChild(el);
  dom.chatMessages.scrollTop = dom.chatMessages.scrollHeight;
}

function removeTypingIndicator() {
  const el = $('typing-indicator');
  if (el) el.remove();
}

// ── Chat: Send Logic ───────────────────────────────────────────────────────────

function sendChatMessage(text) {
  if (!currentNeighborhood || isChatTyping || !text.trim()) return;

  renderMessage(text.trim(), 'user');
  dom.chatInput.value = '';
  isChatTyping = true;

  showTypingIndicator();

  const delay = randomInt(1100, 2200);
  const n     = currentNeighborhood; // capture in case neighborhood changes mid-wait

  chatTypingTimeout = setTimeout(() => {
    removeTypingIndicator();
    // Only respond if the user hasn't switched neighborhoods
    if (currentNeighborhood === n) {
      const keyword  = detectKeyword(text);
      const response = buildResponse(keyword, n);
      renderMessage(response, 'ai');
    }
    isChatTyping     = false;
    chatTypingTimeout = null;
  }, delay);
}

// ── Chat: Prompt Chips ─────────────────────────────────────────────────────────

function initPromptChips() {
  $$('.chat-prompt-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      if (isChatTyping || !currentNeighborhood) return;
      sendChatMessage(chip.dataset.prompt);
    });
  });
}

// ── Email Form ─────────────────────────────────────────────────────────────────

function highlightInvalid(el) {
  el.style.borderColor = 'var(--danger)';
  el.style.boxShadow   = '0 0 0 3px rgba(192,57,43,0.12)';
  el.addEventListener('input', () => {
    el.style.borderColor = '';
    el.style.boxShadow   = '';
  }, { once: true });
}

function handleEmailSubmit(e) {
  e.preventDefault();

  const name    = dom.signupName.value.trim();
  const email   = dom.signupEmail.value.trim();
  const segment = dom.signupSegment.value;
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let valid = true;

  if (!name)               { highlightInvalid(dom.signupName);    valid = false; }
  if (!emailRe.test(email)){ highlightInvalid(dom.signupEmail);   valid = false; }
  if (!segment)            { highlightInvalid(dom.signupSegment); valid = false; }

  if (!valid) return;

  dom.signupSubmitBtn.disabled    = true;
  dom.signupSubmitBtn.textContent = 'Submitting…';

  // Simulate async submission
  setTimeout(() => {
    // Hide all form rows/fields/button/disclaimer
    dom.emailForm.querySelectorAll(
      '.email-form__row, .form-field, .form-submit, .email-form__disclaimer'
    ).forEach(el => { el.style.display = 'none'; });

    // Personalise success title
    const successTitle = dom.signupSuccess.querySelector('.email-form__success-title');
    if (successTitle) successTitle.textContent = `You're on the list, ${name}!`;

    dom.signupSuccess.classList.add('visible');
  }, 750);
}

// ── AI Feedback Buttons ────────────────────────────────────────────────────────

function initAiFeedback() {
  $$('.ai-feedback-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      // Toggle active state and disable sibling
      const siblings = btn.parentElement.querySelectorAll('.ai-feedback-btn');
      siblings.forEach(s => {
        s.style.opacity = '0.45';
        s.style.pointerEvents = 'none';
      });
      btn.style.opacity = '1';
      btn.style.borderColor = 'var(--navy)';
      btn.style.color       = 'var(--navy)';
      btn.style.pointerEvents = 'none';
    });
  });
}

// ── Smooth Scroll for Anchor Links ────────────────────────────────────────────

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      if (!id) return;
      const target = $(id);
      if (!target) return;
      e.preventDefault();

      // If the target section is hidden (report/chat), skip
      if (target.style.display === 'none') return;

      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ── Footer Neighborhood Links ─────────────────────────────────────────────────

function initFooterLinks() {
  document.querySelectorAll('.footer__link[data-neighborhood]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const n = neighborhoodData.find(d => d.name === link.dataset.neighborhood);
      if (n) showReport(n);
    });
  });
}

// ── Search Form ────────────────────────────────────────────────────────────────

function initSearch() {
  dom.heroSearchForm.addEventListener('submit', e => {
    e.preventDefault();
    const query = dom.searchInput.value.trim();
    const n = findNeighborhood(query);

    if (n) {
      dom.searchInput.value = '';
      showReport(n);
    } else {
      flashSearchError();
    }
  });
}

// ── Chat Event Listeners ───────────────────────────────────────────────────────

function initChat() {
  dom.chatSendBtn.addEventListener('click', () => {
    sendChatMessage(dom.chatInput.value);
  });

  dom.chatInput.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendChatMessage(dom.chatInput.value);
    }
  });
}

// ── Nav: active link on scroll ────────────────────────────────────────────────

function initScrollSpy() {
  const sections = [
    $('how-it-works'),
    $('email-section'),
  ].filter(Boolean);

  const navLinks = $$('.nav__link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href && href === `#${entry.target.id}`) {
            link.style.color = 'var(--white)';
          } else {
            link.style.color = '';
          }
        });
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });

  sections.forEach(s => observer.observe(s));
}

// ── FAQ Accordion ──────────────────────────────────────────────────────────────

function initFaq() {
  $$('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const open   = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      answer.classList.toggle('open', !open);
    });
  });
}

function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -60px 0px', threshold: 0.08 });

  $$('.reveal').forEach(el => observer.observe(el));
}

// ── Initialise ─────────────────────────────────────────────────────────────────

function init() {
  dom.reportSection.style.display = 'none';
  dom.chatSection.style.display   = 'none';
  buildBrowseBar();
  initSearch();
  initChat();
  initPromptChips();
  initSmoothScroll();
  initFooterLinks();
  initAiFeedback();
  initScrollSpy();
  initFaq();
  initScrollReveal();
}

document.addEventListener('DOMContentLoaded', init);
