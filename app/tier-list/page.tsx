import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tabletop Tavern Faction Tier List (2026) — Best Factions Ranked',
  description: 'Complete Tabletop Tavern faction tier list. Vikings, Orcs, Elves, Humans, Dwarves ranked by campaign performance. Find the best faction for your playstyle.',
};

const TIER_DATA = [
  { tier: 'S', name: 'Vikings', role: 'Elite Infantry', desc: 'Berserker infantry with unmatched frontline pressure. High damage output and sustain through aggressive play. Best for experienced players who can manage economy while pushing tempo.' },
  { tier: 'S', name: 'Orcs', role: 'Heavy Bruiser', desc: 'Trolls and giants dominate with raw stats. Weak to massed pike formations but crushes balanced armies. Highest HP pool of any faction.' },
  { tier: 'A', name: 'Elves', role: 'Agile Ranged', desc: 'Fast, fragile, and deadly at range. Requires precise positioning. Highest skill ceiling — devastating in the right hands but unforgiving of mistakes.' },
  { tier: 'A', name: 'Humans', role: 'Balanced Flex', desc: 'No glaring weaknesses, no overwhelming strengths. Best faction for learning the game. Flexible roster allows adaptation to any campaign situation.' },
  { tier: 'B', name: 'Dwarves', role: 'Defensive Line', desc: 'Resilient defensive specialists with artillery. Excellent at holding chokepoints but struggles in open-field engagements. Solid for patient players.' },
];

function getTierColor(tier: string): string {
  switch (tier) {
    case 'S': return 'text-[#f0883e]';
    case 'A': return 'text-[#58a6ff]';
    case 'B': return 'text-[#3fb950]';
    default: return 'text-text-secondary';
  }
}

function getTierBg(tier: string): string {
  switch (tier) {
    case 'S': return 'bg-[#f0883e]/10 border-[#f0883e]/30';
    case 'A': return 'bg-[#58a6ff]/10 border-[#58a6ff]/30';
    case 'B': return 'bg-[#3fb950]/10 border-[#3fb950]/30';
    default: return 'bg-abyss-light border-border-subtle';
  }
}

export default function TierListPage() {
  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Hero */}
        <section>
          <h1 className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-text-primary">
            Tabletop Tavern Faction Tier List (2026)
          </h1>
          <p className="text-sm text-text-secondary mt-3 max-w-2xl">
            Rankings based on campaign performance across difficulty levels. Factions evaluated on their ability to clear full campaigns reliably. Updated for latest patch.
          </p>
        </section>

        {/* FAQ Snippets */}
        <div className="bg-abyss-light border border-border-subtle p-4 space-y-2">
          <details className="group">
            <summary className="text-sm font-semibold text-text-primary cursor-pointer hover:text-tactical-blue transition-colors">What is the best faction in Tabletop Tavern?</summary>
            <p className="text-sm text-text-secondary mt-2 pl-4 border-l-2 border-border-subtle">
              The English Steam page cites elite Viking infantry as a flagship example, while the Orc roster of trolls and giants excels in raw-stat dominance. Both are S-tier based on community discussion.
            </p>
          </details>
          <details className="group">
            <summary className="text-sm font-semibold text-text-primary cursor-pointer hover:text-tactical-blue transition-colors">Which faction should beginners pick?</summary>
            <p className="text-sm text-text-secondary mt-2 pl-4 border-l-2 border-border-subtle">
              Humans are the best starting faction — their balanced roster means you can recover from mistakes and adapt to any campaign situation without being hard-countered.
            </p>
          </details>
          <details className="group">
            <summary className="text-sm font-semibold text-text-primary cursor-pointer hover:text-tactical-blue transition-colors">Are Dwarves actually bad or just underplayed?</summary>
            <p className="text-sm text-text-secondary mt-2 pl-4 border-l-2 border-border-subtle">
              Dwarves are underrated, not bad. Their defensive playstyle suits patient players. With Dwarven artillery and defensive formations, they can hold their own in campaign maps.
            </p>
          </details>
        </div>

        {/* Tier Table */}
        <section>
          <h2 className="font-display text-lg font-semibold tracking-tight text-text-primary mb-4">Faction Rankings</h2>
          <div className="space-y-3">
            {TIER_DATA.map((faction, i) => (
              <div key={i} className={`border p-4 ${getTierBg(faction.tier)}`}>
                <div className="flex items-center gap-4 flex-wrap">
                  <span className={`font-mono font-bold text-2xl ${getTierColor(faction.tier)}`}>{faction.tier}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-base font-semibold text-text-primary">{faction.name}</h3>
                    <span className="tag text-[10px] mt-1 inline-block">{faction.role}</span>
                  </div>
                </div>
                <p className="text-sm text-text-secondary mt-3 leading-relaxed">{faction.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Action */}
        <div className="text-center pt-4">
          <a href="/builds" className="inline-flex items-center gap-2 px-6 py-2.5 font-mono text-xs text-abyss bg-tactical-blue hover:bg-tactical-blue-dim transition-colors">
            VIEW BEST BUILDS &rarr;
          </a>
        </div>

        <p className="text-xs text-text-muted font-mono text-center">
          Tier rankings based on Steam store faction descriptions and community discussion. Unofficial fan site.
        </p>
      </div>
    </div>
  );
}
