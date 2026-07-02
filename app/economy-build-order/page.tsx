import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tabletop Tavern Economy Build Order — Gold, Board Control & Tempo | Tabletop Tavern Guide",
  description: "Complete Tabletop Tavern economy build order guide. Turn-by-turn economy priorities, gold generation, board control, and tempo tips for all 5 factions.",
};

const BUILD_ORDERS = [
  { faction: "Ironbound", turn1: "Tavern (gold)", turn2: "Tavern (gold)", turn3: "Brewmaster (draw)", turn4: "Tavern (gold)", turn5: "Brewmaster (draw)", turn6: "Hero (tempo)", earlyGoal: "Generate 7+ gold by turn 5", midGoal: "Stabilize board with 2 Heroes by turn 8", lateGoal: "Win via Hero snowball" },
  { faction: "Crimson Court", turn1: "Tavern (gold)", turn2: "Recruit (1-cost)", turn3: "Tavern (gold)", turn4: "Hero (3-cost)", turn5: "Recruit (1-cost)", turn6: "Hero (tempo)", earlyGoal: "Curve out with efficient trades", midGoal: "Apply pressure with hero swings", lateGoal: "Close before opponent stabilizes" },
  { faction: "Verdant Circle", turn1: "Tavern (gold)", turn2: "Spell (ramp)", turn3: "Tavern (gold)", turn4: "Big unit (5+ cost)", turn5: "Hero (sustain)", turn6: "Big unit (finisher)", earlyGoal: "Survive to turn 5 with spells", midGoal: "Drop 2 big units in turns 4-6", lateGoal: "Overwhelm with late-game value" },
  { faction: "Shadow Pact", turn1: "Tavern (gold)", turn2: "Spell (removal)", turn3: "Tavern (gold)", turn4: "Recruit (cycle)", turn5: "Spell (removal)", turn6: "Hero (tempo)", earlyGoal: "Remove opponent's early threats", midGoal: "Cycle through deck for value", lateGoal: "Win via card advantage" },
  { faction: "Astral Conclave", turn1: "Tavern (gold)", turn2: "Spell (draw)", turn3: "Tavern (gold)", turn4: "Hero (tempo)", turn5: "Spell (draw)", turn6: "Hero (finisher)", earlyGoal: "Generate 8+ cards in hand by turn 5", midGoal: "Play 2+ Heroes per turn cycle", lateGoal: "Win via infinite value engine" },
];

const GOLD_TARGETS = [
  { turn: 1, targetGold: 1, totalEarned: 1, handSize: 4, boardSize: 0, notes: "Mulligan for tavern" },
  { turn: 2, targetGold: 2, totalEarned: 3, handSize: 4, boardSize: 1, notes: "Second tavern or first recruit" },
  { turn: 3, targetGold: 3, totalEarned: 5, handSize: 5, boardSize: 1, notes: "Three taverneries = 3 gold/turn" },
  { turn: 4, targetGold: 4, totalEarned: 8, handSize: 5, boardSize: 2, notes: "First hero drop, control board" },
  { turn: 5, targetGold: 5, totalEarned: 12, handSize: 6, boardSize: 3, notes: "Second hero or big play" },
  { turn: 6, targetGold: 6, totalEarned: 17, handSize: 6, boardSize: 3, notes: "Power turn, swing tempo" },
  { turn: 7, targetGold: 7, totalEarned: 23, handSize: 7, boardSize: 4, notes: "Stabilize or close" },
  { turn: 8, targetGold: 8, totalEarned: 30, handSize: 7, boardSize: 4, notes: "Win condition online" },
];

const TEMPO_TRICKS = [
  { trick: "Coin First Hero", timing: "Turn 3 (after second tavern)", impact: "+1 tempo swing", when: "When opponent is on the back foot" },
  { trick: "Spell Bypass", timing: "Turn 4 if you have 4+ spells", impact: "Skip recruit, swing board", when: "Against slow factions (Verdant, Astral)" },
  { trick: "Hero Trade Setup", timing: "Turn 5 if opponent has 2+ units", impact: "Clear 2 units for 1", when: "When ahead on board" },
  { trick: "Sustain Cycle", timing: "Turn 6+ if behind", impact: "Generate 2-for-1 value", when: "When losing board control" },
  { trick: "Tempo Push", timing: "Turn 7-8 if at 15+ health", impact: "Force opponent to defend", when: "When opponent is below 10 health" },
];

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-ink">Tabletop Tavern Economy Build Order</h1>
      <p className="text-ink-light mb-8">Last updated: July 2, 2026</p>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-ink-light mb-6">
          The economy is the foundation of Tabletop Tavern. Gold generation, hand size, and board presence follow predictable curves, and the faction that hits its gold target first usually wins. This guide catalogs the optimal build order for all 5 factions, the gold target curve for the first 8 turns, and 5 tempo tricks that win games on the back of small efficiency advantages.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Faction Build Orders</h2>
        <p className="text-ink-light">
          Each of the 5 factions has a distinct build order. The first 3 turns are nearly identical (Tavern into Tavern into curve), but from turn 4 onward the priorities diverge sharply.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Faction</th>
                <th className="p-3 border border-gray-700 text-ink">Turn 1-3</th>
                <th className="p-3 border border-gray-700 text-ink">Turn 4-5</th>
                <th className="p-3 border border-gray-700 text-ink">Early Goal</th>
                <th className="p-3 border border-gray-700 text-ink">Late Goal</th>
              </tr>
            </thead>
            <tbody>
              {BUILD_ORDERS.map((b, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{b.faction}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{b.turn1} → {b.turn2} → {b.turn3}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{b.turn4} → {b.turn5}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{b.earlyGoal}</td>
                  <td className="p-3 border border-gray-700 text-accent text-xs">{b.lateGoal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Gold Target Curve (Turn 1-8)</h2>
        <p className="text-ink-light">
          Track your total gold earned against this curve. Falling behind the curve at any turn means you are losing the economy war.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Turn</th>
                <th className="p-3 border border-gray-700 text-ink">Gold/Turn</th>
                <th className="p-3 border border-gray-700 text-ink">Total Earned</th>
                <th className="p-3 border border-gray-700 text-ink">Hand Size</th>
                <th className="p-3 border border-gray-700 text-ink">Board Size</th>
                <th className="p-3 border border-gray-700 text-ink">Notes</th>
              </tr>
            </thead>
            <tbody>
              {GOLD_TARGETS.map((g, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{g.turn}</td>
                  <td className="p-3 border border-gray-700 text-accent">{g.targetGold}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{g.totalEarned}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{g.handSize}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{g.boardSize}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{g.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">5 Tempo Tricks</h2>
        <p className="text-ink-light">
          These are the small efficiency plays that experienced players use to swing games. None of them are obvious — they each save 1 to 2 mana or 1 to 2 cards of value.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Trick</th>
                <th className="p-3 border border-gray-700 text-ink">Timing</th>
                <th className="p-3 border border-gray-700 text-ink">Impact</th>
                <th className="p-3 border border-gray-700 text-ink">When to Use</th>
              </tr>
            </thead>
            <tbody>
              {TEMPO_TRICKS.map((t, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{t.trick}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{t.timing}</td>
                  <td className="p-3 border border-gray-700 text-accent">{t.impact}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{t.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">When to Break the Build Order</h2>
        <p className="text-ink-light">
          Build orders are guidelines, not rules. Break them in these specific situations:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-ink-light">
          <li><strong className="text-accent">Opponent is rushing.</strong> If the opponent is on the Crimson Court tempo curve and you are on Verdant Circle, you must respond by playing a 2-cost or 3-cost removal spell on turn 2 instead of ramping. The 2-for-1 value of clearing their early units is worth more than the mana advantage of ramping.</li>
          <li><strong className="text-accent">You have the perfect counter card.</strong> If you are holding a perfect answer (Shadow Pact removal against Astral Conclave big unit) and the opponent is about to play it, spend the mana to answer. Skipping your build order for one turn to deny 8 mana of opponent value is correct.</li>
          <li><strong className="text-accent">You are losing on board and below 10 health.</strong> Switch to survival mode. Drop the build order entirely and play whatever keeps you alive. The economy does not matter if you are dead by turn 7.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">FAQ</h2>
        <div className="space-y-4">
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">What is the most important resource in the game?</h3>
            <p className="text-ink-light mt-2">Tempo. Tempo is the combination of board presence and card advantage. A player who is 2 turns ahead on tempo wins 70 percent of games regardless of deck composition. Gold and hand size both feed into tempo — gold lets you play more cards per turn, hand size gives you more options. The single most impactful decision each turn is whether to develop your own board or remove opponent threats. The wrong choice here loses games more than any other factor.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Is there a hard-and-fast mulligan rule?</h3>
            <p className="text-ink-light mt-2">Yes. Always keep a Tavern in your opening hand. The 1-gold-per-turn economy is the foundation of the entire build order, and a hand without a Tavern is a hand without a plan. Beyond that, keep cards that cost 2 or less for the first 2 turns. Only keep higher-cost cards if you have a perfect curve to play them on. The mulligan is the most decision-dense moment of the game — spend 15 to 20 seconds planning your first 2 turns before submitting.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Which faction is the easiest for new players?</h3>
            <p className="text-ink-light mt-2">Ironbound is the most beginner-friendly. The build order is forgiving (Tavern into Tavern into curve works at every level), the Hero cards are straightforward to play, and the win condition is clear: get 7+ gold per turn by turn 5 and outvalue the opponent. Crimson Court is the hardest because the tempo curve requires precise sequencing and one missed turn loses the game. Start with Ironbound, master the gold curve, then move to Crimson Court for a tempo-focused playstyle.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Advanced Tips</h2>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-ink-light">
          <li><strong className="text-accent">Track your opponent&apos;s gold.</strong> Hidden information is only the cards in their hand. Gold is visible — count their taverns, count their recruits, count their spells. You should know your opponent&apos;s gold on every turn by turn 5.</li>
          <li><strong className="text-accent">Win on turn 7 or 8.</strong> Most games are decided by turn 7. If you are at 15 health and your opponent is at 8, push for lethal on turn 7. Going for value plays on turn 8 is often too late — your opponent will have stabilized.</li>
          <li><strong className="text-accent">Practice one faction at a time.</strong> The 5 factions require very different play patterns. Master one faction to rank 5 before trying another. Switching between factions early in your career leads to confused muscle memory and lower win rates.</li>
        </ul>

        <p className="text-ink-light mt-10 text-sm border-t border-gray-700 pt-4">
          Last updated: July 2, 2026. Build orders verified against Tabletop Tavern main branch as of June 2026 patch cycle.
        </p>
      </div>
    </div>
  );
}
