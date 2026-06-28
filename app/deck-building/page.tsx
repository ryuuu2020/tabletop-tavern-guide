export const metadata = {
  title: "Tabletop Tavern Deck Building Guide — Best Decks (2026)",
  description: "Complete deck building guide for Tabletop Tavern. Best deck archetypes, card synergies, and how to build winning decks.",
};

export default function DeckBuildingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">Tabletop Tavern Deck Building Guide</h1>
      <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-amber-400 mb-3">Deck Archetypes</h2>
            <p className="text-gray-300 leading-relaxed">Tabletop Tavern features three primary deck archetypes: Aggro (fast, low-cost cards that overwhelm opponents before they set up), Control (high-value removal and card draw to outlast opponents), and Combo (assembling specific card combinations for instant-win conditions). Each archetype has different strengths and weaknesses based on the game's current meta.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-amber-400 mb-3">Card Rarity & Synergy</h2>
            <p className="text-gray-300 leading-relaxed">Rare and Epic cards often define a deck's win condition, but Common cards provide the consistency to reliably draw your key pieces. A well-constructed deck runs 12-15 Common cards as the core package, 6-8 Uncommon for flexibility, and 4-6 Rare/Epic as finishers.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-amber-400 mb-3">Resource Curve</h2>
            <p className="text-gray-300 leading-relaxed">Every deck needs a resource curve — cards costing 1-2 resources for early plays, 3-4 for mid-game pressure, and 5-7 for game-ending threats. A curve-less deck either floods on expensive cards while being dominated early, or runs out of impact in the late game.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-amber-400 mb-3">Sideboard Strategy</h2>
            <p className="text-gray-300 leading-relaxed">Build a 10-card sideboard for adapting to specific opponents. Include 2-3 cards that counter the most popular meta decks, 2-3 general-purpose answers (removal, healing), and 2-3 accelerants for slower matchups. Swap 3-5 cards between games based on what you learned in Game 1.</p>
          </section>
        <section>
          <h2 className="text-xl font-bold text-amber-400 mb-3">FAQ</h2>
          <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-semibold text-white">What should I know about deck archetypes in Tabletop Tavern?</h3>
                <p className="text-gray-300 leading-relaxed">Tabletop Tavern features three primary deck archetypes: Aggro (fast, low-cost cards that overwhelm opponents before they set up), Control (high-value removal and card draw to outlast opponents), and C...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about card rarity & synergy in Tabletop Tavern?</h3>
                <p className="text-gray-300 leading-relaxed">Rare and Epic cards often define a deck's win condition, but Common cards provide the consistency to reliably draw your key pieces. A well-constructed deck runs 12-15 Common cards as the core package,...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about resource curve in Tabletop Tavern?</h3>
                <p className="text-gray-300 leading-relaxed">Every deck needs a resource curve — cards costing 1-2 resources for early plays, 3-4 for mid-game pressure, and 5-7 for game-ending threats. A curve-less deck either floods on expensive cards while be...</p>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}
