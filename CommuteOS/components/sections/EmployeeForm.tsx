"use client";

import { useState } from "react";

export default function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: "",
    locality: "",
    office: "",
    preferredTransport: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        "https://commuteos-backend.onrender.com/api/employees",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      console.log(data);

      alert("Employee Added Successfully");

      setFormData({
        name: "",
        locality: "",
        office: "",
        preferredTransport: "",
      });

      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="employee-form" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#111111] border border-[#222] rounded-3xl p-8">
          <h2 className="text-4xl font-bold text-white mb-3">
            Add Employee
          </h2>

          <p className="text-gray-400 mb-8">
            Register employees for AI-powered commute matching
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Employee Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#0a0a0a] border border-[#222] rounded-xl px-4 py-4 text-white outline-none focus:border-white transition"
              required
            />

            <input
              type="text"
              name="locality"
              placeholder="Locality"
              value={formData.locality}
              onChange={handleChange}
              className="w-full bg-[#0a0a0a] border border-[#222] rounded-xl px-4 py-4 text-white outline-none focus:border-white transition"
              required
            />

            <input
              type="text"
              name="office"
              placeholder="Office Location"
              value={formData.office}
              onChange={handleChange}
              className="w-full bg-[#0a0a0a] border border-[#222] rounded-xl px-4 py-4 text-white outline-none focus:border-white transition"
              required
            />

            <select
              name="preferredTransport"
              value={formData.preferredTransport}
              onChange={handleChange}
              className="w-full bg-[#0a0a0a] border border-[#222] rounded-xl px-4 py-4 text-white outline-none focus:border-white transition"
              required
            >
              <option value="">Preferred Transport</option>
              <option value="Carpool">Carpool</option>
              <option value="Metro">Metro</option>
              <option value="Shuttle">Shuttle</option>
              <option value="Bike">Bike</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:opacity-90 transition"
            >
              {loading ? "Adding Employee..." : "Add Employee"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}