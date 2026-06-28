export const metadata = {
  title: "Tabletop Tavern Frequently Asked Questions — Complete Guide (2026)",
  description:
    "{faq.a}",
};

export default function FaqPage() {
  const faqs = [
    { q: 'Is Tabletop Tavern a roguelike?', a: 'Yes. Tabletop Tavern is a roguelike RTS where each campaign run is procedurally generated with random encounters, map layouts, and item drops. Every run is unique.' },
    { q: 'How many factions are there?', a: 'Five factions: Vikings, Orcs, Elves, Humans, and Dwarves. Each has a distinct playstyle and unit roster.' },
    { q: 'Is there multiplayer?', a: 'Tabletop Tavern is primarily a single-player roguelike RTS on Steam. Check the Steam store page for the latest multiplayer status.' },
    { q: 'When was the game released?', a: 'Tabletop Tavern was released on June 11, 2026 by developer TJ, published by Frostbloom and Gamirror Games. It has earned Very Positive reviews on Steam.' },
    { q: 'Do achievements carry over between runs?', a: 'The game features 25 Steam achievements. Roguelike permanent unlocks are tied to achievement progress rather than individual run completion.' },
  ];

  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-text-primary mb-6">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-abyss-light border border-border-subtle p-5">
              <h2 className="text-sm font-semibold text-text-primary mb-2">{faq.q}</h2>
              <p className="text-sm text-text-secondary leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-text-muted font-mono text-center mt-8">
          Information based on Steam store page. Unofficial fan site. Updated June 2026.
        </p>
      </div>
    </div>
  );
}
