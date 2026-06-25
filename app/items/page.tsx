"use client";

import { useEffect } from "react";

const ITEMS_DATA = [
  { name: 'Berserker\'s Mead Horn', rarity: 'Legendary', type: 'Consumable', effect: 'All Berserkers gain +20% attack damage for 10 seconds', faction: 'Vikings' },
  { name: 'Frost Rune Amulet', rarity: 'Epic', type: 'Accessory', effect: 'Runecaster spells apply 30% slow for 3 seconds', faction: 'Vikings' },
  { name: 'Stormforged Greaves', rarity: 'Rare', type: 'Boots', effect: '+15% movement speed for all melee units', faction: 'Vikings' },
  { name: 'Siege Commander\'s Banner', rarity: 'Legendary', type: 'Relic', effect: 'Catapults deal +35% damage to structures and +2 range', faction: 'Orcs' },
  { name: 'Ironhide Pauldrons', rarity: 'Epic', type: 'Armor', effect: 'Ironhides reflect 10% of blocked damage', faction: 'Orcs' },
  { name: 'War Drum of the Ancients', rarity: 'Epic', type: 'Relic', effect: 'War Drummer aura radius +50%', faction: 'Orcs' },
  { name: 'Shaman\'s Spirit Staff', rarity: 'Epic', type: 'Weapon', effect: 'Healing totems grant +15% damage reduction', faction: 'Orcs' },
  { name: 'Eagle Eye Scope', rarity: 'Legendary', type: 'Accessory', effect: '+25% critical strike chance for ranged units', faction: 'Elves' },
  { name: 'Windrider Cloak', rarity: 'Epic', type: 'Armor', effect: 'Windriders gain invisibility for 4s after leaving combat', faction: 'Elves' },
  { name: 'Druid\'s Grove Seed', rarity: 'Rare', type: 'Consumable', effect: 'Druid abilities have 30% reduced cooldown', faction: 'Elves' },
];

export default function ItemsGuidePage() {
  useEffect(() => {
    document.title = "Tabletop Tavern Items Guide — Best Gear, Economy Items & Synergies";
  }, []);

  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-text-primary mb-2">
          Tabletop Tavern Items Guide
        </h1>
        <p className="text-sm text-text-secondary mb-8 max-w-2xl">
          Key items and equipment for all five factions. Combine faction-specific relics with universal gear to create powerful synergies for your campaign runs.
        </p>

        <section className="mb-10">
          <h2 className="font-display text-lg font-semibold tracking-tight text-tactical-blue mb-4">Key Items by Faction</h2>
          <div className="bg-abyss-light border border-border-subtle overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-grid-line">
                  <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">Item</th>
                  <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">Rarity</th>
                  <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">Type</th>
                  <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">Faction</th>
                  <th className="text-left py-2.5 px-4 text-[10px] font-mono uppercase tracking-wider text-text-muted">Effect</th>
                </tr>
              </thead>
              <tbody>
                {ITEMS_DATA.map((item, i) => (
                  <tr key={i} className="data-row">
                    <td className="py-2.5 px-4 text-text-primary">{item.name}</td>
                    <td className="py-2.5 px-4">
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 border ${
                        item.rarity === 'Legendary' ? 'text-warning-orange border-warning-orange/30 bg-warning-orange/10' :
                        item.rarity === 'Epic' ? 'text-tactical-blue border-tactical-blue/30 bg-tactical-blue/10' :
                        'text-text-secondary border-border-subtle'
                      }`}>{item.rarity}</span>
                    </td>
                    <td className="py-2.5 px-4 text-text-muted">{item.type}</td>
                    <td className="py-2.5 px-4">
                      <span className="tag">{item.faction}</span>
                    </td>
                    <td className="py-2.5 px-4 text-text-secondary text-xs max-w-xs">{item.effect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold tracking-tight text-tactical-blue mb-4">FAQ</h2>
          <div className="bg-abyss-light border border-border-subtle p-4 space-y-3">
            <details>
              <summary className="text-sm font-semibold text-text-primary cursor-pointer hover:text-tactical-blue">How do items work in Tabletop Tavern?</summary>
              <p className="text-sm text-text-secondary mt-2 pl-4 border-l-2 border-border-subtle">
                Items are acquired through Shop nodes between campaign battles. They provide passive bonuses or active abilities. Legendary items are build-defining and should be prioritized when available.
              </p>
            </details>
            <details>
              <summary className="text-sm font-semibold text-text-primary cursor-pointer hover:text-tactical-blue">Can I transfer items between runs?</summary>
              <p className="text-sm text-text-secondary mt-2 pl-4 border-l-2 border-border-subtle">
                Items are campaign-specific and do not carry over between runs. The roguelike nature means each run has unique item opportunities. Focus on building around what you find in the current run.
              </p>
            </details>
          </div>
        </section>

        <p className="text-xs text-text-muted font-mono text-center mt-8">
          Item details based on community gameplay reports. Actual in-game stats may vary. Unofficial fan site.
        </p>
      </div>
    </div>
  );
}
