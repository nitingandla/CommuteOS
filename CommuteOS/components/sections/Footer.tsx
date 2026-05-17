import React from "react";

const links = {
  Product: ["Features"],
  Solutions: ["Enterprise"],
  Company: ["About"],
  Legal: ["Privacy Policy", "Terms of Service", "Security"],
};

export function Footer() {
  return (
    <footer className="border-t border-[#161616] bg-[#080808]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-10">
       
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-white flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="4" cy="8" r="2.5" fill="#0a0a0a" />
                  <circle cx="12" cy="8" r="2.5" fill="#0a0a0a" />
                  <path d="M6.5 8 H9.5" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M8 5.5 V2" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M8 14 V10.5" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-semibold text-[#f0f0f0] text-sm tracking-tight">CommuteOS</span>
            </a>
            <p className="mt-4 text-xs text-[#444] leading-relaxed max-w-[180px]">
              AI-powered corporate mobility for modern enterprises.
            </p>
            
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <div className="text-xs font-medium text-[#555] mb-4 tracking-wide uppercase">
                {category}
              </div>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-xs text-[#3a3a3a] hover:text-[#888] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-[#161616] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#333]">
            © 2026 CommuteOS
          </p>
          <p className="text-xs text-[#2a2a2a]">
            Built for enterprise mobility operations at scale.
          </p>
        </div>
      </div>
    </footer>
  );
}
