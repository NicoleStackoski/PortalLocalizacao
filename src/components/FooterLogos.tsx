import React from 'react';

export function FooterLogos() {
  return (
    <footer className="w-full max-w-7xl mx-auto pt-6 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-4 text-center">
      <div className="w-full max-w-5xl flex items-center justify-center px-3 sm:px-6">
        <a 
          href="https://www.mymohawkbr.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform hover:scale-[1.02] focus:outline-none"
          title="Acessar MyMohawk Brasil (mymohawkbr.com)"
        >
          <img
            src="/assets/aistudio/logos_b9df21b5.png"
            alt="Marcas Mohawk Brasil: Eliane, Decortiles, Elizabeth, Mohawk Brasil"
            className="max-h-11 xs:max-h-14 sm:max-h-20 md:max-h-24 max-w-full w-auto object-contain filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)] opacity-95 hover:opacity-100 transition-opacity"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent && !parent.querySelector('.logos-fallback')) {
                const fb = document.createElement('div');
                fb.className = 'logos-fallback flex items-center justify-center gap-6 text-white/90 text-sm font-semibold tracking-wider';
                fb.innerHTML = '<span>eliane</span><span>DECORTILES</span><span>Elizabeth</span><span class="border-l border-white/40 pl-6">MOHAWK BRASIL</span>';
                parent.appendChild(fb);
              }
            }}
          />
        </a>
      </div>

      <div className="text-white/40 text-xs tracking-wider flex items-center justify-center gap-2 mt-1">
        <span>Mohawk Brasil</span>
        <span aria-hidden="true">·</span>
        <span>Rede Integrada de Logística &amp; Expedições</span>
      </div>
    </footer>
  );
}
