"use client";

import { useEffect, useState } from "react";

export default function RideGroups() {
  const [rideData, setRideData] = useState<any>(null);

  useEffect(() => {
    fetch("https://commuteos-backend.onrender.com/api/employees")
      .then((res) => res.json())
      .then((data) => {
        setRideData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!rideData) {
    return (
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <p className="text-center text-gray-400 text-lg">
          Loading ride groups...
        </p>
      </section>
    );
  }

  return (
    <section
      id="ride-groups"
      className="py-24 px-6 bg-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Live Ride Groups
        </h2>

        <p className="text-gray-400 mb-12">
          AI-powered commute clustering based on locality,
          office destination, and preferred transport.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {rideData.data.map((employee: any) => (
            <div
              key={employee.id}
              className="bg-[#111111] border border-[#222] rounded-2xl p-6 hover:border-[#333] transition"
            >
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {employee.office}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {employee.locality}
                  </p>
                </div>

                <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm">
                  {employee.preferredTransport}
                </span>
              </div>

              <div className="border border-[#222] rounded-xl p-4 bg-[#0d0d0d]">
                <p className="text-white font-medium text-lg">
                  {employee.name}
                </p>

                <p className="text-sm text-gray-400 mt-1">
                  Route: {employee.locality} → {employee.office}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}