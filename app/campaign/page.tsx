import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tabletop Tavern Campaign Map Guide — Node Choices, Routes & Boss Strategy',
  description: 'Complete Tabletop Tavern campaign map guide. Learn when to choose Battle, Shop, Rest, and Sack Settlement nodes. Decision framework and boss route strategy.',
};

export default function CampaignMapPage() {
  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <section>
          <h1 className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-text-primary">
            Tabletop Tavern Campaign Map Guide
          </h1>
          <p className="text-sm text-text-secondary mt-3 max-w-3xl leading-relaxed mb-8">
            The campaign map in Tabletop Tavern is the strategic backbone of every run.
            Each campaign generates a branching map of interconnected nodes. Every choice
            matters — understanding when to fight, when to shop, and when to rest is the
            key to consistent campaign success.
          </p>
        </section>

        {/* Table of Contents */}
        <section className="bg-abyss-light border border-border-subtle p-5">
          <h2 className="font-display text-lg font-semibold text-text-primary mb-3">On This Page</h2>
          <ul className="text-sm font-mono text-text-secondary space-y-1">
            <li>1. Node Types &amp; Decision Framework</li>
            <li>2. Three Campaign Phases (Early / Mid / Late)</li>
            <li>3. Boss Preparation Strategy</li>
            <li>4. FAQ</li>
          </ul>
        </section>

        {/* Node Types */}
        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary mb-4">Node Types &amp; Decision Framework</h2>
          <div className="space-y-6">
            <div className="border border-terminal-red/30 bg-terminal-red/5 p-5">
              <h3 className="font-display text-lg font-semibold text-text-primary mb-2">Battle Node</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">
                Standard combat encounters where your army faces enemy forces. Battle Nodes are the
                most common node type and the primary way to earn gold, experience, and equipment drops.
              </p>
              <div className="text-xs text-text-muted">
                <span className="font-semibold text-text-secondary">When to choose:</span> Army at high HP, need resources, favorable matchup. Early-game priority.
              </div>
            </div>

            <div className="border border-tactical-blue/30 bg-tactical-blue/5 p-5">
              <h3 className="font-display text-lg font-semibold text-text-primary mb-2">Shop Node</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">
                Merchant outposts where you spend gold to purchase equipment, consumables,
                and unit upgrades. Shop inventories are partially randomized.
              </p>
              <div className="text-xs text-text-muted">
                <span className="font-semibold text-text-secondary">When to choose:</span> Gold surplus (200+), equipment behind the difficulty curve, between long battle stretches.
              </div>
            </div>

            <div className="border border-terminal-green/30 bg-terminal-green/5 p-5">
              <h3 className="font-display text-lg font-semibold text-text-primary mb-2">Rest Node</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">
                Recover unit HP and clear debuffs. No combat, no loot — purely restorative.
                The safest node type.
              </p>
              <div className="text-xs text-text-muted">
                <span className="font-semibold text-text-secondary">When to choose:</span> Units at critical HP, before boss fights, running sustain-reliant builds.
              </div>
            </div>
          </div>
        </section>

        {/* Campaign Phases */}
        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary mb-4">Three Campaign Phases</h2>
          <div className="space-y-4">
            <div className="bg-abyss-light border border-border-subtle p-5">
              <h3 className="font-display text-base font-semibold text-tactical-blue mb-2">Early Game (Nodes 1-8)</h3>
              <p className="text-sm text-text-secondary">Prioritize Battle Nodes for gold and basic equipment. Build your core army. Avoid risky optional encounters.</p>
            </div>
            <div className="bg-abyss-light border border-border-subtle p-5">
              <h3 className="font-display text-base font-semibold text-warning-orange mb-2">Mid Game (Nodes 9-16)</h3>
              <p className="text-sm text-text-secondary">Shop at key upgrade points. Fill roster gaps with faction-specific units. Start building synergies.</p>
            </div>
            <div className="bg-abyss-light border border-border-subtle p-5">
              <h3 className="font-display text-base font-semibold text-terminal-red mb-2">Late Game (Nodes 17-24)</h3>
              <p className="text-sm text-text-secondary">Prepare for the final boss. Complete your build. Rest before the boss. Prioritize survival over greed.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="font-display text-xl font-semibold text-text-primary mb-4">FAQ</h2>
          <div className="bg-abyss-light border border-border-subtle p-4 space-y-2">
            <details>
              <summary className="text-sm font-semibold text-text-primary cursor-pointer hover:text-tactical-blue">How many nodes are in a campaign run?</summary>
              <p className="text-sm text-text-secondary mt-2 pl-4 border-l-2 border-border-subtle">A full campaign run typically consists of 18-24 nodes across three acts, ending with a final boss encounter.</p>
            </details>
            <details>
              <summary className="text-sm font-semibold text-text-primary cursor-pointer hover:text-tactical-blue">Should I always take the hardest path?</summary>
              <p className="text-sm text-text-secondary mt-2 pl-4 border-l-2 border-border-subtle">Only if your army is strong. Difficulty scales with rewards — harder nodes drop better loot but risk more unit losses. Balance risk vs. reward based on current army strength.</p>
            </details>
          </div>
        </section>

        <p className="text-xs text-text-muted font-mono text-center">Campaign strategy based on Steam store info &amp; community gameplay. Unofficial fan site.</p>
      </div>
    </div>
  );
}
