import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tabletop Tavern Deck Archetypes Guide — Aggro, Control, Combo & Midrange',
  description: 'Complete Tabletop Tavern deck archetypes guide. Aggro, Control, Combo, and Midrange deck strategies explained. Card selection, play patterns, and faction recommendations for each archetype.',
};

const ARCHETYPES = [
  {
    name: 'Aggro (Aggressive)',
    description: 'Win fast by applying relentless early pressure. Flood the board with cheap, efficient units and attack every turn. The aggro philosophy: your opponent\'s life total is a resource that should hit zero before their strategy comes online.',
    keyCards: 'Low-cost units (1-3 mana), direct damage spells, charge/haste creatures',
    mulliganStrategy: 'Keep hands with at least two 1-cost or 2-cost units. Throw back any hand with nothing to play before turn 3.',
    bestFactions: 'Orcs, Vikings — both have aggressive early-game units and direct damage options',
    worstMatchup: 'Control — board wipes erase your early advantage',
    playPattern: 'Turn 1-3: deploy cheap units. Turn 4-6: buff and attack. Turn 7+: if opponent is not dead, you probably lost.',
  },
  {
    name: 'Control',
    description: 'Win slowly by answering every threat your opponent plays. Remove their units, counter their spells, and exhaust their resources. The control philosophy: the game is not about who attacks first, but who still has cards when the opponent runs out.',
    keyCards: 'Board wipes, targeted removal, card draw, lifegain, large finisher units (7+ mana)',
    mulliganStrategy: 'Keep hands with at least one removal spell and one card draw effect. Early game survival is the only goal.',
    bestFactions: 'Dwarves, Humans — Dwarves have the best defensive tools, Humans have versatile answers',
    worstMatchup: 'Combo — control cannot interact with most combo pieces before the combo fires',
    playPattern: 'Turn 1-4: remove threats, draw cards. Turn 5-8: stabilize with board wipes. Turn 9+: deploy finisher, protect it, and win in 2-3 attacks.',
  },
  {
    name: 'Combo',
    description: 'Win suddenly by assembling a specific combination of cards that, when played together, creates an overwhelming or game-ending effect. The combo philosophy: ignore what your opponent is doing unless it threatens to kill you before your combo goes off.',
    keyCards: 'Tutor effects (search deck for specific cards), card draw (dig for combo pieces), protection spells (keep combo pieces alive)',
    mulliganStrategy: 'Keep hands with at least one combo piece or a tutor. Throw back hands that are all reactive cards with no combo progress.',
    bestFactions: 'Elves — their card draw and mana acceleration enables the fastest combos',
    worstMatchup: 'Aggro — combo decks need time to assemble pieces, and aggro does not give them that time',
    playPattern: 'Turn 1-5: draw cards and search for combo pieces. Turn 6-8: protect yourself with stall tools. Turn 8+: assemble and execute combo for the win.',
  },
  {
    name: 'Midrange',
    description: 'The flexible middle ground. Play efficient units that are larger than aggro\'s but faster than control\'s. The midrange philosophy: play the best card at each mana cost and adapt your role based on the matchup — be the aggressor against control, the defender against aggro.',
    keyCards: 'Efficient mid-cost units (3-6 mana), versatile removal, value-generating creatures (enter-the-battlefield effects)',
    mulliganStrategy: 'Keep hands with a smooth mana curve: a 2-cost, a 3-cost, and a 4-cost card. Consistency is more important than power.',
    bestFactions: 'Humans — their balanced roster fits midrange perfectly',
    worstMatchup: 'None specifically — midrange has game against everything but is favored against nothing',
    playPattern: 'Turn 1-3: deploy early units. Turn 4-7: deploy value generators that create card advantage. Turn 8+: out-value opponent with efficient trades and card draw.',
  },
];

const MATCHUP_TABLE = [
  { matchup: 'Aggro vs Aggro', favored: 'Whoever goes first', winRate: '55% first player', notes: 'The player who establishes board presence first wins. Coin-flip matchup.' },
  { matchup: 'Aggro vs Control', favored: 'Aggro', winRate: '60%', notes: 'Aggro wins before control stabilizes if the aggro draw is fast enough.' },
  { matchup: 'Aggro vs Combo', favored: 'Aggro', winRate: '65%', notes: 'Combo needs 6+ turns to assemble. Aggro kills by turn 4-5. Worst matchup for combo.' },
  { matchup: 'Aggro vs Midrange', favored: 'Midrange', winRate: '55%', notes: 'Midrange units are larger than aggro units. Midrange stabilizes and wins through value.' },
  { matchup: 'Control vs Control', favored: 'Whoever draws more cards', winRate: '50%', notes: 'The player who draws more answers than the opponent draws threats wins. Long games.' },
  { matchup: 'Control vs Combo', favored: 'Combo', winRate: '60%', notes: 'Control cannot interact with most combo pieces. Combo fires before control can deploy a finisher.' },
  { matchup: 'Control vs Midrange', favored: 'Control', winRate: '55%', notes: 'Control\'s removal lines up well against midrange\'s medium-sized threats.' },
  { matchup: 'Combo vs Midrange', favored: 'Combo', winRate: '55%', notes: 'Midrange is not fast enough to kill combo before it assembles, but can apply pressure.' },
];

export default function DeckArchetypesPage() {
  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-text-primary mb-2">
          Tabletop Tavern Deck Archetypes
        </h1>
        <p className="text-sm text-text-secondary mb-8 max-w-2xl">
          Understanding deck archetypes is the foundation of strategic card game play. Every deck falls into one of four archetypes — Aggro, Control, Combo, or Midrange — and knowing which you are facing determines every decision from mulligan to final attack.
        </p>

        <div className="space-y-6 mb-10">
          {ARCHETYPES.map((a, i) => (
            <div key={i} className="bg-abyss-light border border-border-subtle p-5">
              <div className="flex items-center gap-3 mb-3">
                <h2 className="font-display text-lg font-semibold text-text-primary">{a.name}</h2>
                <span className="tag">{a.bestFactions}</span>
              </div>
              <p className="text-sm text-text-secondary mb-3">{a.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-tactical-blue">Key Cards:</span>
                  <span className="text-text-muted ml-1">{a.keyCards}</span>
                </div>
                <div>
                  <span className="text-tactical-blue">Mulligan:</span>
                  <span className="text-text-muted ml-1">{a.mulliganStrategy}</span>
                </div>
                <div>
                  <span className="text-tactical-blue">Worst Matchup:</span>
                  <span className="text-text-muted ml-1">{a.worstMatchup} — {a.playPattern.split('.')[a.playPattern.indexOf('Turn') > -1 ? 0 : 3]}</span>
                </div>
                <div>
                  <span className="text-tactical-blue">Play Pattern:</span>
                  <span className="text-text-muted ml-1">{a.playPattern}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-display text-xl font-bold text-text-primary mb-4">Archetype Matchup Table</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-left border border-border-subtle text-sm">
            <thead className="bg-abyss-light">
              <tr>
                <th className="p-3 border border-border-subtle text-text-primary">Matchup</th>
                <th className="p-3 border border-border-subtle text-text-primary">Favored</th>
                <th className="p-3 border border-border-subtle text-text-primary">Win Rate</th>
                <th className="p-3 border border-border-subtle text-text-primary">Notes</th>
              </tr>
            </thead>
            <tbody>
              {MATCHUP_TABLE.map((m, i) => (
                <tr key={i} className="hover:bg-abyss-light">
                  <td className="p-3 border border-border-subtle font-semibold text-text-primary">{m.matchup}</td>
                  <td className="p-3 border border-border-subtle text-accent">{m.favored}</td>
                  <td className="p-3 border border-border-subtle text-text-secondary">{m.winRate}</td>
                  <td className="p-3 border border-border-subtle text-text-muted text-xs">{m.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-display text-xl font-bold text-text-primary mb-4">FAQ</h2>
        <div className="space-y-3">
          <details className="p-3 border border-border-subtle bg-abyss-light">
            <summary className="font-medium cursor-pointer hover:text-accent">Which archetype is best for beginners?</summary>
            <p className="mt-2 text-sm text-text-secondary">Midrange is the best learning archetype. It teaches fundamental skills — mana curve management, efficient trading, role assessment — without having an extreme game plan that punishes small mistakes. Aggro can teach bad habits (always attack face, never trade), and Control requires deep knowledge of the meta to know what to counter. Start with Midrange, then branch out.</p>
          </details>
          <details className="p-3 border border-border-subtle bg-abyss-light">
            <summary className="font-medium cursor-pointer hover:text-accent">Can I mix archetypes in one deck?</summary>
            <p className="mt-2 text-sm text-text-secondary">Generally no. A deck that tries to be both aggro and control ends up being bad at both. Your aggro cards will be too slow because you diluted them with control tools, and your control tools will come online too late because your deck is trying to end the game quickly. Pick one archetype and commit. The only exception is Aggro-Control (also called Tempo), which uses cheap disruption to protect aggressive threats — but this is an advanced archetype that requires precise card selection.</p>
          </details>
          <details className="p-3 border border-border-subtle bg-abyss-light">
            <summary className="font-medium cursor-pointer hover:text-accent">How do I identify my opponent&apos;s archetype quickly?</summary>
            <p className="mt-2 text-sm text-text-secondary">By turn 2-3, you should know. If they played two 1-cost units by turn 2, they are Aggro. If they passed turn 1 and 2 without playing anything, they are Control. If they played a 2-cost then a 3-cost, they are Midrange. If they are drawing extra cards and not committing to the board, they are Combo. Identify the archetype by turn 3 and adjust your strategy — be defensive against Aggro, aggressive against Control, and disruptive against Combo.</p>
          </details>
        </div>

        <p className="text-text-muted mt-10 text-xs border-t border-border-subtle pt-4">
          Last updated: July 1, 2026.
        </p>
      </div>
    </div>
  );
}
