export const metadata = {
  title: "Tabletop Tavern Counter Play Guide — How to Beat Every Deck Archetype (2026)",
  description:
    "Master Tabletop Tavern counter play. Learn how to beat aggro, control, combo, and midrange decks. Complete tech card guide and matchup strategies for competitive play.",
};

export default function CounterPlayPage() {
  const counterMatrix = [
    { archetype: 'Aggro (Rush)', playPattern: 'Flood board turns 1-4, win by turn 6', counterStrategy: 'Stall + Board Clear. Run cheap blockers (Shieldbearer, Iron Sentry) and AoE removal (Firestorm, Plague Wind). Survive the initial rush and aggro runs out of cards.', keyCounterCards: 'Firestorm (3 mana AoE), Shieldbearer (2 mana 1/4), Healing Spring', techCards: 'Wall of Stone, Frost Nova, Pacify', winCondition: 'Stabilize at 10+ HP by turn 5. Opponent concedes when hand is empty.' },
    { archetype: 'Control (Grind)', playPattern: 'Remove everything, win in fatigue', counterStrategy: 'Midrange Pressure + Burst. Do not overcommit to board (play around board clears). Save burst damage (Lightning Bolt, Fireball x2) for a single kill turn. Control cannot answer 15+ damage in one turn.', keyCounterCards: 'Lightning Bolt (3 mana 4 dmg), Mana Leak, Aggressive Recruiter', techCards: 'Spellbreaker, Unstoppable Charge, Hex', winCondition: 'Chip damage to 15 HP by mid-game, then burst finish with 2-3 spells.' },
    { archetype: 'Combo (OTK)', playPattern: 'Stall until combo pieces, win in one turn', counterStrategy: 'Disruption + Clock. Run hand disruption (Mind Rot, Thoughtseize), counter key combo pieces (Mana Leak on the enabler), and apply pressure to force them to use combo pieces defensively.', keyCounterCards: 'Mind Rot (discard 2), Mana Leak, Aggressive Recruiter', techCards: 'Relic of Silence, Disenchant, Counterspell', winCondition: 'Disrupt combo by turn 6 or kill them before turn 7. Combo folds to 2+ disrupted pieces.' },
    { archetype: 'Midrange (Value)', playPattern: 'Efficient creatures, curve out turns 3-7', counterStrategy: 'Tempo Swing + Removal Combo. Out-tempo with cheaper efficient removal (Swords to Plowshares on their 5-drop, develop your 3-drop). Win the board on turn 4-5 and never give it back.', keyCounterCards: 'Swords to Plowshares (1 mana removal), Frost Lynx, Brawl', techCards: 'Mind Control, Treachery, Clone', winCondition: 'Swing the board state on turn 4-5 with a 2-for-1 removal turn. Never let midrange stabilize.' },
    { archetype: 'Tempo (Efficient)', playPattern: 'Cheap threats + disruption, never let opponent play', counterStrategy: 'Go Bigger or Go Wider. Tempo struggles against: (A) big blockers they cannot remove efficiently (Iron Giant, Ancient Dragon), or (B) wider boards than theirs (Token Swarm). Do not try to out-tempo — overwhelm them.', keyCounterCards: 'Iron Giant (8 mana 8/8), Token Generator, Plague Wind', techCards: 'Wrath of God, Living Land, Army of the Dead', winCondition: 'Stick one threat they cannot answer (Iron Giant) or flood with 5+ tokens. Tempo loses to both extremes.' },
    { archetype: 'Mill (Deck Out)', playPattern: 'Force opponent to draw, win by empty deck', counterStrategy: 'Aggression + Refill. Mill is slow — kill them before your deck matters. Run card draw that replaces itself (Cantrip creatures), and never pass without attacking.', keyCounterCards: 'Aggressive Recruiter, Lightning Bolt, Fireball', techCards: 'Elixir of Immortality, Library of Eternity', winCondition: 'Kill by turn 7-8. Mill cannot race aggro because milling you draws you into burn spells.' },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Tabletop Tavern Counter Play Guide</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Knowing how to play your own deck is only half the battle. The other half is knowing how to dismantle your opponent's strategy. This counter play guide covers every major deck archetype in Tabletop Tavern — aggro, control, combo, midrange, tempo, and mill — with specific tech cards, matchup strategies, and winning conditions against each one. Whether you're climbing the competitive ladder or dominating your local tavern tournament, these counter strategies will give you the edge.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Archetype Counter Matrix</h2>
            <p className="text-ink-light mb-4">Each archetype has exploitable weaknesses. The key is identifying what your opponent is playing by turn 2-3 and pivoting your game plan accordingly. Don't blindly follow your deck's default strategy — adapt.</p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead><tr><th>Archetype</th><th>Pattern</th><th>Counter Strategy</th><th>Key Cards</th></tr></thead>
                <tbody>
                  {counterMatrix.map((m) => (
                    <tr key={m.archetype}>
                      <td className="font-medium">{m.archetype}</td>
                      <td className="text-ink-faded text-sm">{m.playPattern}</td>
                      <td className="text-ink-light text-sm">{m.counterStrategy}</td>
                      <td className="text-ink-light text-sm">{m.keyCounterCards}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Tech Cards by Matchup</h2>
            <p className="text-ink-light mb-4">Tech cards are flexible slots in your deck that you swap based on the meta. Having the right tech cards for the matchups you face most often can increase your win rate by 10-15% without changing your core strategy.</p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead><tr><th>Against</th><th>Recommended Tech</th><th>Mana</th><th>Effect</th><th>When to Play</th></tr></thead>
                <tbody>
                  {counterMatrix.map((m) => (
                    <tr key={'tech-' + m.archetype}>
                      <td className="font-medium">{m.archetype}</td>
                      <td className="text-sm text-accent">{m.techCards}</td>
                      <td className="text-ink-faded text-sm">—</td>
                      <td className="text-ink-light text-sm">{m.winCondition}</td>
                      <td className="text-ink-faded text-sm">{m.keyCounterCards}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Reading Your Opponent (Turns 1-3)</h2>
            <h3 className="font-display text-xl font-medium text-ink mb-2">Turn 1 — Identify Archetype</h3>
            <p className="text-ink-light mb-3">Aggro plays a 1-drop creature immediately. Control passes or plays a cantrip (card draw). Combo plays nothing or a defensive 0/3. Midrange plays a value 1-drop (2/1). Tempo plays a 1-drop with an ETB effect. Mill opens with a mill card targeting you.</p>
            <h3 className="font-display text-xl font-medium text-ink mb-2">Turn 2 — Confirm and Adapt</h3>
            <p className="text-ink-light mb-3">Aggro plays a second threat + attacks. Control plays removal or passes with mana up (holding counter). Combo tutors for a piece. Midrange plays another creature. Tempo plays a disruptive creature (bounce/stun). By this point you should know 80% what archetype they're on.</p>
            <h3 className="font-display text-xl font-medium text-ink mb-2">Turn 3 — Execute Counter Plan</h3>
            <p className="text-ink-light">Against aggro: play your first board clear or big blocker. Against control: don't overcommit — play one threat, make them answer it. Against combo: play disruption (discard/counter). Against midrange: set up your tempo swing turn. Against tempo: play a creature bigger than their removal threshold. Against mill: go face — every turn counts.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-display text-lg font-medium text-ink mb-1">What's the hardest archetype to counter?</h3>
                <p className="text-ink-light">Tempo is the trickiest because it attacks from multiple angles — cheap threats, disruption, and card advantage. Against tempo, you can't just play your game plan and hope it works. You must either go bigger (cards they can't remove) or wider (more threats than they have disruption). Tempo preys on indecision — commit to one extreme strategy and execute it decisively.</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-ink mb-1">How many tech slots should my deck have?</h3>
                <p className="text-ink-light">3-5 tech slots in a 30-card deck is the sweet spot. Fewer than 3 means you can't adapt to the meta. More than 5 dilutes your core strategy. Sideboard 10 cards for best-of-3 matches. Rotate tech cards weekly based on what you're facing on ladder — if 40% of opponents are aggro, run 2x Firestorm main deck.</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-ink mb-1">Should I ever change my entire deck to counter the meta?</h3>
                <p className="text-ink-light">Yes, if a single archetype dominates 50%+ of your matches. But don't over-correct — if you pivot to a full anti-aggro deck and then face 3 control opponents in a row, you lose all three. The better approach: play a deck with a 45-55% win rate against everything rather than 80% against one archetype and 20% against everything else.</p>
              </div>
            </div>
          </section>
          <p className="text-sm text-ink-faded mt-8 italic">Last updated: June 2026. Counter strategies based on current competitive meta.</p>
        </div>
        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/deck-tier-list" className="text-accent hover:underline">Deck Tier List</a></li>
              <li><a href="/deck-building" className="text-accent hover:underline">Deck Building Guide</a></li>
              <li><a href="/combat" className="text-accent hover:underline">Combat System</a></li>
              <li><a href="/tier-list" className="text-accent hover:underline">Card Tier List</a></li>
              <li><a href="/beginners-guide" className="text-accent hover:underline">Beginner's Guide</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
