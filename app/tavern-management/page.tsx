export const metadata = {
  title: "Tabletop Tavern Management Guide — Build the Perfect Tavern (2026)",
  description: "Complete tavern management guide. Best tavern upgrades, staff management, and how to maximize customer satisfaction.",
};

export default function TavernManagementPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">Tabletop Tavern Management Guide</h1>
      <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-amber-400 mb-3">Tavern Layout Basics</h2>
            <p className="text-gray-300 leading-relaxed">Your tavern layout affects customer flow and satisfaction. Place high-demand tables (for 4+ players) near the entrance for quick access. Keep the bar stocked — running out of drinks causes customer satisfaction to drop 15 points instantly. Separate noisy card game tables from quiet board game areas to prevent satisfaction penalties.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-amber-400 mb-3">Staff Management</h2>
            <p className="text-gray-300 leading-relaxed">Hire staff based on peak hours. A 20-seat tavern needs: 1 bartender (always), 1-2 servers during peak (evening), and 1 game master for organized events. Staff happiness affects service speed — underpaid or overworked staff reduce service speed by 30%.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-amber-400 mb-3">Upgrade Priorities</h2>
            <p className="text-gray-300 leading-relaxed">Priority 1: Bar expansion (increases drink variety and price points). Priority 2: Table quality upgrades (reduces complaining, increases time-at-table). Priority 3: Event stage (unlocks tournaments which attract premium customers). Priority 4: Kitchen (food pairs with drinks for a 25% revenue bonus per table).</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-amber-400 mb-3">Customer Satisfaction</h2>
            <p className="text-gray-300 leading-relaxed">Track four satisfaction metrics: Speed (time from seating to service), Quality (drink and game quality), Atmosphere (noise, lighting, decor), and Price (value perception). A satisfaction score above 80% triggers word-of-mouth referrals, which add 10-15% daily customers without advertising spend.</p>
          </section>
        <section>
          <h2 className="text-xl font-bold text-amber-400 mb-3">FAQ</h2>
          <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-semibold text-white">What should I know about tavern layout basics in Tabletop Tavern?</h3>
                <p className="text-gray-300 leading-relaxed">Your tavern layout affects customer flow and satisfaction. Place high-demand tables (for 4+ players) near the entrance for quick access. Keep the bar stocked — running out of drinks causes customer sa...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about staff management in Tabletop Tavern?</h3>
                <p className="text-gray-300 leading-relaxed">Hire staff based on peak hours. A 20-seat tavern needs: 1 bartender (always), 1-2 servers during peak (evening), and 1 game master for organized events. Staff happiness affects service speed — underpa...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about upgrade priorities in Tabletop Tavern?</h3>
                <p className="text-gray-300 leading-relaxed">Priority 1: Bar expansion (increases drink variety and price points). Priority 2: Table quality upgrades (reduces complaining, increases time-at-table). Priority 3: Event stage (unlocks tournaments wh...</p>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}
