export const metadata = {
  title: "Tabletop Tavern — Best Deck Tier List (2026)",
  description: "Complete Tabletop Tavern deck tier list: S to C tier ranked. Best decks for competitive play with strategy breakdowns, key cards, and archetype matchups.",
};

export default function DeckTierListPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Tabletop Tavern Deck Tier List — Best Competitive Decks Ranked (2026)</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Tabletop Tavern blends deck-building card mechanics with tactical board positioning and tavern management. At high-level competitive play, deck selection and card synergy determine who wins — not just who draws better. This tier list ranks every viable deck archetype from S-Tier (format-defining) to C-Tier (situational) based on win rate, matchup spread, and tournament representation. Each entry includes the core strategy, essential key cards, and a matchup breakdown against every other archetype. Whether you are climbing the ladder or preparing for a local tournament, this guide will help you pick the right deck.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Deck Tier List</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              Decks are ranked by overall competitive viability. S-Tier decks have the highest win rates and fewest unwinnable matchups. A-Tier decks are strong but have exploitable weaknesses. B-Tier decks are playable with favorable matchups against specific archetypes. C-Tier decks require perfect draws and favorable matchups to succeed.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Tier</th>
                  <th>Deck Name</th>
                  <th>Archetype</th>
                  <th>Core Strategy</th>
                  <th>Key Cards (3)</th>
                  <th>Best Faction</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="text-accent font-bold">S</span></td>
                  <td>Viking Blitz</td>
                  <td>Aggro</td>
                  <td>Flood the board with cheap Berserker units, close games by turn 5</td>
                  <td>Berserker Rush, War Horn, Blood Rage</td>
                  <td>Vikings</td>
                </tr>
                <tr>
                  <td><span className="text-accent font-bold">S</span></td>
                  <td>Orc Domination</td>
                  <td>Midrange</td>
                  <td>Overwhelm with oversized Trolls and Giants, out-value opponent</td>
                  <td>Troll Warlord, Giant&apos;s Grasp, Battle Cry</td>
                  <td>Orcs</td>
                </tr>
                <tr>
                  <td><span className="text-accent font-bold">S</span></td>
                  <td>Elven Precision</td>
                  <td>Combo-Control</td>
                  <td>Control the early game with removal, combo-finish with Archer volley</td>
                  <td>Arcane Volley, Elven Marksman, Windrider</td>
                  <td>Elves</td>
                </tr>
                <tr>
                  <td><span className="text-[#58a6ff] font-bold">A</span></td>
                  <td>Dwarven Fortress</td>
                  <td>Control</td>
                  <td>Stall with defensive units, win with artillery barrage in late game</td>
                  <td>Stone Wall, Cannon Battery, Shieldbearer</td>
                  <td>Dwarves</td>
                </tr>
                <tr>
                  <td><span className="text-[#58a6ff] font-bold">A</span></td>
                  <td>Human Guildhall</td>
                  <td>Midrange</td>
                  <td>Versatile toolkit — adapt your plan based on opponent&apos;s deck</td>
                  <td>Knight Captain, Guild Tax, Reinforcements</td>
                  <td>Humans</td>
                </tr>
                <tr>
                  <td><span className="text-[#58a6ff] font-bold">A</span></td>
                  <td>Shadow Assassins</td>
                  <td>Tempo-Aggro</td>
                  <td>Efficient removal plus evasive attackers, maintain board control</td>
                  <td>Shadowstep, Poison Dagger, Ambush</td>
                  <td>Elves</td>
                </tr>
                <tr>
                  <td><span className="text-[#3fb950] font-bold">B</span></td>
                  <td>Tavern Economy</td>
                  <td>Combo</td>
                  <td>Generate massive gold advantage, overwhelm with premium units</td>
                  <td>Golden Tap, Barmaid&apos;s Favor, VIP Patron</td>
                  <td>Any</td>
                </tr>
                <tr>
                  <td><span className="text-[#3fb950] font-bold">B</span></td>
                  <td>Beastmaster Swarm</td>
                  <td>Aggro</td>
                  <td>Summon token creatures, buff them with pack tactics, overrun</td>
                  <td>Dire Wolf, Pack Alpha, Nature&apos;s Call</td>
                  <td>Orcs</td>
                </tr>
                <tr>
                  <td><span className="text-[#3fb950] font-bold">B</span></td>
                  <td>Siege Breaker</td>
                  <td>Control</td>
                  <td>Anti-fortification deck that punishes defensive strategies</td>
                  <td>Siege Tower, Catapult, Breach</td>
                  <td>Dwarves</td>
                </tr>
                <tr>
                  <td><span className="text-[#8b5cf6] font-bold">C</span></td>
                  <td>Mill Fatigue</td>
                  <td>Control</td>
                  <td>Force opponent to deck out by milling cards, minimal win conditions</td>
                  <td>Mind Grind, Infinite Patience, Library of Ruin</td>
                  <td>Humans</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Deck Archetype Matchup Table</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              Understanding matchups is more important than raw deck power. A B-Tier deck with 70% win rate against the tournament meta can outperform an S-Tier deck with one unwinnable matchup. This table shows how each archetype performs against every other archetype. Favored means roughly 60%+ win rate, Even means 45-55%, and Unfavored means below 45%.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Your Deck \ Opponent</th>
                  <th>Viking Blitz</th>
                  <th>Orc Domination</th>
                  <th>Elven Precision</th>
                  <th>Dwarven Fortress</th>
                  <th>Human Guildhall</th>
                  <th>Tavern Economy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Viking Blitz</td>
                  <td>Even</td>
                  <td><span className="text-accent">Favored</span></td>
                  <td><span className="text-[#3fb950]">Even</span></td>
                  <td><span className="text-accent">Favored</span></td>
                  <td><span className="text-[#3fb950]">Even</span></td>
                  <td><span className="text-accent">Favored</span></td>
                </tr>
                <tr>
                  <td>Orc Domination</td>
                  <td><span className="text-[#ef4444]">Unfavored</span></td>
                  <td>Even</td>
                  <td><span className="text-accent">Favored</span></td>
                  <td><span className="text-[#3fb950]">Even</span></td>
                  <td><span className="text-accent">Favored</span></td>
                  <td><span className="text-[#3fb950]">Even</span></td>
                </tr>
                <tr>
                  <td>Elven Precision</td>
                  <td><span className="text-[#3fb950]">Even</span></td>
                  <td><span className="text-[#ef4444]">Unfavored</span></td>
                  <td>Even</td>
                  <td><span className="text-accent">Favored</span></td>
                  <td><span className="text-[#3fb950]">Even</span></td>
                  <td><span className="text-accent">Favored</span></td>
                </tr>
                <tr>
                  <td>Dwarven Fortress</td>
                  <td><span className="text-[#ef4444]">Unfavored</span></td>
                  <td><span className="text-[#3fb950]">Even</span></td>
                  <td><span className="text-[#ef4444]">Unfavored</span></td>
                  <td>Even</td>
                  <td><span className="text-[#3fb950]">Even</span></td>
                  <td><span className="text-accent">Favored</span></td>
                </tr>
                <tr>
                  <td>Human Guildhall</td>
                  <td><span className="text-[#3fb950]">Even</span></td>
                  <td><span className="text-[#ef4444]">Unfavored</span></td>
                  <td><span className="text-[#3fb950]">Even</span></td>
                  <td><span className="text-[#3fb950]">Even</span></td>
                  <td>Even</td>
                  <td><span className="text-[#3fb950]">Even</span></td>
                </tr>
                <tr>
                  <td>Tavern Economy</td>
                  <td><span className="text-[#ef4444]">Unfavored</span></td>
                  <td><span className="text-[#3fb950]">Even</span></td>
                  <td><span className="text-[#ef4444]">Unfavored</span></td>
                  <td><span className="text-[#ef4444]">Unfavored</span></td>
                  <td><span className="text-[#3fb950]">Even</span></td>
                  <td>Even</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">How to Choose Your Competitive Deck</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              Deck selection should be driven by the meta, not personal preference. If 40% of your local tournament is running Orc Domination, pick Elven Precision or Human Guildhall — both have favorable or even matchups into Orcs. If the meta is aggro-heavy, Dwarven Fortress and Orc Domination are your best answers. If the meta is control-heavy, Viking Blitz and Shadow Assassins can win before the control decks stabilize.
            </p>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              Do not overlook the budget factor. Elven Precision requires specific epic-rarity cards (Windrider, Arcane Volley) that are expensive to craft. Human Guildhall uses mostly rare and common cards, making it the best entry point for new competitive players. Viking Blitz is the most affordable S-Tier deck — many of its core cards are in the Viking starter set.
            </p>
            <p className="text-ink-light leading-relaxed text-sm">
              Practice your deck against every other archetype at least 10 times before taking it to a tournament. Matchup knowledge — knowing when to mulligan, when to commit, and when to hold — accounts for roughly 30% of win rate variance in competitive Tabletop Tavern. A pilot who knows their matchups beats a pilot with a better deck who does not.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-4">
              <details className="group">
                <summary className="text-sm font-semibold text-ink cursor-pointer hover:text-accent transition-colors">Which deck is best for beginners in competitive play?</summary>
                <p className="text-sm text-ink-light mt-2 pl-4 border-l-2 border-ink-faded/30">
                  Human Guildhall is the best competitive deck for beginners. It has no truly unwinnable matchups, uses mostly affordable cards, and teaches you how to adapt your gameplan — a skill that transfers to every other deck. Viking Blitz is the easiest S-Tier deck to pilot but has a lower skill ceiling and predictable play patterns that experienced opponents can exploit. Start with Guildhall and branch out once you understand the meta.
                </p>
              </details>
              <details className="group">
                <summary className="text-sm font-semibold text-ink cursor-pointer hover:text-accent transition-colors">How often does the Tabletop Tavern meta change?</summary>
                <p className="text-sm text-ink-light mt-2 pl-4 border-l-2 border-ink-faded/30">
                  The meta shifts with each major patch (roughly every 2-3 months). Card balance changes can completely flip tier rankings — a nerfed key card can drop an S-Tier deck to B-Tier overnight. Follow the official patch notes and check tournament results weekly. The deck tier list above reflects the current patch as of June 2026.
                </p>
              </details>
              <details className="group">
                <summary className="text-sm font-semibold text-ink cursor-pointer hover:text-accent transition-colors">Should I play the best deck or the deck I am most comfortable with?</summary>
                <p className="text-sm text-ink-light mt-2 pl-4 border-l-2 border-ink-faded/30">
                  At the local level, comfort beats tier ranking. A B-Tier deck you have 100+ games on will outperform an S-Tier deck you picked up yesterday. At the tournament level, the meta matters more — bring the best deck you have deep experience with. If those two factors point to different decks, prioritize practice time on the higher-tier option until your comfort level catches up.
                </p>
              </details>
            </div>
          </section>

          <p className="text-sm text-ink-faded mt-8 italic">Last updated: June 2026. Tier rankings based on tournament results and community meta analysis. Card availability and balance changes may affect rankings. Unofficial fan site.</p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/deck-building" className="text-accent hover:underline">Deck Building Guide</a></li>
              <li><a href="/tier-list" className="text-accent hover:underline">Faction Tier List</a></li>
              <li><a href="/cards" className="text-accent hover:underline">All Cards Database</a></li>
              <li><a href="/builds" className="text-accent hover:underline">Best Builds</a></li>
              <li><a href="/combat" className="text-accent hover:underline">Combat Mechanics</a></li>
              <li><a href="/counter-play-guide" className="text-accent hover:underline">Counter Play Guide</a></li>
              <li><a href="/beginners-guide" className="text-accent hover:underline">Beginners Guide</a></li>
            </ul>
          </div>
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Quick Tips</h3>
            <ul className="space-y-2 text-sm text-ink-light">
              <li>Practice each matchup at least 10 times before tournaments</li>
              <li>Human Guildhall is the most affordable competitive entry point</li>
              <li>Monitor patch notes — card nerfs can instantly change tier rankings</li>
              <li>Aggro decks outperform in best-of-one formats</li>
              <li>Control decks gain value in best-of-three with sideboarding</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
