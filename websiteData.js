const neighborhoodData = [
  // ── Chicago ──────────────────────────────────────────────────────────────────
  {
    city: "Chicago",
    name: "Lincoln Park",
    overallScore: 82,
    categoryScores: {
      noise: 71,
      safety: 85,
      traffic: 68,
      schools: 91,
      construction: 74
    },
    summary: "Lincoln Park is one of Chicago's most desirable neighborhoods, offering a blend of tree-lined streets, top-rated schools, and a vibrant dining and nightlife scene. The proximity to Lincoln Park Zoo and the lakefront trail makes it a magnet for young families and outdoor enthusiasts alike. While parking and weekend bar noise can be frustrating, most residents agree the quality of life here is difficult to match anywhere else in the city.",
    residentQuotes: [
      {
        username: "LincolnParkMom",
        text: "Raised three kids here and wouldn't trade it. Schools are excellent, neighbors are engaged, and the park is basically our backyard.",
        timestamp: "2025-11-04T09:22:00Z"
      },
      {
        username: "brewnerd_chicago",
        text: "Weekends near Halsted are loud but honestly that's part of the charm. Love being able to walk everywhere.",
        timestamp: "2025-10-19T21:45:00Z"
      },
      {
        username: "LPdogwalker",
        text: "The park itself is stunning in every season. Only gripe is the construction on Fullerton has been going on forever.",
        timestamp: "2025-12-01T07:58:00Z"
      }
    ],
    constructionAlert: "Fullerton Ave repaving project ongoing between Clark and Halsted — expect lane closures and noise on weekday mornings through Q1 2026."
  },
  {
    city: "Chicago",
    name: "Wicker Park",
    overallScore: 78,
    categoryScores: {
      noise: 65,
      safety: 76,
      traffic: 62,
      schools: 74,
      construction: 70
    },
    summary: "Wicker Park pulses with creative energy, hosting an eclectic mix of independent boutiques, murals, and some of the city's best late-night venues. The neighborhood has gentrified significantly over the past decade, bringing improved safety metrics but also rising rents and a changing character that long-timers debate passionately. The Blue Line stop at Damen makes commuting into the Loop painless, though the intersection at Milwaukee, North, and Damen remains one of the city's most chaotic traffic points.",
    residentQuotes: [
      {
        username: "wickerpark_wren",
        text: "The art scene here is still alive if you know where to look. Yes it's gotten expensive but the community keeps fighting to stay weird.",
        timestamp: "2025-09-30T18:12:00Z"
      },
      {
        username: "damenave_daily",
        text: "Six-way intersection nearly killed me on my bike twice this month. City needs to redesign that crossing immediately.",
        timestamp: "2025-11-22T08:05:00Z"
      },
      {
        username: "VinylAndRamen",
        text: "Best record shops and ramen spots in the city within a four-block radius. This neighborhood has a special kind of density.",
        timestamp: "2025-10-07T13:30:00Z"
      }
    ],
    constructionAlert: "Water main replacement work on North Ave between Damen and Wood St expected through March 2026 — single-lane traffic control in effect."
  },
  {
    city: "Chicago",
    name: "Logan Square",
    overallScore: 80,
    categoryScores: {
      noise: 69,
      safety: 78,
      traffic: 73,
      schools: 76,
      construction: 67
    },
    summary: "Logan Square has become Chicago's unofficial capital of craft cocktails, farm-to-table dining, and DIY culture, drawing a blend of long-time Latino residents and newer transplants who share a fierce pride in the neighborhood's identity. The boulevard system — grand 19th-century tree-lined parkways — gives it an architectural grandeur unusual for a working-class neighborhood. Displacement pressures remain a flashpoint, with community land trusts and affordable housing advocates actively organizing to preserve economic diversity.",
    residentQuotes: [
      {
        username: "boulevardkid",
        text: "Grew up here when it was different and I'm still here because the roots run deep. The food scene is incredible now but I worry about my neighbors being priced out.",
        timestamp: "2025-08-14T20:00:00Z"
      },
      {
        username: "logansq_brewer",
        text: "Every weekend there's something going on in the square. Farmers market, live music, pop-up art — it genuinely feels alive.",
        timestamp: "2025-11-01T11:20:00Z"
      },
      {
        username: "MilwaukeeAveRunner",
        text: "Safest I've felt on runs in any Chicago neighborhood. People are out at all hours and everyone looks out for each other.",
        timestamp: "2025-12-03T06:47:00Z"
      }
    ],
    constructionAlert: "Affordable housing development breaking ground at Kedzie and Armitage in January 2026 — expect significant crane activity and road closures near the intersection."
  },
  {
    city: "Chicago",
    name: "River North",
    overallScore: 74,
    categoryScores: {
      noise: 55,
      safety: 72,
      traffic: 51,
      schools: 70,
      construction: 58
    },
    summary: "River North is Chicago's gallery district turned nightlife epicenter, where loft conversions and rooftop bars sit alongside world-class art spaces and a density of restaurants that rivals any urban neighborhood in the Midwest. The area is loud — consistently and unapologetically — with Hubbard Street functioning as a Friday-night corridor that can make sleep before midnight difficult. Traffic and ride-share congestion are perennial concerns, but the walkability and proximity to the Loop keep it firmly on the radar of young professionals.",
    residentQuotes: [
      {
        username: "RiverNorth_Realtor",
        text: "Clients either love the energy or hate it. There's no in-between. If you want quiet, this is not your neighborhood.",
        timestamp: "2025-10-25T14:15:00Z"
      },
      {
        username: "galleryhopper312",
        text: "The gallery scene on Friday evenings is something tourists don't even know about. Just walk down Superior and pop into every open door.",
        timestamp: "2025-09-05T19:40:00Z"
      },
      {
        username: "HighRiseHector",
        text: "My building has incredible views and I'm five minutes from work on foot. The Uber surge pricing downstairs is honestly my only real complaint.",
        timestamp: "2025-11-17T22:55:00Z"
      }
    ],
    constructionAlert: "New mixed-use tower construction at Ontario and State creating significant pedestrian detours and noise 7am–5pm weekdays through mid-2026."
  },
  {
    city: "Chicago",
    name: "Bucktown",
    overallScore: 81,
    categoryScores: {
      noise: 72,
      safety: 82,
      traffic: 70,
      schools: 79,
      construction: 75
    },
    summary: "Bucktown occupies a sweet spot between the relentless energy of Wicker Park and the family-oriented calm of Lincoln Park — a neighborhood of renovated Victorians, independent coffee shops, and a deeply local sensibility. The 606 trail has transformed the neighborhood's northern edge into a beloved linear park that doubles as a social corridor on weekends. Crime has trended downward over the past three years, and residents describe a strong block-club culture that contributes to the community's cohesion.",
    residentQuotes: [
      {
        username: "606trailblazer",
        text: "The 606 changed everything over here. Best infrastructure investment the city has made in decades. My kids use it every single day.",
        timestamp: "2025-10-12T08:30:00Z"
      },
      {
        username: "BucktownBrenda",
        text: "We've been here 11 years and it just keeps getting better. Block parties are legendary and everyone knows everyone.",
        timestamp: "2025-07-20T16:22:00Z"
      },
      {
        username: "victorian_villa",
        text: "The housing stock here is gorgeous. You can still find character homes that haven't been over-renovated into blandness.",
        timestamp: "2025-11-30T09:18:00Z"
      }
    ],
    constructionAlert: "608 trail extension survey crews active along Bloomingdale through January 2026 — temporary fencing on some trail access points."
  },
  {
    city: "Chicago",
    name: "Wrigleyville",
    overallScore: 68,
    categoryScores: {
      noise: 42,
      safety: 70,
      traffic: 48,
      schools: 75,
      construction: 72
    },
    summary: "Wrigleyville is defined by its iconic ballpark and the seasonal chaos it generates — on game days the neighborhood transforms into a street festival that is exhilarating for some and deeply exhausting for full-time residents. Outside of baseball season, the area settles into a genuinely pleasant neighborhood with good transit access, friendly bars, and a close-knit off-season community that locals say is the neighborhood's best-kept secret. Noise and traffic scores reflect the reality of living 300 feet from a 40,000-seat stadium.",
    residentQuotes: [
      {
        username: "CubsFan_Claudette",
        text: "I knew what I was signing up for when I moved here and I have zero regrets. Nothing beats hearing the crowd roar from your living room.",
        timestamp: "2025-09-28T14:00:00Z"
      },
      {
        username: "Sheffield_Sleeper",
        text: "Game days are chaos. Post-game Ubers pile up on my street for two hours. It's a lot to deal with 81 home games a year.",
        timestamp: "2025-10-03T23:10:00Z"
      },
      {
        username: "offseason_Lakeview",
        text: "October through March this place is genuinely one of my favorite Chicago neighborhoods. Cozy bars, great Thai food, and nobody around.",
        timestamp: "2025-12-08T17:45:00Z"
      }
    ],
    constructionAlert: "Wrigley Field Marquee expansion phase 3 construction on Addison and Clark — significant noise and street closures on non-game days through April 2026."
  },
  {
    city: "Chicago",
    name: "Hyde Park",
    overallScore: 77,
    categoryScores: {
      noise: 80,
      safety: 71,
      traffic: 75,
      schools: 88,
      construction: 79
    },
    summary: "Hyde Park is Chicago's intellectual heartbeat — home to the University of Chicago, the Museum of Science and Industry, and the Obama Presidential Center, now under construction nearby. The neighborhood has a distinctive academic-village feel, with independent bookshops, global cuisine, and a community that engages seriously in civic life and local politics. Safety disparities exist at the neighborhood's edges compared to the university core, a tension residents acknowledge openly and organize around through several active community safety coalitions.",
    residentQuotes: [
      {
        username: "UChicago_Prof",
        text: "I've lived here 22 years because I can't imagine being anywhere else intellectually. The discourse at the coffee shop alone is worth the commute.",
        timestamp: "2025-08-09T10:14:00Z"
      },
      {
        username: "MSI_neighbor",
        text: "The museum is practically my backyard and I still haven't been to every exhibit. Hyde Park is an embarrassment of cultural riches.",
        timestamp: "2025-11-05T15:50:00Z"
      },
      {
        username: "SouthSideScholar",
        text: "The Obama Center construction has brought mixed feelings — excited for the investment, worried about what it does to housing costs long term.",
        timestamp: "2025-10-21T12:40:00Z"
      }
    ],
    constructionAlert: "Obama Presidential Center site on Stony Island Ave has active heavy equipment operations Mon–Sat, with road closures near Cornell Drive expected through late 2026."
  },
  {
    city: "Chicago",
    name: "Pilsen",
    overallScore: 75,
    categoryScores: {
      noise: 74,
      safety: 69,
      traffic: 77,
      schools: 71,
      construction: 65
    },
    summary: "Pilsen is one of Chicago's most visually arresting neighborhoods, its viaducts and building faces covered in murals that document Mexican-American history, political struggle, and neighborhood pride. The 18th Street corridor is a hub of authentic taquerias, panaderías, and cultural venues that draw visitors from across the metro, though longtime residents worry constantly about the creeping displacement driven by the National Museum of Mexican Art's rising profile and investor interest. The community's artistic and activist DNA means that change here is rarely quiet.",
    residentQuotes: [
      {
        username: "18thStreet_Beatriz",
        text: "This neighborhood raised me and I'm fighting to make sure it can raise my daughter too. Gentrification is real and we have to talk about it honestly.",
        timestamp: "2025-09-15T20:30:00Z"
      },
      {
        username: "muralista_chicago",
        text: "Every block has a story painted on it. New murals go up constantly. The walls here speak and you just have to stop and listen.",
        timestamp: "2025-11-12T11:00:00Z"
      },
      {
        username: "TacoTuesdayPilsen",
        text: "Best food in Chicago, full stop. My weekend routine is walk to three different taquerias and argue about which one is best.",
        timestamp: "2025-10-28T13:20:00Z"
      }
    ],
    constructionAlert: "New mixed-income housing development on 16th and Halsted breaking ground in February 2026 — community meetings scheduled at Dvorak Park field house."
  },
  {
    city: "Chicago",
    name: "Andersonville",
    overallScore: 85,
    categoryScores: {
      noise: 81,
      safety: 88,
      traffic: 79,
      schools: 84,
      construction: 82
    },
    summary: "Andersonville consistently ranks among Chicago's most livable neighborhoods, a compact corridor along Clark Street with an unusually high density of independent businesses, a celebrated LGBTQ+ heritage, and a community warmth that visitors remark on immediately. The neighborhood achieved Evanston-adjacent calm without sacrificing urban energy — you can find a Swedish bakery, a feminist bookshop, and a cocktail bar within 200 feet of each other. Crime rates are low, schools perform well, and the Red Line's Berwyn and Bryn Mawr stops provide solid transit access.",
    residentQuotes: [
      {
        username: "ClarkStreet_Clare",
        text: "There is nowhere in Chicago I would rather live. Supportive community, incredible small businesses, and I feel safe at any hour.",
        timestamp: "2025-10-18T09:00:00Z"
      },
      {
        username: "SwedishBakeryFan",
        text: "The holiday season here is absolutely magical. Every shopfront decorated, carolers, and the bakery doing their St. Lucia buns. It's a whole thing.",
        timestamp: "2025-12-07T08:45:00Z"
      },
      {
        username: "andersonville_activist",
        text: "What makes this place work is that people actually show up — to zoning meetings, to block cleanups, to support each other's businesses. Real community.",
        timestamp: "2025-11-09T16:30:00Z"
      }
    ],
    constructionAlert: "Clark Street streetscape enhancement project between Foster and Bryn Mawr begins spring 2026 — new bike infrastructure and sidewalk widening planned."
  },
  {
    city: "Chicago",
    name: "Lakeview",
    overallScore: 79,
    categoryScores: {
      noise: 68,
      safety: 81,
      traffic: 70,
      schools: 83,
      construction: 76
    },
    summary: "Lakeview is a sprawling North Side neighborhood that contains multitudes — the gay bars of Boystown, the family-filled streets of East Lakeview, and the sports-bar density of Wrigleyville all fall within its borders. The neighborhood's lakefront access is genuinely unmatched, with Belmont Harbor providing a front-row seat to Chicago's best sunrises. Diversey Parkway construction has tested residents' patience but the underlying quality of life — good schools, low serious crime, excellent transit — keeps Lakeview consistently popular.",
    residentQuotes: [
      {
        username: "BelmontHarbor_Bill",
        text: "I sail out of Belmont Harbor every summer and it never gets old. The city from the water on a clear day is why I'll never leave.",
        timestamp: "2025-07-04T18:00:00Z"
      },
      {
        username: "EastLakeviewMom",
        text: "Neighborhood schools have gotten so much better. We deliberately chose to stay in CPS and are genuinely glad we did.",
        timestamp: "2025-11-20T10:15:00Z"
      },
      {
        username: "BoysTownLocal",
        text: "This stretch of Halsted has been a sanctuary for the LGBTQ+ community for decades. The history here is important and worth protecting.",
        timestamp: "2025-10-05T21:10:00Z"
      }
    ],
    constructionAlert: "Diversey Parkway bridge deck reconstruction ongoing — westbound lane closures and detours through Clybourn Ave expected until summer 2026."
  },
  {
    city: "Chicago",
    name: "Old Town",
    overallScore: 83,
    categoryScores: {
      noise: 73,
      safety: 86,
      traffic: 74,
      schools: 85,
      construction: 80
    },
    summary: "Old Town occupies a charming middle ground between the Gold Coast's luxury and Lincoln Park's family bustle — a neighborhood of cobblestone alleys, Second City comedy, and turreted Victorians that gives the area a distinct historical personality. Wells Street is a neighborhood main street done right: restaurants, bars, and shops at a human scale, with enough variety to satisfy without overwhelming. The neighborhood is among the safest on the North Side, and its schools draw families who deliberately prioritize staying in the city.",
    residentQuotes: [
      {
        username: "SecondCityFan",
        text: "Having the comedy institution literally in our neighborhood means we get to see future SNL stars before they blow up. Worth every penny of rent.",
        timestamp: "2025-09-22T22:00:00Z"
      },
      {
        username: "OldTownOliver",
        text: "The alley network and side streets here are beautiful and walkable in a way almost no other Chicago neighborhood achieves. I just wander.",
        timestamp: "2025-10-30T14:55:00Z"
      },
      {
        username: "WellsStreet_Wendy",
        text: "Art Fair in June is the highlight of the year. The whole block transforms and you remember why you fell in love with Chicago.",
        timestamp: "2025-06-14T16:20:00Z"
      }
    ],
    constructionAlert: "North Ave water infrastructure upgrades between Wells and Cleveland ongoing through Q2 2026 — parking lanes temporarily removed on north side of street."
  },
  {
    city: "Chicago",
    name: "Gold Coast",
    overallScore: 80,
    categoryScores: {
      noise: 78,
      safety: 87,
      traffic: 72,
      schools: 82,
      construction: 69
    },
    summary: "The Gold Coast is Chicago's most storied enclave of wealth, home to historic mansions on Astor Street, luxury high-rises on Lake Shore Drive, and the kind of institutionalized polish that comes from 150 years of money. The lakefront access here is arguably the finest in the city — Olive Park and the Ohio Street Beach are right there, and Oak Street Beach draws a glamorous summer crowd. Construction of luxury towers continues to accelerate on the strip's edges, which longtime residents have complicated feelings about.",
    residentQuotes: [
      {
        username: "AstorStreet_Agnes",
        text: "I've lived on Astor for 30 years and it remains one of the finest streets in America. The architecture alone is worth the property taxes.",
        timestamp: "2025-08-25T11:30:00Z"
      },
      {
        username: "OakStreetBeach_Reg",
        text: "Nowhere else in Chicago can you be at the beach at 7am and at work in the Loop by 8:30. The location is simply unbeatable.",
        timestamp: "2025-07-15T07:00:00Z"
      },
      {
        username: "GoldCoastGripe",
        text: "Another glass tower going up. Another historic brownstone coming down. I wish the landmarks commission had more teeth.",
        timestamp: "2025-11-08T19:00:00Z"
      }
    ],
    constructionAlert: "Luxury residential tower construction at Chestnut and Dearborn ongoing — tower crane operations visible on Dearborn St with sidewalk canopy through 2026."
  },
  {
    city: "Chicago",
    name: "Streeterville",
    overallScore: 76,
    categoryScores: {
      noise: 64,
      safety: 79,
      traffic: 55,
      schools: 77,
      construction: 61
    },
    summary: "Streeterville is Chicago's hospital and tourism district wrapped in one, a dense high-rise canyon east of Michigan Avenue where Northwestern Memorial Hospital, Navy Pier, and some of the city's most expensive condos coexist in close quarters. The neighborhood is architecturally dramatic — the views from upper floors of Lake Michigan and the city grid are spectacular — but at street level it can feel more transient than residential, with heavy ambulance and tourist traffic. Residents who crack the code here tend to be intensely loyal to their quieter pockets and rooftop escape routes.",
    residentQuotes: [
      {
        username: "NavyPier_Neighbor",
        text: "The fireworks from my balcony every summer are genuinely breathtaking. People pay thousands for those views and I see them from my kitchen.",
        timestamp: "2025-07-03T22:30:00Z"
      },
      {
        username: "Streeter_MD",
        text: "I work at Northwestern and live three blocks away. The commute is 8 minutes on foot. That alone makes the high rent worth it.",
        timestamp: "2025-11-14T07:45:00Z"
      },
      {
        username: "MichiganAveGroan",
        text: "Tourist traffic on Michigan Ave is out of control November through January. I've started routing around it completely.",
        timestamp: "2025-12-05T18:20:00Z"
      }
    ],
    constructionAlert: "Northwestern Memorial Hospital expansion on Erie St creating major pedestrian detours and construction noise 24/7 through mid-2027 — residents advised to use Illinois St as alternate."
  },
  {
    city: "Chicago",
    name: "South Loop",
    overallScore: 73,
    categoryScores: {
      noise: 67,
      safety: 70,
      traffic: 63,
      schools: 72,
      construction: 60
    },
    summary: "The South Loop has undergone a dramatic transformation over the past two decades, converting former industrial and rail land into a densely populated residential neighborhood popular with young professionals drawn by the short Loop commute. Museum Campus — home to the Field Museum, Shedd Aquarium, and Adler Planetarium — is a major asset, as is proximity to Soldier Field. Construction cranes have been a permanent feature of the skyline as development pressure remains high, and the neighborhood is still finding its retail and community identity in ways that more established neighborhoods take for granted.",
    residentQuotes: [
      {
        username: "MuseumCampus_Mike",
        text: "I run past the Field Museum every morning. The fact that this is just my neighborhood is something I have to remind myself to appreciate.",
        timestamp: "2025-10-15T06:30:00Z"
      },
      {
        username: "SouthLoopSophie",
        text: "The neighborhood is still growing into itself — you can feel it finding its identity. That's exciting but also a little unsettled sometimes.",
        timestamp: "2025-09-03T20:00:00Z"
      },
      {
        username: "PrintsRow_Pete",
        text: "Printer's Row is a hidden gem within the neighborhood — beautiful loft buildings and the best book fair in the Midwest every June.",
        timestamp: "2025-06-10T13:00:00Z"
      }
    ],
    constructionAlert: "New 42-story residential tower under construction at State and Polk — pile driving operations scheduled weekdays 7am–4pm through March 2026."
  },
  {
    city: "Chicago",
    name: "West Loop",
    overallScore: 78,
    categoryScores: {
      noise: 66,
      safety: 77,
      traffic: 59,
      schools: 74,
      construction: 56
    },
    summary: "The West Loop has undergone perhaps the most dramatic restaurant-driven transformation of any American urban neighborhood in the past decade, with Randolph Street's Restaurant Row attracting international culinary talent and building a food tourism economy that puts Chicago on the global map. Residents enjoy the cultural prestige but deal daily with double-parked delivery trucks, Uber Eats gridlock, and weekend crowds that can make quiet living feel aspirational. The neighborhood is still heavily under construction as tech employers, luxury residential developers, and Google's Midwest campus continue reshaping the street grid.",
    residentQuotes: [
      {
        username: "RandolphRow_Rachel",
        text: "I've eaten at four Michelin-starred restaurants within a six-minute walk from my apartment. That's a sentence I never thought I'd say.",
        timestamp: "2025-11-25T21:00:00Z"
      },
      {
        username: "WestLoop_Worker",
        text: "The construction here is relentless. We've had cranes outside our window for three straight years. Starting to blur together.",
        timestamp: "2025-10-09T08:00:00Z"
      },
      {
        username: "FultonMarket_Fred",
        text: "Ten years ago this was a cold storage district. Now it's where every chef wants to open. I watched the whole thing happen from this apartment.",
        timestamp: "2025-09-14T19:30:00Z"
      }
    ],
    constructionAlert: "Google Midwest campus construction at Fulton and May entering steel superstructure phase — cranes operating 6am–8pm, with significant truck traffic on Fulton Market through Q3 2026."
  },
  {
    city: "Chicago",
    name: "Humboldt Park",
    overallScore: 66,
    categoryScores: {
      noise: 63,
      safety: 59,
      traffic: 71,
      schools: 64,
      construction: 70
    },
    summary: "Humboldt Park is the cultural heart of Chicago's Puerto Rican community, its Division Street Paseo Boricua corridor marked by two massive steel Puerto Rican flags that stand as monuments to decades of community organizing against displacement. The 207-acre Humboldt Park itself is one of the city's most beautiful — with a lagoon, fieldhouse, and rose garden — and serves as the neighborhood's living room. Safety remains a genuine concern that residents acknowledge while also pushing back against narratives that erase the neighborhood's deep community pride and ongoing revitalization efforts.",
    residentQuotes: [
      {
        username: "PaseoBoricua_Maria",
        text: "Those steel flags aren't just art — they're a promise that this community isn't going anywhere. We fought for this land and we're staying.",
        timestamp: "2025-09-18T15:00:00Z"
      },
      {
        username: "HumboldtPark_Hector",
        text: "The park in summer is absolutely magical. Families everywhere, drummers by the lagoon, kids swimming. It's the Chicago most tourists never see.",
        timestamp: "2025-08-02T17:45:00Z"
      },
      {
        username: "Division_Dani",
        text: "It's complicated here. I love this neighborhood deeply but I want my kids to be safe walking home. Both things can be true.",
        timestamp: "2025-10-11T22:15:00Z"
      }
    ],
    constructionAlert: "Chicago Ave corridor streetscape improvements from Kedzie to Central Park underway — expect sidewalk closures and reduced lanes through spring 2026."
  },
  {
    city: "Chicago",
    name: "Bridgeport",
    overallScore: 74,
    categoryScores: {
      noise: 76,
      safety: 73,
      traffic: 75,
      schools: 70,
      construction: 72
    },
    summary: "Bridgeport is Chicago's most politically storied neighborhood — home to five mayors, the Daley family machine, and a tribal loyalty to the White Sox that borders on religious. The neighborhood has maintained its working-class character even as surrounding areas have changed dramatically, with third-generation families holding onto bungalows and a set of institutions — St. Barbara's, Maria's Packaged Goods, Schaller's Pump — that feel genuinely irreplaceable. Guaranteed Rate Field anchors the neighborhood's south end and brings the same game-day energy to Sox fans that Wrigley provides the North Side.",
    residentQuotes: [
      {
        username: "BungalowBridgeport",
        text: "My family has been on this block for 60 years. Three generations. Some things change and some things stay the same and I love both.",
        timestamp: "2025-08-22T12:00:00Z"
      },
      {
        username: "SoxFan_Bridgeport",
        text: "We're the better baseball neighborhood. I said what I said. Smaller crowds, real fans, and you can actually get a parking spot.",
        timestamp: "2025-09-07T16:00:00Z"
      },
      {
        username: "MariasRegular",
        text: "Maria's has the best craft beer selection in Chicago. Period. If you know you know. The neighborhood keeps real institutions alive.",
        timestamp: "2025-11-03T19:45:00Z"
      }
    ],
    constructionAlert: "35th Street bridge over the Chicago River undergoing seismic retrofit — westbound traffic shifted to temporary span with reduced lane widths through fall 2026."
  },
  {
    city: "Chicago",
    name: "Ravenswood",
    overallScore: 84,
    categoryScores: {
      noise: 79,
      safety: 87,
      traffic: 80,
      schools: 86,
      construction: 81
    },
    summary: "Ravenswood is one of Chicago's quieter success stories — a dense but residential neighborhood with a strong manufacturing corridor on Ravenswood Avenue, excellent schools, and a community-minded culture that shows up in its active neighborhood association and park programming. The Brown Line's multiple stops make the Loop accessible without the associated noise, and the tree canopy on residential streets rivals Lincoln Park's at a fraction of the property tax cost. Residents tend to stay for decades once they arrive, which speaks to a neighborhood quality that's harder to quantify than any score.",
    residentQuotes: [
      {
        username: "RavenswoodRena",
        text: "I tell people it's like having all the best of Lincoln Park with none of the attitude. Quieter, friendlier, and your neighbors remember your name.",
        timestamp: "2025-10-27T10:00:00Z"
      },
      {
        username: "BrownLine_Bob",
        text: "Twenty-two-minute train ride to the Loop and I'm surrounded by trees and single-family homes. Chicago has hidden neighborhoods like this and Ravenswood is the best of them.",
        timestamp: "2025-11-16T07:30:00Z"
      },
      {
        username: "Ravenswood_PTA",
        text: "School community here is extraordinary. Engaged parents, dedicated teachers, and kids who actually want to be there. We're incredibly lucky.",
        timestamp: "2025-09-10T15:00:00Z"
      }
    ],
    constructionAlert: "Ravenswood Metra rail crossing at Lawrence Ave signal system upgrade causing periodic gate closures and delays on weekday evenings through February 2026."
  },
  {
    city: "Chicago",
    name: "Rogers Park",
    overallScore: 70,
    categoryScores: {
      noise: 68,
      safety: 63,
      traffic: 73,
      schools: 69,
      construction: 74
    },
    summary: "Rogers Park is Chicago's most diverse neighborhood by almost any measure — a United Nations of a place where Caribbean, Ethiopian, Indian, and Mexican restaurants cluster within blocks of each other, and where artists, students from Loyola, and longtime residents have coexisted in an uneasy but creatively rich equilibrium for decades. The lakefront at the neighborhood's eastern edge offers pockets of genuine beauty — Howard Beach and Pratt Beach are beloved local secrets — and the arts scene, anchored by several small theaters and galleries, punches well above its weight. Safety and school quality remain areas of active advocacy.",
    residentQuotes: [
      {
        username: "RogersPark_Rita",
        text: "Every block is a different world and somehow it all fits together. I've lived in eight cities and never encountered anything like the mix here.",
        timestamp: "2025-10-22T18:30:00Z"
      },
      {
        username: "PrattBeach_Paul",
        text: "Pratt Beach on a Tuesday evening in August with nobody around. That's a secret I've kept for fifteen years and I'm tired of keeping it.",
        timestamp: "2025-08-19T20:00:00Z"
      },
      {
        username: "LoyolaTheater_Lena",
        text: "The storefront theater scene here is incredible. More original productions per square mile than almost anywhere in the country.",
        timestamp: "2025-09-29T21:20:00Z"
      }
    ],
    constructionAlert: "Loyola CTA Red Line station platform renovation ongoing through March 2026 — reduced station access during peak hours, use Morse or Howard as alternates."
  },
  {
    city: "Chicago",
    name: "Uptown",
    overallScore: 71,
    categoryScores: {
      noise: 64,
      safety: 65,
      traffic: 72,
      schools: 70,
      construction: 67
    },
    summary: "Uptown is Chicago's most complicated neighborhood to describe — a place of stunning historic architecture (the Aragon Ballroom, the Green Mill jazz club, the Riviera Theatre) and persistent social challenges, where SRO hotels, mental health services, and new condo developments share the same blocks. The neighborhood has been on the cusp of a renaissance for so long that the phrase has lost meaning, but genuine change is visible: new businesses on Wilson Ave, the Wilson Red Line station's magnificent renovation, and an arts scene that draws on the neighborhood's long bohemian history.",
    residentQuotes: [
      {
        username: "GreenMill_Gary",
        text: "The Green Mill is still the best jazz club in America. Full stop. That alone makes Uptown worth defending.",
        timestamp: "2025-10-14T23:00:00Z"
      },
      {
        username: "WilsonAve_Wendy",
        text: "The new businesses on Wilson have given us a real main street. It's taken years but you can feel the momentum now. It's real this time.",
        timestamp: "2025-11-24T14:00:00Z"
      },
      {
        username: "AragonFan_Alex",
        text: "Bought a condo here specifically because of the music venues. Aragon, Riv, and Green Mill all walkable. I've seen 40 shows this year.",
        timestamp: "2025-12-10T20:30:00Z"
      }
    ],
    constructionAlert: "Wilson Ave mixed-income housing development at Sunnyside construction in framing phase — street parking eliminated on Wilson between Magnolia and Clifton through summer 2026."
  },

  // ── Eugene ────────────────────────────────────────────────────────────────────
  {
    city: "Eugene",
    name: "Downtown Eugene",
    overallScore: 71,
    categoryScores: {
      noise: 58,
      safety: 68,
      traffic: 60,
      schools: 66,
      construction: 72
    },
    summary: "Downtown Eugene is the city's commercial and cultural hub, home to the Saturday Market, Fifth Street Public Market, and a dense cluster of independent restaurants and bars along Pearl Street and Broadway. The neighborhood pulses with activity on weekends, particularly around Taylor's Bar and the nightlife corridor near 8th Avenue, which can mean real noise for anyone living directly above the action. LTD bus routes radiate from here, making it the most connected point in Eugene's transit network and a practical base for car-free living.",
    residentQuotes: [
      {
        username: "DowntownDuck",
        text: "The Saturday Market alone is reason enough to live downtown. Buskers, local produce, and every artisan Eugene has to offer every Saturday morning.",
        timestamp: "2025-10-04T09:30:00Z"
      },
      {
        username: "PearlStreetPat",
        text: "Noise from the bar strip on weekends is real — if you're on Pearl or Broadway above the second floor, invest in good ear plugs.",
        timestamp: "2025-11-15T23:45:00Z"
      },
      {
        username: "fifth_st_regular",
        text: "LTD buses run right past my door. I haven't driven to work in two years. That's what makes downtown worth it.",
        timestamp: "2025-09-22T08:15:00Z"
      }
    ],
    constructionAlert: "5th Avenue road diet and protected bike lane project ongoing between Pearl and Olive — single-lane alternating traffic expected weekdays through Q2 2026."
  },
  {
    city: "Eugene",
    name: "Whiteaker",
    overallScore: 74,
    categoryScores: {
      noise: 63,
      safety: 70,
      traffic: 74,
      schools: 68,
      construction: 71
    },
    summary: "The Whiteaker — Eugene's 'Whit' — is the city's most fiercely independent neighborhood, a former working-class district that has evolved into a creative hub anchored by Ninkasi Brewing, the WOW Hall, and a dense block of murals, food carts, and small-batch makers on Blair Boulevard. The neighborhood resists the polish that typically follows gentrification, maintaining a DIY energy that draws artists, musicians, and anyone who prefers a city's rough edges to its smooth ones. Bike lanes connect the Whit to downtown in under five minutes, making it attractive to young professionals who want neighborhood character without sacrificing access.",
    residentQuotes: [
      {
        username: "NinkasiFriday",
        text: "Ninkasi's taproom on a Friday afternoon with the whole neighborhood showing up is one of the best things about living in Eugene. Nothing else like it.",
        timestamp: "2025-10-10T17:00:00Z"
      },
      {
        username: "blairboulevard_art",
        text: "Every wall over here is a canvas. Someone new painted the entire side of my neighbor's building last month. I love this street.",
        timestamp: "2025-09-05T14:30:00Z"
      },
      {
        username: "whit_renter_2024",
        text: "Rent is still possible here if you're not picky about square footage. And the vibe is worth every square inch you give up.",
        timestamp: "2025-11-28T11:00:00Z"
      }
    ],
    constructionAlert: "Blair Boulevard stormwater infrastructure project active between Van Buren and Washington — intermittent road closures and pedestrian detours through spring 2026."
  },
  {
    city: "Eugene",
    name: "South Eugene",
    overallScore: 87,
    categoryScores: {
      noise: 88,
      safety: 90,
      traffic: 82,
      schools: 94,
      construction: 84
    },
    summary: "South Eugene is the city's most prestigious address, a leafy hillside neighborhood of craftsman bungalows and midcentury ranches where the schools rank among Oregon's best and the Amazon Trail runs along the creek corridor providing a commuter bike route that feels more like a park. The neighborhood draws longtime Eugene families, UO faculty, and anyone who has researched South Eugene High School's academic record and decided the address is worth the premium. Rain falls on everyone equally, but the tree canopy here makes it feel less like weather and more like ambience.",
    residentQuotes: [
      {
        username: "southeugenefamily",
        text: "South Eugene High has one of the strongest programs in the state. We moved here specifically for the school and have never looked back.",
        timestamp: "2025-10-18T16:00:00Z"
      },
      {
        username: "AmazonTrailRunner",
        text: "I run the Amazon Trail every morning before work. A paved, lit path through the trees with almost no traffic. Eugene got this one exactly right.",
        timestamp: "2025-11-07T06:45:00Z"
      },
      {
        username: "craftsman_owner_SE",
        text: "The housing stock is beautiful and maintained. The neighborhood association keeps standards high and everyone seems to care about this place.",
        timestamp: "2025-09-30T14:20:00Z"
      }
    ],
    constructionAlert: "Amazon Creek bank stabilization project near 24th Ave causing trail detours — expect reroute through residential streets for approximately 0.3 miles through April 2026."
  },
  {
    city: "Eugene",
    name: "Friendly Street",
    overallScore: 83,
    categoryScores: {
      noise: 84,
      safety: 84,
      traffic: 80,
      schools: 87,
      construction: 82
    },
    summary: "Friendly Street is Eugene's neighborhood as Eugene imagines itself — a tight-knit, walkable community with a legendary community garden, a neighborhood market, and a block-party culture that seems almost aspirationally earnest from the outside until you move here and realize it's completely genuine. The Amazon Trail is accessible via a short bike ride, schools in the area perform well, and the combination of quiet streets and accessible amenities makes it a perennial favorite for families and longtime residents who show no signs of ever leaving. The co-op ethos runs as deep as the rain.",
    residentQuotes: [
      {
        username: "friendly_st_forever",
        text: "I've been here fifteen years because there's nowhere else in Eugene I'd rather be. The community garden alone keeps me grounded every single week.",
        timestamp: "2025-10-25T10:00:00Z"
      },
      {
        username: "FriendlyMarket_regular",
        text: "The neighborhood market is the hub of this whole area. You see everyone you know every time you go in. That's rare and worth protecting.",
        timestamp: "2025-11-12T09:30:00Z"
      },
      {
        username: "biked_from_friendly",
        text: "I bike downtown in 15 minutes via the Amazon Trail path. Car-free life is genuinely possible here in a way that surprises people from bigger cities.",
        timestamp: "2025-09-14T07:45:00Z"
      }
    ],
    constructionAlert: "Hilyard Street repaving between 28th and 32nd Ave underway — expect noise and lane restrictions on weekday mornings through March 2026."
  },
  {
    city: "Eugene",
    name: "Amazon District",
    overallScore: 77,
    categoryScores: {
      noise: 79,
      safety: 74,
      traffic: 76,
      schools: 78,
      construction: 77
    },
    summary: "The Amazon District takes its name from Amazon Creek and the park system that follows it south through Eugene — a green corridor that gives the neighborhood an outdoorsy accessibility unusual for a mid-density residential area. The area attracts young professionals and graduate students who want proximity to UO and downtown without the premium of University District rents, and the bike infrastructure along Hilyard Street makes the commute genuinely easy. Safety is solid on the core blocks though varies at the edges, as it does throughout most of Eugene's southside.",
    residentQuotes: [
      {
        username: "hilyardpedaler",
        text: "Hilyard St has the best bike lane in Eugene south of campus. I pass cars stuck in traffic every single morning and feel zero guilt about it.",
        timestamp: "2025-10-08T08:00:00Z"
      },
      {
        username: "amazon_creek_walker",
        text: "The creek path behind Amazon Park is where I process my whole day. Ducks, herons, rain on the water. Best free therapy in Eugene.",
        timestamp: "2025-11-01T17:30:00Z"
      },
      {
        username: "SE_renter_grad",
        text: "Close enough to campus to bike in 10 minutes, far enough that it doesn't feel like a student neighborhood. That balance is exactly what I needed.",
        timestamp: "2025-09-20T20:00:00Z"
      }
    ],
    constructionAlert: "Amazon Park sports field lighting upgrade ongoing — temporary parking lot closures at 24th and Hilyard through February 2026."
  },
  {
    city: "Eugene",
    name: "Fairmount",
    overallScore: 85,
    categoryScores: {
      noise: 90,
      safety: 87,
      traffic: 83,
      schools: 88,
      construction: 86
    },
    summary: "Fairmount sits in the hills above UO's eastern edge, a quiet residential enclave where faculty, professionals, and longtime Eugene families have settled into craftsman homes on curving, tree-lined streets that feel deliberately removed from the university's energy below. It is among Eugene's quietest neighborhoods — Fairmount Boulevard itself is more often populated by joggers and dog walkers than car traffic — and the views of the valley on clear days remind you why people moved to Oregon in the first place. The rain here, as everywhere in Eugene, is simply a fact of life that residents have long since made peace with.",
    residentQuotes: [
      {
        username: "fairmount_prof",
        text: "I've lived in university neighborhoods in three cities. Fairmount is the one that actually feels like a neighborhood, not a staging area for students.",
        timestamp: "2025-10-29T11:00:00Z"
      },
      {
        username: "hilltop_hiker",
        text: "Spencer Butte is a 20-minute drive from here. I try to hike it once a week and it resets everything. The access to nature in this part of Eugene is remarkable.",
        timestamp: "2025-09-17T15:00:00Z"
      },
      {
        username: "fairmount_blvd_runner",
        text: "Fairmount Blvd is my running route — gentle curves, mature trees, minimal traffic. It's the kind of street that doesn't exist in most cities anymore.",
        timestamp: "2025-11-20T07:00:00Z"
      }
    ],
    constructionAlert: "Fairmount Blvd storm drain replacement near Skyline Drive — single-lane sections with flaggers on weekday mornings through January 2026."
  },
  {
    city: "Eugene",
    name: "Cal Young",
    overallScore: 80,
    categoryScores: {
      noise: 82,
      safety: 83,
      traffic: 78,
      schools: 85,
      construction: 80
    },
    summary: "Cal Young is north Eugene's best-kept secret — a genuinely livable suburban neighborhood with well-maintained parks, strong schools, and a community of families who chose it deliberately for the breathing room that downtown Eugene and the University District can't offer. The neighborhood is quieter than its reputation suggests, and the bike path network connecting Cal Young to the Willamette River trail and downtown makes it less car-dependent than similar suburbs in other Oregon cities. Young professionals priced out of South Eugene have been discovering it and staying.",
    residentQuotes: [
      {
        username: "CalYoung_dad",
        text: "The parks here are pristine and the schools are solid. We looked at South Eugene and ended up here because our dollar went so much further. No regrets at all.",
        timestamp: "2025-10-12T14:00:00Z"
      },
      {
        username: "north_eugene_convert",
        text: "I was skeptical about moving to north Eugene but two years in I'll defend it to anyone. Quiet streets, friendly neighbors, easy access to the river path.",
        timestamp: "2025-09-28T18:30:00Z"
      },
      {
        username: "calYoung_biker",
        text: "The Willamette River path is 10 minutes from my front door by bike. I use it almost every day and it never gets old. Eugene's trail system is genuinely world-class.",
        timestamp: "2025-11-08T06:30:00Z"
      }
    ],
    constructionAlert: "Cal Young Road sidewalk infill project near Willakenzie — pedestrian detours in effect on the east side of the road through spring 2026."
  },
  {
    city: "Eugene",
    name: "River Road",
    overallScore: 66,
    categoryScores: {
      noise: 65,
      safety: 63,
      traffic: 61,
      schools: 64,
      construction: 70
    },
    summary: "River Road is north Eugene's main arterial corridor — a working neighborhood of apartments, small houses, and commercial strips that has historically attracted working-class families and immigrants building lives in Eugene. The area is more affordable than almost anywhere else in the city, and LTD bus service on the corridor is reliable, making it viable for residents without cars. Safety varies meaningfully by block, and the commercial strip noise on River Road itself is a factor for apartments fronting the arterial — residents consistently recommend looking for places on the quieter side streets one or two blocks off the main drag.",
    residentQuotes: [
      {
        username: "riverroad_renter",
        text: "Most affordable rent I've found in Eugene with reasonable transit access. If you're on a budget and don't need to be fancy about it, River Road works.",
        timestamp: "2025-10-16T20:00:00Z"
      },
      {
        username: "north_eugene_lifers",
        text: "My family has been here 30 years. The neighborhood gets written off too easily. There's real community here if you put in the effort to find it.",
        timestamp: "2025-09-06T13:00:00Z"
      },
      {
        username: "river_road_cyclist",
        text: "The River Road bike lane is being improved and it shows. Getting to the Willamette path is doable now in a way it wasn't three years ago.",
        timestamp: "2025-11-03T09:00:00Z"
      }
    ],
    constructionAlert: "River Road LTD transit corridor improvements between Royal Ave and Hunsaker Lane — bus stop relocations and lane narrowing through Q3 2026."
  },
  {
    city: "Eugene",
    name: "Santa Clara",
    overallScore: 72,
    categoryScores: {
      noise: 76,
      safety: 73,
      traffic: 69,
      schools: 72,
      construction: 66
    },
    summary: "Santa Clara is north Eugene's quieter suburban extension — a neighborhood of ranch homes and small developments where residents trade urban density for yard space, quiet streets, and a slower pace that suits families with young children. Access to the Willamette River and local parks is a genuine draw, and newer bike infrastructure is slowly connecting Santa Clara to Eugene's trail network, though car ownership remains a practical necessity for most daily needs. The rain falls just as frequently here as anywhere else in Eugene, but somehow it bothers people less when they have a covered porch to watch it from.",
    residentQuotes: [
      {
        username: "santa_clara_quiet",
        text: "I moved here from the University District and the difference in noise level is almost comical. Actual silence at night. I didn't know Eugene had this.",
        timestamp: "2025-10-22T22:00:00Z"
      },
      {
        username: "willametteview_home",
        text: "We can see the river from our back deck. Paid less than half what we'd pay in South Eugene for the same square footage. The math was undeniable.",
        timestamp: "2025-09-14T16:00:00Z"
      },
      {
        username: "SClara_parent",
        text: "Good schools, safe streets, parks the kids can actually use. Santa Clara doesn't get credit for being a genuinely solid family neighborhood.",
        timestamp: "2025-11-10T11:00:00Z"
      }
    ],
    constructionAlert: "Santa Clara Road bridge over Willamette tributaries undergoing safety assessment — reduced load limits and single-lane traffic through February 2026."
  },
  {
    city: "Eugene",
    name: "Bethel",
    overallScore: 63,
    categoryScores: {
      noise: 66,
      safety: 59,
      traffic: 67,
      schools: 61,
      construction: 65
    },
    summary: "Bethel is west Eugene's most affordable corridor — a neighborhood of older homes, apartments, and mobile home parks that has historically housed Eugene's working-class and lower-income residents in a part of the city that receives less investment and attention than its eastern counterparts. The neighborhood has genuine community institutions, a strong Latino cultural presence, and residents who have built deep roots despite economic pressures. Safety requires more block-by-block awareness than in other Eugene neighborhoods, and school quality varies enough that families typically research specific assignments rather than relying on neighborhood averages.",
    residentQuotes: [
      {
        username: "bethel_longtime",
        text: "People think they know this neighborhood from the news but they've never actually been here. Real families, real community, real resilience. Don't write us off.",
        timestamp: "2025-10-30T19:00:00Z"
      },
      {
        username: "west_eugene_practical",
        text: "Cheapest rent in Eugene that doesn't feel completely isolated. It's not perfect but it's what's actually possible on my income and I make it work.",
        timestamp: "2025-09-24T21:00:00Z"
      },
      {
        username: "bethel_school_parent",
        text: "The teachers at our school work incredibly hard under difficult conditions. The community support for public education here deserves way more recognition.",
        timestamp: "2025-11-05T08:30:00Z"
      }
    ],
    constructionAlert: "W 11th Avenue utility upgrade between Terry St and Bailey Hill — intermittent lane closures and detours through April 2026."
  },
  {
    city: "Eugene",
    name: "Jefferson Westside",
    overallScore: 70,
    categoryScores: {
      noise: 68,
      safety: 67,
      traffic: 71,
      schools: 66,
      construction: 69
    },
    summary: "Jefferson Westside occupies the territory between downtown and the Whiteaker, a neighborhood in active transition where longtime working-class residents and newer arrivals from the creative class coexist in a functional if uneasy equilibrium. The area is walkable to downtown and to the Whit's restaurant and bar scene, and its housing stock — older bungalows and small apartment buildings — remains more affordable than comparable proximity to downtown would suggest in other Oregon cities. Taylor's Bar and the Saturday Market are a 15-minute walk, and the bike lane on Jefferson makes the commute effortless.",
    residentQuotes: [
      {
        username: "jeffwest_tenant",
        text: "Walked to Taylor's Bar last night, walked home at 1am feeling completely fine. The proximity to downtown without downtown prices is why I'm still here.",
        timestamp: "2025-11-18T01:15:00Z"
      },
      {
        username: "jefferson_organizer",
        text: "We're trying to make sure the people who built this neighborhood get to stay in it. That fight is real and ongoing and we need people to show up.",
        timestamp: "2025-10-07T18:00:00Z"
      },
      {
        username: "whit_adjacent_renter",
        text: "Ninkasi Brewing is a 7-minute walk. WOW Hall is a 10-minute walk. For a renter who cares about culture over square footage, this neighborhood delivers.",
        timestamp: "2025-09-11T20:00:00Z"
      }
    ],
    constructionAlert: "Jefferson Street sewer line replacement between 6th and 8th Ave — full road closure on Jefferson between 6th and 7th, use Blair Blvd as alternate through March 2026."
  },
  {
    city: "Eugene",
    name: "Laurel Hill",
    overallScore: 82,
    categoryScores: {
      noise: 86,
      safety: 84,
      traffic: 80,
      schools: 82,
      construction: 83
    },
    summary: "Laurel Hill sits at Eugene's southern edge, a quiet hillside neighborhood of midcentury homes and newer construction where the proximity to Spencer Butte and the forests of south Lane County feels tangible every morning you open your window. The neighborhood is among Eugene's most peaceful — rain on a pitched roof and wood smoke from a neighbor's chimney are the defining sensory experiences of winter — and neighbors tend to know each other by name in a way that feels like a throwback to an earlier era of city living. It is not for anyone who needs to be close to the action, but for those who want Eugene's small-city accessibility with genuine natural quiet, Laurel Hill is difficult to improve upon.",
    residentQuotes: [
      {
        username: "LaurelHill_hiker",
        text: "Spencer Butte trailhead is a five-minute drive. I've climbed it in every season and the view of the valley in the rain is honestly more beautiful than on a clear day.",
        timestamp: "2025-10-04T16:00:00Z"
      },
      {
        username: "south_end_convert",
        text: "Moved here from the University District three years ago and can't imagine going back. My blood pressure dropped noticeably, I'm convinced of it.",
        timestamp: "2025-11-22T09:00:00Z"
      },
      {
        username: "laurelhill_woodsmoke",
        text: "November here means wood stoves burning on every block, the smell of rain on Douglas fir, and neighbors dropping off extra firewood without being asked.",
        timestamp: "2025-11-15T19:30:00Z"
      }
    ],
    constructionAlert: "Dillard Road storm drainage improvements near 52nd Place — gravel shoulders and reduced sight lines for approximately 0.5 miles through spring 2026."
  },
  {
    city: "Eugene",
    name: "University District",
    overallScore: 69,
    categoryScores: {
      noise: 55,
      safety: 65,
      traffic: 63,
      schools: 71,
      construction: 68
    },
    summary: "The University District — the blocks immediately surrounding UO along Agate Street, 13th Avenue, and 18th Avenue — is Eugene's most intensely student-populated neighborhood, a place of converted houses, apartment complexes, and the constant ambient energy of 22,000 undergraduates living their best and occasionally loudest lives. Track Town Pizza on 13th is a neighborhood institution, the EMU is within walking distance for every amenity a student might need, and Franklin Boulevard connects the district to Alton Baker Park and Pre's Trail with minimal traffic conflict. For non-students, the noise and seasonal turnover can wear — but the walkability and access to the UO campus are unmatched anywhere in Eugene.",
    residentQuotes: [
      {
        username: "UO_grad_renter",
        text: "Agate Street is chaotic during game weekends but genuinely walkable and alive in a way that makes living anywhere else in Eugene feel a little flat.",
        timestamp: "2025-10-19T22:30:00Z"
      },
      {
        username: "tracktown_pizza_fan",
        text: "Track Town Pizza on 13th is literally the perfect pizza for the price. I eat there twice a week and feel no shame about it whatsoever.",
        timestamp: "2025-09-27T14:00:00Z"
      },
      {
        username: "EMU_adjacent",
        text: "Everything I need within a 5-minute walk from the EMU. For a grad student without a car in a mid-size Oregon city, this is the only neighborhood that makes sense.",
        timestamp: "2025-11-09T12:00:00Z"
      }
    ],
    constructionAlert: "13th Avenue protected bike lane installation between Agate and Patterson — lane reconfigurations and temporary signal changes through Q1 2026, expect commute disruptions."
  },
  {
    city: "Eugene",
    name: "Hendricks Park",
    overallScore: 84,
    categoryScores: {
      noise: 89,
      safety: 85,
      traffic: 81,
      schools: 84,
      construction: 87
    },
    summary: "The Hendricks Park neighborhood takes its name and identity from the 78-acre city park on its eastern edge — one of Oregon's most spectacular urban wild spaces, particularly in May when the rhododendron collection blooms across acres of hillside trails in a display that draws visitors from across the Pacific Northwest. The surrounding streets are quiet and residential in the most genuine sense: dog walkers, morning birders, and longtime families who moved here for the park access and discovered a neighborhood that tends to keep them for decades. The natural buffer of old-growth fir keeps commercial noise genuinely distant, and the school options nearby benefit from the same South Eugene address premium.",
    residentQuotes: [
      {
        username: "rhododendron_season",
        text: "When the rhododendrons bloom in May it's honestly one of the great free spectacles in the Pacific Northwest. People drive from Portland to see it and I can walk there in 5 minutes.",
        timestamp: "2025-05-15T10:00:00Z"
      },
      {
        username: "hendricks_morning_hiker",
        text: "I've hiked the Hendricks Park trails every morning for eight years. It's old-growth fir in the middle of a city. Eugene keeps surprising me.",
        timestamp: "2025-10-30T07:00:00Z"
      },
      {
        username: "east_eugene_convert",
        text: "Quietest place I've ever lived in a city this size. The park acts as a sound buffer and the neighbors genuinely look out for each other.",
        timestamp: "2025-11-17T15:30:00Z"
      }
    ],
    constructionAlert: "Hendricks Park upper trail rehabilitation project — several summit trail segments temporarily closed for erosion repair through February 2026."
  },
  {
    city: "Eugene",
    name: "Willamette Corridor",
    overallScore: 78,
    categoryScores: {
      noise: 78,
      safety: 76,
      traffic: 72,
      schools: 74,
      construction: 73
    },
    summary: "The Willamette Corridor stretches along Eugene's river boundary, an area defined by Alton Baker Park's 400 acres of recreational space and Pre's Trail — the crushed gravel path named for Steve Prefontaine that has become one of the Pacific Northwest's premier running and cycling routes. Franklin Boulevard connects the corridor to UO and downtown via protected bike infrastructure, and the Autzen Stadium footprint brings predictable but seasonal game-day congestion. Residents here tend to be outdoorsy, engaged, and deeply attached to the river access that defines the neighborhood's entire character.",
    residentQuotes: [
      {
        username: "pres_trail_daily",
        text: "Pre's Trail is my morning commute, my afternoon decompression, and my weekend long run. It is the greatest single amenity in Eugene and it's free and it's always there.",
        timestamp: "2025-10-08T07:00:00Z"
      },
      {
        username: "altonbaker_regular",
        text: "Alton Baker Park on a Saturday afternoon in September is what Eugene looks like when it's working perfectly. Families, cyclists, disc golfers, herons. All of it.",
        timestamp: "2025-09-20T15:30:00Z"
      },
      {
        username: "franklin_blvd_rider",
        text: "The Franklin Blvd bike lane into campus is direct and protected. I rode it in the rain 180 days last year and only complained about it twice.",
        timestamp: "2025-11-26T08:00:00Z"
      }
    ],
    constructionAlert: "Willamette River bike bridge deck repair near Autzen Stadium — trail detour via Valley River Drive in effect on weekday mornings through April 2026."
  },
  {
    city: "Eugene",
    name: "Ferry Street Bridge",
    overallScore: 76,
    categoryScores: {
      noise: 77,
      safety: 76,
      traffic: 73,
      schools: 77,
      construction: 78
    },
    summary: "The Ferry Street Bridge neighborhood is one of Eugene's most underrated residential areas — a collection of established postwar and newer homes east of downtown that benefits from river proximity without paying the premium of Willamette Corridor addresses. The neighborhood is walkable to the river trail and to Alton Baker Park via the Ferry Street Bridge itself, and its position between the University District and Cal Young gives it a hybrid character: steady families and longtime residents on the quieter streets, younger renters closer to the arterials. Construction scores are strong — this area has largely completed its infrastructure update cycle.",
    residentQuotes: [
      {
        username: "ferry_bridge_walker",
        text: "I cross the Ferry Street Bridge to Alton Baker Park almost every evening. Six minutes door to trail. That river access is why I haven't moved in 12 years.",
        timestamp: "2025-10-23T18:00:00Z"
      },
      {
        username: "east_eugene_practical",
        text: "Solid schools, reasonable prices, and the river nearby. Ferry Street Bridge is what people mean when they say Eugene is a good city to raise kids in.",
        timestamp: "2025-09-16T13:30:00Z"
      },
      {
        username: "ferry_neighborhood_lifer",
        text: "My neighbors have been here as long as I have. Block cleanups, potlucks, people who know your name. The stuff they put in real estate listings but can't actually sell you.",
        timestamp: "2025-11-04T14:00:00Z"
      }
    ],
    constructionAlert: "Ferry Street Bridge approach on Coburg Road — repaving with bike lane improvements creating lane reductions weekday mornings through March 2026."
  },
  {
    city: "Eugene",
    name: "Harlow",
    overallScore: 74,
    categoryScores: {
      noise: 78,
      safety: 74,
      traffic: 70,
      schools: 76,
      construction: 67
    },
    summary: "Harlow is east Eugene's newest growth edge — a neighborhood of planned subdivisions, apartment complexes, and commercial centers oriented around Harlow Road and the Fred Meyer and Costco corridors that anchor its retail identity. It is not charming in the way that Hendricks Park or Friendly Street are charming, but it offers newer construction at prices that remain meaningfully below comparable suburban development in Portland and Bend, and the East 18th Avenue bike path is slowly connecting Harlow to the broader Eugene trail network. Families choosing Harlow are typically prioritizing square footage and newer schools over neighborhood character, and the calculation holds up.",
    residentQuotes: [
      {
        username: "harlow_new_build",
        text: "New construction with a garage and a yard for less than a fixer-upper in South Eugene. My commute to campus takes 20 minutes by bike. The math worked out.",
        timestamp: "2025-10-28T17:00:00Z"
      },
      {
        username: "east_eugene_shopper",
        text: "Everything I need within a mile: Fred Meyer, Costco, three decent coffee shops. It's not bohemian but it covers the bases efficiently.",
        timestamp: "2025-09-19T12:00:00Z"
      },
      {
        username: "harlow_school_parent",
        text: "The elementary school here is newer and well-funded by the district. My kids are happy and we're not fighting for parking at drop-off. I'll take that.",
        timestamp: "2025-11-12T08:00:00Z"
      }
    ],
    constructionAlert: "Harlow Road commercial corridor widening near Coburg Rd intersection — temporary traffic signals and reduced turning lanes weekdays through Q2 2026."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = neighborhoodData;
}
