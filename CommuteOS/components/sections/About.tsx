export function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.2em] text-[#666] mb-4">
            Startup Vision
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
            Building the operating system for corporate mobility.
          </h2>

          <p className="mt-8 text-lg text-[#888] leading-relaxed">
            CommuteOS started as a smart mobility startup idea focused on solving
            employee commute inefficiencies in growing urban tech hubs.
            The platform uses intelligent ride grouping, transport analytics,
            and real-time commute coordination to reduce traffic congestion,
            lower company transportation costs, and improve employee experience.
          </p>

          <p className="mt-6 text-lg text-[#888] leading-relaxed">
            The long-term vision is to create a city-scale mobility intelligence
            network that connects employees, companies, transport providers,
            and sustainable transit systems through AI-driven optimization.
          </p>
        </div>

        <div className="mt-24">
          <h3 className="text-3xl font-semibold text-white mb-10">
            Product Workflow
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#111111] border border-[#222] rounded-2xl p-6">
              <div className="text-white text-2xl font-bold mb-4">01</div>

              <h4 className="text-white text-lg font-semibold mb-3">
                Employee Registration
              </h4>

              <p className="text-[#777] leading-relaxed">
                Employees submit locality, office location,
                and preferred transport method.
              </p>
            </div>

            <div className="bg-[#111111] border border-[#222] rounded-2xl p-6">
              <div className="text-white text-2xl font-bold mb-4">02</div>

              <h4 className="text-white text-lg font-semibold mb-3">
                AI Ride Matching
              </h4>

              <p className="text-[#777] leading-relaxed">
                The backend groups employees based on
                location proximity and commute patterns.
              </p>
            </div>

            <div className="bg-[#111111] border border-[#222] rounded-2xl p-6">
              <div className="text-white text-2xl font-bold mb-4">03</div>

              <h4 className="text-white text-lg font-semibold mb-3">
                Smart Recommendations
              </h4>

              <p className="text-[#777] leading-relaxed">
                CommuteOS suggests optimal ride types
                like carpool, metro, or shuttle systems.
              </p>
            </div>

            <div className="bg-[#111111] border border-[#222] rounded-2xl p-6">
              <div className="text-white text-2xl font-bold mb-4">04</div>

              <h4 className="text-white text-lg font-semibold mb-3">
                Analytics Dashboard
              </h4>

              <p className="text-[#777] leading-relaxed">
                Companies monitor sustainability impact,
                transport efficiency, and employee mobility.
              </p>
            </div>
          </div>
        </div>


        <div className="mt-24 bg-[#111111] border border-[#222] rounded-3xl p-10">
          <h3 className="text-3xl font-semibold text-white mb-6">
            Future Expansion
          </h3>

          <p className="text-[#888] text-lg leading-relaxed">
            Future versions of CommuteOS will integrate real-time GPS tracking,
            Google Maps APIs, AI-based route optimization, ride scheduling,
            corporate subscriptions, ESG reporting, and predictive traffic analysis.
            The goal is to evolve from an employee commute platform into a
            scalable urban mobility ecosystem for enterprises and smart cities.
          </p>
        </div>
      </div>
    </section>
  );
}