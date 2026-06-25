import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tabletop Tavern Factions — Complete Guide to Vikings, Orcs, Elves, Humans, Dwarves',
  description: 'Complete Tabletop Tavern faction guide. Vikings (elite infantry), Orcs (trolls and giants), Elves (agile ranged), Humans (balanced), Dwarves (defensive) — all 5 factions explained.',
};

const FACTIONS = [
  { name: 'Vikings', role: 'Elite Infantry', style: 'Aggressive frontline pressure with Berserkers and naval mobility. High early-game dominance.', units: 'Berserkers, Longships, Shieldmaidens, Runecasters' },
  { name: 'Orcs', role: 'Heavy Bruiser', style: 'Raw stat dominance with trolls, giants, and siege weapons. Slow start, unstoppable late-game.', units: 'Trolls, Giants, Catapults, Ironhides, Shamans, War Drummers' },
  { name: 'Elves', role: 'Agile Ranged', style: 'Precision ranged combat with critical strikes and kiting. Fragile but devastating at range.', units: 'Elven Archers, Windriders, Druids, Sentinels' },
  { name: 'Humans', role: 'Balanced Flex', style: 'No weaknesses, no extremes. Flexible roster adapts to any situation. Best learning faction.', units: 'Knights, Pikemen, Archers — balanced generalist roster' },
  { name: 'Dwarves', role: 'Defensive Line', style: 'Resilient defensive specialists with artillery. Best at holding positions and wearing enemies down.', units: 'Ironbreakers, Artillery, Defensive formations' },
];

export default function FactionsPage() {
  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-text-primary mb-2">
          Tabletop Tavern Faction Guide
        </h1>
        <p className="text-sm text-text-secondary mb-8 max-w-2xl">
          Complete overview of all five factions available in Tabletop Tavern. Each faction has a distinct playstyle, unit roster, and strategic identity — choose the one that matches your preferred approach to battle.
        </p>

        <div className="space-y-4 mb-10">
          {FACTIONS.map((f, i) => (
            <div key={i} className="bg-abyss-light border border-border-subtle p-5">
              <div className="flex items-center gap-3 mb-3">
                <h2 className="font-display text-lg font-semibold text-text-primary">{f.name}</h2>
                <span className="tag">{f.role}</span>
              </div>
              <p className="text-sm text-text-secondary mb-3">{f.style}</p>
              <div className="text-xs font-mono text-text-muted">
                <span className="text-tactical-blue">Key Units:</span> {f.units}
              </div>
            </div>
          ))}
        </div>

        <section>
          <h2 className="font-display text-lg font-semibold tracking-tight text-tactical-blue mb-4">FAQ</h2>
          <div className="bg-abyss-light border border-border-subtle p-4 space-y-3">
            <details>
              <summary className="text-sm font-semibold text-text-primary cursor-pointer hover:text-tactical-blue">Which faction is best for beginners?</summary>
              <p className="text-sm text-text-secondary mt-2 pl-4 border-l-2 border-border-subtle">
                Humans are the best starting faction — their balanced roster means you can recover from mistakes and adapt to any campaign situation without being hard-countered.
              </p>
            </details>
            <details>
              <summary className="text-sm font-semibold text-text-primary cursor-pointer hover:text-tactical-blue">Can I switch factions mid-campaign?</summary>
              <p className="text-sm text-text-secondary mt-2 pl-4 border-l-2 border-border-subtle">
                Faction choice is made at the start of a campaign run. You cannot switch mid-run, but each new campaign offers the opportunity to try a different faction.
              </p>
            </details>
          </div>
        </section>

        <p className="text-xs text-text-muted font-mono text-center mt-8">
          Faction descriptions based on Steam store information. Unofficial fan site.
        </p>
      </div>
    </div>
  );
}
