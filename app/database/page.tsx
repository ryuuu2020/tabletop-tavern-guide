import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tabletop Tavern Unit Database — Stats, Abilities & Upgrade Paths',
  description: 'Complete Tabletop Tavern unit database. Unit stats, abilities, upgrade paths, and faction information for all units across Vikings, Orcs, Elves, Humans, and Dwarves.',
};

const UNITS = [
  { name: 'Berserker', faction: 'Vikings', role: 'Frontline DPS', type: 'Melee', desc: 'Aggressive melee infantry with Frenzy passive — attack speed increases per kill. Core unit for early-game pressure.' },
  { name: 'Longship', faction: 'Vikings', role: 'Mobility', type: 'Support', desc: 'Provides rapid battlefield repositioning for Viking forces. Enables flanking maneuvers and map traversal.' },
  { name: 'Runecaster', faction: 'Vikings', role: 'Anti-Armor', type: 'Ranged', desc: 'Magic damage dealer specialized against heavily armored targets. Apply slowing effects with rune magic.' },
  { name: 'Troll', faction: 'Orcs', role: 'Tank / Bruiser', type: 'Melee', desc: 'Massive HP pool and raw damage. Strong against balanced armies but vulnerable to massed pike formations.' },
  { name: 'Catapult', faction: 'Orcs', role: 'Siege', type: 'Ranged', desc: 'Long-range siege unit dealing massive area damage to structures and clumped enemies.' },
  { name: 'Shaman', faction: 'Orcs', role: 'Healer / Support', type: 'Support', desc: 'Deploys healing totems and damage amplification curses. Essential for Orc sustain.' },
  { name: 'Elven Archer', faction: 'Elves', role: 'Ranged Crit', type: 'Ranged', desc: 'Precision archer with Deadly Aim passive for critical hits. High-skill ranged DPS unit.' },
  { name: 'Windrider', faction: 'Elves', role: 'Scout', type: 'Cavalry', desc: 'Fast scouting unit for hit-and-run harassment. Provides map vision and can bait enemy abilities.' },
  { name: 'Druid', faction: 'Elves', role: 'Flex Support', type: 'Support', desc: 'Versatile support unit — healing, crowd control, or damage amplification depending on build.' },
  { name: 'Human Knight', faction: 'Humans', role: 'Balanced Frontline', type: 'Melee', desc: 'Reliable generalist frontline unit. No extreme strengths or weaknesses — adapts to any situation.' },
  { name: 'Ironbreaker', faction: 'Dwarves', role: 'Defensive Tank', type: 'Melee', desc: 'Heavily armored defensive specialist. Excellent at holding chokepoints and absorbing damage.' },
];

export default function DatabasePage() {
  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-text-primary mb-2">
          Unit Database
        </h1>
        <p className="text-sm text-text-secondary mb-8 max-w-2xl">
          Searchable unit database for Tabletop Tavern. Browse all units across the five factions with roles, types, and descriptions.
        </p>

        <div className="bg-abyss-light border border-border-subtle overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-grid-line">
                <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">Unit</th>
                <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">Faction</th>
                <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">Role</th>
                <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">Type</th>
                <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">Description</th>
              </tr>
            </thead>
            <tbody>
              {UNITS.map((unit, i) => (
                <tr key={i} className="data-row">
                  <td className="py-2.5 px-4 text-text-primary font-semibold">{unit.name}</td>
                  <td className="py-2.5 px-4"><span className="tag">{unit.faction}</span></td>
                  <td className="py-2.5 px-4 text-text-secondary">{unit.role}</td>
                  <td className="py-2.5 px-4 text-text-muted">{unit.type}</td>
                  <td className="py-2.5 px-4 text-text-secondary text-xs max-w-md">{unit.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-text-muted font-mono text-center mt-8">
          Unit database compiled from Steam store descriptions and community reports. Unofficial fan site.
        </p>
      </div>
    </div>
  );
}
