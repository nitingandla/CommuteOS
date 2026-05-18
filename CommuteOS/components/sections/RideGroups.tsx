"use client";

import { useEffect, useState } from "react";

export default function RideGroups() {
  const [rideData, setRideData] = useState<any>(null);

  useEffect(() => {
    fetch("https://commuteos-backend.onrender.com/api/rides/groups")
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
      <section className="py-24 px-6">
        <p className="text-center text-gray-400">
          Loading ride groups...
        </p>
      </section>
    );
  }

  return (
    <section id="ride-groups" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-white">
          Live Ride Groups
        </h2>

        <div className="grid gap-6">
          {Object.entries(rideData.rideGroups).map(
            ([groupName, group]: any) => (
              <div
                key={groupName}
                className="bg-[#111111] border border-[#222] rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {groupName}
                  </h3>

                  <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm">
                    {group.recommendedRide}
                  </span>
                </div>

                <div className="space-y-3">
                  {group.employees.map((employee: any) => (
                    <div
                      key={employee.id}
                      className="flex items-center justify-between border border-[#222] rounded-xl p-4"
                    >
                      <div>
                        <p className="text-white font-medium">
                          {employee.name}
                        </p>

                        <p className="text-sm text-gray-400">
                          {employee.locality}
                        </p>
                      </div>

                      <p className="text-sm text-gray-500">
                        {employee.preferredTransport}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}