export const metadata = {
  title: "Tabletop Tavern FAQ — Frequently Asked Questions & Answers",
  description:
    "Complete Tabletop Tavern FAQ answering the most common questions about factions, combat strategy, roguelike mechanics, unit builds, campaign tips, and more.",
};

export default function FaqPage() {
  const faqs = [
    { q: 'Is Tabletop Tavern a roguelike?', a: 'Yes. Tabletop Tavern is a roguelike RTS where each campaign run is procedurally generated with random encounters, map layouts, and item drops. Every run is unique, and permanent progression is tied to achievements and unlocks rather than individual run completion. The game combines real-time tactical combat with the replayability and risk-reward decision-making of roguelike design.' },
    { q: 'How many factions are there and which is best for beginners?', a: 'Five factions: Vikings, Orcs, Elves, Humans, and Dwarves. Each has a distinct playstyle and unit roster. Vikings (elite infantry with high win rates around 58%) are currently the strongest in the meta, followed by Orcs (heavy bruisers at 55%). Humans are the most balanced and beginner-friendly — they have no extreme strengths or weaknesses, making them ideal for learning the core mechanics before specializing into a faction that matches your preferred playstyle.' },
    { q: 'How does combat positioning work in Tabletop Tavern?', a: 'Positioning is just as important as unit stats. High ground provides accuracy and damage bonuses. Cover reduces incoming damage by up to 50%. Flanking an enemy from the side or rear grants bonus crit chance and ignores directional armor. Always spend the first few seconds of an engagement establishing good positions before committing to a full attack. A well-positioned squad of mid-tier units will outperform a poorly-positioned elite squad in almost every scenario.' },
    { q: 'What is the best unit composition for campaign runs?', a: 'A balanced composition of Tank + Damage Dealer + Support + Flex typically performs best. Your Tank absorbs damage and holds the frontline. Your Damage Dealer focuses on eliminating priority targets. Your Support provides healing, buffs, or crowd control. The Flex slot adapts to the specific mission — bring a second damage dealer for DPS checks, a Scout for exploration missions, or a specialist for faction-specific encounters. Avoid stacking too many of the same role — synergies between different unit types are what win campaigns.' },
    { q: 'Is there multiplayer?', a: 'Tabletop Tavern is primarily a single-player roguelike RTS on Steam. The focus is on the solo campaign experience with procedurally generated runs. Check the Steam store page for the latest information on any multiplayer or co-op features that may be added in future updates.' },
    { q: 'When was the game released and who developed it?', a: 'Tabletop Tavern was released on June 11, 2026 by developer TJ, published by Frostbloom and Gamirror Games. It has earned Very Positive reviews on Steam. The game is available on PC via Steam with a focus on single-player tactical roguelike gameplay.' },
    { q: 'How do achievements and permanent unlocks work?', a: 'The game features 25 Steam achievements. Roguelike permanent unlocks are tied to achievement progress rather than individual run completion — this means you make steady meta-progress even on failed runs. Focus on achievements that unlock new starting bonuses or faction options first, as these provide the largest long-term benefit to future campaign attempts.' },
    { q: 'What are the most important upgrades to prioritize?', a: 'Priority order: unit capacity upgrades (more units = more tactical options) → faction-specific tech tree nodes that unlock key abilities → resource generation improvements → defensive structures. Early investment in economy and unit capacity pays off across the entire campaign, while individual unit upgrades have diminishing returns. Do not rush the highest-tier tech — a broad foundation of mid-tier upgrades outperforms one maxed-out unit type.' },
    { q: 'How does the roguelike RNG affect my strategy?', a: 'Map layouts, encounter types, and item drops are all procedural. You cannot plan for specific items, so build flexible strategies rather than chasing one perfect composition. Identify what the RNG gives you early in a run and pivot accordingly — if you find multiple Orc-specific items, pivot toward an Orc-heavy build even if you started with a different plan. The best players adapt to what the run offers rather than forcing a predetermined strategy.' },
    { q: 'What are the most common mistakes new players make?', a: 'The top five: (1) Ignoring cover — standing in the open multiplies incoming damage significantly; always position units near terrain features. (2) Over-investing in one unit type — if your only upgraded unit falls, the run is over; spread resources across at least 2-3 core units. (3) Skipping side encounters — they provide XP and items that make the main path significantly easier. (4) Not checking enemy abilities — each faction and enemy type has unique mechanics; hover over new enemies to read their tooltips. (5) Playing too fast — the game rewards deliberate positioning and timing over APM.' },
  ];

  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-text-primary mb-6">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-abyss-light border border-border-subtle p-5">
              <h2 className="text-sm font-semibold text-text-primary mb-2">{faq.q}</h2>
              <p className="text-sm text-text-secondary leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted font-mono text-center mt-8">
          Information based on Steam store page, community data, and gameplay testing. Unofficial fan site. Updated July 2026.
        </p>
      </div>
    </div>
  );
}
