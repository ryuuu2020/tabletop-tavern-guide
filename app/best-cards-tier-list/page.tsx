export const metadata = {
  title: "Tabletop Tavern Card Tier List — Best Cards Ranked S to C Tier (2026)",
  description: "Complete Tabletop Tavern card tier list ranking the best cards for every archetype. Find S-tier staples, A-tier role players, and cards to avoid.",
};

const sTierCards = [
  { card: "Firestorm", mana: 3, type: "Spell (AoE)", archetype: "Control, Midrange", effect: "Deal 4 damage to all enemy minions", why: "Single best board clear in the game. Decimates aggro on turn 3, clears tokens, and trades up against midrange boards. Mandatory in any red deck.", rating: "S" },
  { card: "Mana Leak", mana: 2, type: "Spell (Counter)", archetype: "Control, Tempo", effect: "Counter target spell unless its controller pays 3 mana", why: "The universal answer. Stops combo enablers, removal, and opposing counters for 2 mana. Defines the entire competitive meta.", rating: "S" },
  { card: "Mind Rot", mana: 2, type: "Spell (Discard)", archetype: "Control, Combo", effect: "Target opponent discards 2 cards", why: "Two mana to strip two cards from hand. Devastating against combo decks that need specific pieces. Value floor is always positive.", rating: "S" },
  { card: "Aggressive Recruiter", mana: 3, type: "Creature", archetype: "Aggro", effect: "3/2 — Battlecry: Summon a 2/1 Recruit", why: "Six total power across two bodies for 3 mana. Floods the board, demands immediate removal, and threatens lethal by turn 5.", rating: "S" },
  { card: "Lightning Bolt", mana: 1, type: "Spell (Burn)", archetype: "Aggro, Combo", effect: "Deal 3 damage to any target", why: "One mana for three damage. Finishes games, removes early threats, enables combo kills. Most efficient damage spell in the game.", rating: "S" },
  { card: "Swords to Plowshares", mana: 1, type: "Spell (Removal)", archetype: "Control, Midrange", effect: "Destroy target creature. Its controller gains life equal to its power.", why: "One mana unconditional removal. The life gain drawback is negligible compared to removing a 6/6 threat for a single mana.", rating: "S" },
];

const aTierCards = [
  { card: "Iron Giant", mana: 8, type: "Creature (Big)", archetype: "Midrange, Ramp", effect: "8/8 — Trample, Cannot be targeted by spells", why: "The premier finisher for midrange. Hexproof + trample means it hits the board and demands a board trade or loses the game.", rating: "A" },
  { card: "Shieldbearer", mana: 2, type: "Creature (Wall)", archetype: "Control, Midrange", effect: "1/4 — Defender, All damage to you is reduced by 2", why: "The anti-aggro MVP. Two mana to blank 90% of early threats. Stacks with Healing Spring to completely nullify aggro openers.", rating: "A" },
  { card: "Lightning Ring", mana: 4, type: "Spell (Chain)", archetype: "Combo, Tempo", effect: "Deal 2 damage to 3 random enemy minions", why: "Chain damage that hits multiple targets. Enables spell-synergy combos and clears wide boards. Combo enabler for Storm builds.", rating: "A" },
  { card: "Frost Lynx", mana: 3, type: "Creature", archetype: "Tempo, Midrange", effect: "3/3 — Battlecry: Freeze an enemy minion for 1 turn", why: "Solid stats + tempo disruption. The freeze effect steals a turn from midrange and lets you develop while negating their threat.", rating: "A" },
  { card: "Healing Spring", mana: 2, type: "Spell (Heal)", archetype: "Control", effect: "Restore 8 HP. Draw a card if you control a Water minion.", why: "Eight life for two mana stabilizes against aggro. The cantrip mode in Water decks provides card advantage on top of the heal.", rating: "A" },
  { card: "Thoughtseize", mana: 1, type: "Spell (Discard)", archetype: "Control, Combo", effect: "Look at opponents hand. Discard one non-land card. Lose 2 life.", why: "Turns off combo decks on turn 1. Targeted discard lets you remove their key enabler before they can play it. The life loss is trivial.", rating: "A" },
  { card: "Pacify", mana: 3, type: "Spell (Control)", archetype: "Control, Tempo", effect: "Target creature cannot attack for 3 turns", why: "Negates a single large threat for three turns. Buys time against midrange without committing a creature. Excellent stalling tool.", rating: "A" },
  { card: "Brawl", mana: 3, type: "Spell (AoE)", archetype: "Midrange, Control", effect: "Each player chooses their strongest minion. Destroy all others.", why: "Situational board clear that leaves your best minion alive. Pairs perfectly with Iron Giant for a one-sided wipe followed by lethal.", rating: "A" },
];

const bTierCards = [
  { card: "Fireball", mana: 4, type: "Spell (Burn)", archetype: "Aggro, Combo", effect: "Deal 6 damage to any target", why: "Solid burn spell but inferior to Lightning Bolt per mana. Best in combo decks that need to convert 4 mana into 6 damage for OTK.", rating: "B" },
  { card: "Wall of Stone", mana: 3, type: "Creature (Wall)", archetype: "Control", effect: "0/7 — Defender, Cannot be destroyed by spells", why: "Massive wall that blocks for days. The spell immunity is relevant against Firestorm. Outclassed by Shieldbearer versus aggro due to cost.", rating: "B" },
  { card: "Spellbreaker", mana: 4, type: "Creature", archetype: "Midrange, Tempo", effect: "4/3 — Battlecry: Silence a minion", why: "Silence effect counters buffed minions and Deathrattle combos. Stats are average for cost. Include as a one-of in midrange sideboards.", rating: "B" },
  { card: "Clone", mana: 4, type: "Spell (Copy)", archetype: "Combo, Control", effect: "Create a copy of target friendly minion", why: "Enables infinite combo loops with certain creatures. Requires specific setup and is dead in hand without a target. High ceiling, low floor.", rating: "B" },
  { card: "Token Generator", mana: 3, type: "Creature", archetype: "Aggro, Tempo", effect: "2/2 — End of turn: Summon a 1/1 Token", why: "Scaling threat that snowballs if unanswered. Weak to Firestorm and Lightning Ring. Good in dedicated token decks, average elsewhere.", rating: "B" },
  { card: "Elixir of Immortality", mana: 1, type: "Artifact", archetype: "Control, Mill", effect: "Pay 2 mana: Shuffle your graveyard into your library and gain 5 life.", why: "Anti-mill tech and infinite value engine. Single-handedly beats mill decks. Too slow against aggro and combo to main-deck.", rating: "B" },
];

const cTierCards = [
  { card: "Goblin Raider", mana: 2, type: "Creature", archetype: "Aggro", effect: "2/2 — When this attacks, discard a random card", why: "The discard drawback makes this unplayable. A 2/2 for 2 exists without penalty. Only sees play in meme self-discard decks.", rating: "C" },
  { card: "Necromancers Folly", mana: 6, type: "Spell (Reanimate)", archetype: "Control, Combo", effect: "Return a random minion from your graveyard to the battlefield. It dies at end of turn.", why: "Six mana for a temporary minion is terrible tempo. The random target means you cannot plan around the outcome. Too expensive and unreliable.", rating: "C" },
  { card: "Merchant of Doom", mana: 5, type: "Creature", archetype: "Midrange, Control", effect: "3/5 — Opponent draws 2 cards when this enters", why: "Giving your opponent card advantage is never worth a 3/5 body. Aggro ignores it and takes free cards. Control thanks you and removes it.", rating: "C" },
  { card: "Forbidden Ritual", mana: 7, type: "Spell (Sacrifice)", archetype: "Combo", effect: "Sacrifice all your minions. For each, deal 2 damage to a random enemy.", why: "Seven mana to sacrifice your own board for random damage. Requires a full board to be worthwhile, at which point you attack with the board. Self-defeating design.", rating: "C" },
];

const archetypeRankings = [
  { archetype: "Aggro (Rush)", bestCards: "Aggressive Recruiter, Lightning Bolt, Fireball, Token Generator", keySynergy: "Recruiter + Recruit = 6 power turn 3 into Bolt lethal turn 5", matchupWinRate: "55% vs Control, 45% vs Midrange, 50% vs Aggro" },
  { archetype: "Control (Grind)", bestCards: "Firestorm, Shieldbearer, Healing Spring, Mana Leak", keySynergy: "Shieldbearer absorbs damage while Healing Spring recovers — stabilize by turn 5", matchupWinRate: "60% vs Aggro, 40% vs Combo, 55% vs Midrange" },
  { archetype: "Midrange (Value)", bestCards: "Swords to Plowshares, Iron Giant, Frost Lynx, Brawl", keySynergy: "Frost Lynx freezes threat into Brawl + Iron Giant cleanup on turn 9", matchupWinRate: "55% vs Control, 50% vs Aggro, 55% vs Combo" },
  { archetype: "Combo (OTK)", bestCards: "Mind Rot, Lightning Bolt, Fireball, Lightning Ring", keySynergy: "Mind Rot strips disruption into Lightning Ring + Bolt + Fireball = 20 damage OTK", matchupWinRate: "60% vs Control, 35% vs Aggro, 50% vs Midrange" },
];

export default function BestCardsTierListPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Tabletop Tavern Card Tier List — Best Cards Ranked S to C Tier (2026)</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              In Tabletop Tavern, your card choices determine whether you dominate the tavern table or walk home with an empty coin purse. With over 200 collectible cards spanning spells, creatures, artifacts, and enchantments, the gap between an S-Tier staple and a C-Tier trap card can be the difference between a 70% win rate and a 35% win rate. This tier list ranks every competitive card from S (format-defining, mandatory in their archetype) through C (situationally functional, outclassed by alternatives). We evaluate cards based on mana efficiency, archetype synergy, meta prevalence, and cross-matchup consistency. Whether you are building your first midrange deck or tweaking a tournament-level combo list, this guide tells you which cards deserve a slot — and which ones belong in the trash can behind the tavern.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">S Tier — Format-Defining Staples</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              S-Tier cards are the backbone of competitive Tabletop Tavern. They are efficient, versatile, and so powerful that they define entire archetypes. Firestorm is the most-played card in the game because a 3-mana board clear against aggro and tokens is irreplaceable. Mana Leak warps the meta around itself — every deck must account for the possibility of their key spell being countered for 2 mana. Aggressive Recruiter generates 6 power across two bodies for 3 mana, a rate no other card matches. If you can play an S-Tier card in your deck, you should.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Card</th>
                  <th>Mana</th>
                  <th>Type</th>
                  <th>Archetype</th>
                  <th>Effect</th>
                  <th>Why It Is S Tier</th>
                  <th>R</th>
                </tr>
              </thead>
              <tbody>
                {sTierCards.map((c) => (
                  <tr key={c.card}>
                    <td className="font-semibold">{c.card}</td>
                    <td>{c.mana}</td>
                    <td className="text-sm">{c.type}</td>
                    <td className="text-sm">{c.archetype}</td>
                    <td className="text-sm">{c.effect}</td>
                    <td className="text-sm text-ink-light">{c.why}</td>
                    <td><span className="text-accent font-bold">{c.rating}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">A Tier — Excellent Role Players</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              A-Tier cards are powerful and frequently played but lack the universal applicability of S-Tier staples. Iron Giant wins games when it resolves but costs 8 mana — dead in hand against aggro. Shieldbearer blanks entire aggro strategies but is a 1/4 body against control that does nothing. Frost Lynx provides excellent tempo but is outclassed in pure power level by Aggressive Recruiter. These cards excel in their specific niches and are correct inclusions in the right archetypes.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Card</th>
                  <th>Mana</th>
                  <th>Type</th>
                  <th>Archetype</th>
                  <th>Effect</th>
                  <th>Why It Is A Tier</th>
                  <th>R</th>
                </tr>
              </thead>
              <tbody>
                {aTierCards.map((c) => (
                  <tr key={c.card}>
                    <td className="font-semibold">{c.card}</td>
                    <td>{c.mana}</td>
                    <td className="text-sm">{c.type}</td>
                    <td className="text-sm">{c.archetype}</td>
                    <td className="text-sm">{c.effect}</td>
                    <td className="text-sm text-ink-light">{c.why}</td>
                    <td><span className="text-[#58a6ff] font-bold">{c.rating}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">B Tier — Situational Role Players</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              B-Tier cards are functional but niche. They work in specific decks or against specific matchups but are not optimal in a generic list. Fireball is a fine burn spell but worse than Lightning Bolt per mana. Clone enables infinite combos but is a dead card in 70% of game states. Wall of Stone is a massive blocker that loses to any flying threat. Include B-Tier cards as one-ofs or sideboard options when the meta calls for them — do not build a deck around them.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Card</th>
                  <th>Mana</th>
                  <th>Type</th>
                  <th>Archetype</th>
                  <th>Effect</th>
                  <th>Why It Is B Tier</th>
                  <th>R</th>
                </tr>
              </thead>
              <tbody>
                {bTierCards.map((c) => (
                  <tr key={c.card}>
                    <td className="font-semibold">{c.card}</td>
                    <td>{c.mana}</td>
                    <td className="text-sm">{c.type}</td>
                    <td className="text-sm">{c.archetype}</td>
                    <td className="text-sm">{c.effect}</td>
                    <td className="text-sm text-ink-light">{c.why}</td>
                    <td><span className="text-[#3fb950] font-bold">{c.rating}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">C Tier — Avoid These Cards</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              C-Tier cards are actively harmful to include in competitive decks. Goblin Raider discards your own cards in exchange for a vanilla body — there is no deck where this is correct. Necromancer&apos;s Folly costs 6 mana for a temporary minion you cannot control. If you open these cards in packs, dust them for crafting materials. There is always a better alternative at the same mana cost.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Card</th>
                  <th>Mana</th>
                  <th>Type</th>
                  <th>Archetype</th>
                  <th>Effect</th>
                  <th>Why It Is C Tier</th>
                  <th>R</th>
                </tr>
              </thead>
              <tbody>
                {cTierCards.map((c) => (
                  <tr key={c.card}>
                    <td className="font-semibold">{c.card}</td>
                    <td>{c.mana}</td>
                    <td className="text-sm">{c.type}</td>
                    <td className="text-sm">{c.archetype}</td>
                    <td className="text-sm">{c.effect}</td>
                    <td className="text-sm text-ink-light">{c.why}</td>
                    <td><span className="text-[#8b5cf6] font-bold">{c.rating}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Archetype-Specific Rankings</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              A card&apos;s tier depends heavily on which archetype you are playing. Lightning Bolt is S-Tier in aggro and combo but merely A-Tier in control where burn spells are off-plan. Firestorm is S-Tier in control but dead weight in aggro where you want to end the game before needing a board clear. The table below shows the best cards and key synergies for each of the four major archetypes.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Archetype</th>
                  <th>Best Cards</th>
                  <th>Key Synergy</th>
                  <th>Matchup Win Rates</th>
                </tr>
              </thead>
              <tbody>
                {archetypeRankings.map((a) => (
                  <tr key={a.archetype}>
                    <td className="font-semibold">{a.archetype}</td>
                    <td className="text-sm">{a.bestCards}</td>
                    <td className="text-sm text-ink-light">{a.keySynergy}</td>
                    <td className="text-sm">{a.matchupWinRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Card Synergy: How to Build Around Your Best Cards</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              Raw card power matters, but synergy is the multiplier that turns a good deck into a great one. The golden rule: your deck should have a single win condition supported by 35 cards that enable it. A midrange deck built around Iron Giant should include ramp cards to play the Giant on turn 6 instead of turn 8, Brawl to clear the board before the Giant attacks, and Frost Lynx to keep enemy threats frozen while the Giant beats down. A combo deck built around Lightning Bolt should include Mind Rot and Thoughtseize to strip the opponent&apos;s disruption, Mana Leak to protect your combo turn, and card draw to find your pieces.
            </p>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              The most common deckbuilding mistake is including too many win conditions. A deck with Iron Giant, Firestorm, and Aggressive Recruiter is pulled in three conflicting directions — midrange finisher, control board clear, and aggro swarm. Pick one plan and commit. The second most common mistake is including cards that work against your plan. Aggro should never play Healing Spring — 2 mana to gain 8 life is 2 mana not spent on a threat that pushes damage. Control should never play Aggressive Recruiter — a 3/2 body does nothing to advance the game toward your late-game value engine.
            </p>
            <p className="text-ink-light leading-relaxed text-sm">
              Sideboard construction is where synergy knowledge separates top players from the rest. Your 15-card sideboard should address your deck&apos;s bad matchups without diluting your core strategy. An aggro deck that loses to control should sideboard Mind Rot and Thoughtseize to discard their board clears. A control deck that loses to combo should sideboard additional Mana Leaks and Spellbreaker. Never sideboard in cards that contradict your win condition — aggro decks do not improve against control by adding Healing Springs.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-ink mb-1">Why is Aggressive Recruiter S Tier when it dies to Firestorm?</h3>
                <p className="text-ink-light">Aggressive Recruiter wins games before Firestorm can be played. A turn 3 Recruiter demands an answer immediately — if your opponent does not have removal in hand, they take 6 damage on turn 4 and face lethal by turn 5. Yes, Firestorm clears it on turn 3 or 4, but that means the control player spent their entire turn answering one card instead of developing their own game plan. The tempo swing is so significant that even when answered, Recruiter often leaves the opponent too far behind on board to recover. The threat of Recruiter forces control decks to keep Firestorm in their opening hand, which reduces their options against your other threats.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-1">Should I craft S-Tier cards first or build a complete deck?</h3>
                <p className="text-ink-light">Craft the S-Tier staples that fit your preferred archetype first. A playset of Firestorm (3 copies) costs the same as 12 A-Tier cards and will win you more games because it is simply the most efficient card at its job. After securing your archetype&apos;s S-Tier cards, craft A-Tier role players that enable your win condition. Do this before branching into a second archetype — a focused, complete deck with S and A-Tier cards outperforms three half-built decks every time. The crafting priority order is: S-Tier staples for your archetype, then A-Tier enablers, then sideboard tech cards, then consider a second archetype.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-1">How often does the card tier list change with new expansions?</h3>
                <p className="text-ink-light">Major expansions typically shift 20-30% of the tier list as new cards create new synergies and push old staples out of the meta. Firestorm and Mana Leak have been S-Tier across four consecutive expansions because their effects are fundamental to the game&apos;s design — there will always be aggro decks that need clearing and key spells that need countering. Cards like Iron Giant and Frost Lynx fluctuate between A and B Tier depending on whether the current expansion favors fast or slow metagames. Check back within 72 hours of each new expansion for updated tier rankings based on tournament results and high-level ladder data.</p>
              </div>
            </div>
          </section>

          <p className="text-sm text-ink-faded mt-8 italic">Last updated: July 2, 2026. Based on current competitive meta in Tabletop Tavern. Card rankings reflect tournament results and top-100 ladder play data.</p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/deck-tier-list" className="text-accent hover:underline">Deck Tier List</a></li>
              <li><a href="/counter-play-guide" className="text-accent hover:underline">Counter Play Guide</a></li>
              <li><a href="/deck-archetypes" className="text-accent hover:underline">Deck Archetypes Guide</a></li>
              <li><a href="/deck-building" className="text-accent hover:underline">Deck Building Fundamentals</a></li>
              <li><a href="/factions" className="text-accent hover:underline">Factions Overview</a></li>
            </ul>
          </div>
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Quick Tips</h3>
            <ul className="space-y-2 text-sm text-ink-light">
              <li>Firestorm + Mana Leak are the two cards every deck must respect</li>
              <li>Build around one win condition, not three</li>
              <li>Sideboard to fix bad matchups, not to change your archetype</li>
              <li>Craft S-Tier staples before anything else</li>
              <li>A deck with 4 S-Tier cards wins more than a deck with 12 B-Tier cards</li>
            </ul>
          </div>
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Tier Distribution</h3>
            <ul className="space-y-2 text-sm text-ink-light list-disc list-inside">
              <li><span className="text-accent font-semibold">S Tier (6 cards):</span> Format-defining, mandatory</li>
              <li><span className="text-[#58a6ff] font-semibold">A Tier (8 cards):</span> Excellent, archetype staples</li>
              <li><span className="text-[#3fb950] font-semibold">B Tier (6 cards):</span> Situational, sideboard options</li>
              <li><span className="text-[#8b5cf6] font-semibold">C Tier (4 cards):</span> Avoid, strictly outclassed</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
