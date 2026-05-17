import { Navbar }             from "@/components/sections/Navbar";
import { Hero }               from "@/components/sections/Hero";
import { Stats }              from "@/components/sections/Stats";
import { Features }           from "@/components/sections/Features";
import { Dashboard }          from "@/components/sections/Dashboard";
import { EmployeeExperience } from "@/components/sections/EmployeeExperience";
import { Sustainability }     from "@/components/sections/Sustainability";
import { CTA }                from "@/components/sections/CTA";
import { Footer }             from "@/components/sections/Footer";
import { SectionDivider }     from "@/components/sections/Divider";
import RideGroups from "@/components/sections/RideGroups";
import EmployeeForm from "@/components/sections/EmployeeForm";
import {About} from "@/components/sections/About";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <SectionDivider />
      <Stats />
      <About />
      <SectionDivider />
      <Features />
      <RideGroups />
      <Dashboard />
      <EmployeeExperience />
      <Sustainability />
      <EmployeeForm />
      <CTA />
      <Footer />
    </main>
  );
}
