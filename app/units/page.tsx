"use client";

import { useEffect } from "react";

const UNIT_TYPES = [
  { type: 'Pikemen', role: 'Anti-Cavalry', strongVs: 'Cavalry', weakVs: 'Heavy Infantry', faction: 'All' },
  { type: 'Cavalry', role: 'Flanking / Anti-Ranged', strongVs: 'Archers', weakVs: 'Pikemen', faction: 'All' },
  { type: 'Archers', role: 'Ranged DPS', strongVs: 'Heavy Infantry', weakVs: 'Cavalry', faction: 'All' },
  { type: 'Heavy Infantry', role: 'Frontline Tank', strongVs: 'Pikemen', weakVs: 'Archers', faction: 'All' },
];

const FACTION_UNITS = [
  { faction: 'Vikings', units: 'Berserker (Frontline DPS), Longship (Mobility), Shieldmaiden (Support), Runecaster (Anti-Armor)' },
  { faction: 'Orcs', units: 'Catapult (Siege), Ironhide (Tank), Shaman (Healer), War Drummer (Aura Support), Trolls, Giants' },
  { faction: 'Elves', units: 'Elven Archer (Ranged Crit), Windrider (Scout), Druid (Flex Support), Sentinel (Backline)' },
  { faction: 'Humans', units: 'Knights, Pikemen, Archers — balanced roster with no extreme strengths or weaknesses' },
  { faction: 'Dwarves', units: 'Ironbreakers (Defensive Tank), Artillery — resilient units with strong defensive capabilities' },
];

export default function UnitsPage() {
  useEffect(() => {
    document.title = "Tabletop Tavern Unit Guide — Stats, Counters & Faction Rosters";
  }, []);

  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-text-primary mb-2">
          Tabletop Tavern Unit Guide
        </h1>
        <p className="text-sm text-text-secondary mb-8 max-w-2xl">
          Complete unit database for all five factions. Learn the counter triangle (Pikemen &gt; Cavalry &gt; Archers &gt; Heavy Infantry &gt; Pikemen) and each faction&apos;s unique unit roster.
        </p>

        {/* Unit Counter Triangle */}
        <section className="mb-10">
          <h2 className="font-display text-lg font-semibold tracking-tight text-tactical-blue mb-4">Unit Type Counter System</h2>
          <div className="bg-abyss-light border border-border-subtle overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-grid-line">
                  <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">Unit Type</th>
                  <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">Role</th>
                  <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">Strong vs</th>
                  <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">Weak vs</th>
                </tr>
              </thead>
              <tbody>
                {UNIT_TYPES.map((unit, i) => (
                  <tr key={i} className="data-row">
                    <td className="py-2.5 px-4 text-text-primary font-semibold">{unit.type}</td>
                    <td className="py-2.5 px-4 text-text-secondary">{unit.role}</td>
                    <td className="py-2.5 px-4 text-terminal-green">{unit.strongVs}</td>
                    <td className="py-2.5 px-4 text-terminal-red">{unit.weakVs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Faction Roster */}
        <section className="mb-10">
          <h2 className="font-display text-lg font-semibold tracking-tight text-tactical-blue mb-4">Faction Unit Rosters</h2>
          <div className="space-y-3">
            {FACTION_UNITS.map((faction, i) => (
              <div key={i} className="bg-abyss-light border border-border-subtle p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="tag">{faction.faction}</span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{faction.units}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold tracking-tight text-tactical-blue mb-4">FAQ</h2>
          <div className="bg-abyss-light border border-border-subtle p-4 space-y-3">
            <details>
              <summary className="text-sm font-semibold text-text-primary cursor-pointer hover:text-tactical-blue">What unit composition should I use?</summary>
              <p className="text-sm text-text-secondary mt-2 pl-4 border-l-2 border-border-subtle">
                A balanced composition typically includes 2 frontline units, 2 ranged units, and 1 support. Scout enemy compositions and counter-pick your frontline — Pikemen against Cavalry, Heavy Infantry against Pikemen.
              </p>
            </details>
            <details>
              <summary className="text-sm font-semibold text-text-primary cursor-pointer hover:text-tactical-blue">How do terrain and positioning affect units?</summary>
              <p className="text-sm text-text-secondary mt-2 pl-4 border-l-2 border-border-subtle">
                High ground provides range bonuses for archers. Forests slow cavalry charges. Narrow chokepoints multiply the value of defensive formations. Position your units based on terrain advantages.
              </p>
            </details>
          </div>
        </section>

        <p className="text-xs text-text-muted font-mono text-center mt-8">
          Unit data based on Steam store descriptions and community gameplay. Unofficial fan site.
        </p>
      </div>
    </div>
  );
}
