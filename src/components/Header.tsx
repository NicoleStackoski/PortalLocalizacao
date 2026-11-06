import React from 'react';

interface HeaderProps {
  onResetFilter?: () => void;
}

export function Header({ onResetFilter }: HeaderProps) {
  return (
    <header className="w-full max-w-7xl mx-auto pt-4 sm:pt-6 md:pt-8 pb-3 sm:pb-6 px-3.5 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-6">
      <button 
        onClick={onResetFilter}
        className="flex items-center text-left group transition-transform active:scale-[0.98] focus:outline-none min-w-0"
        title="Voltar ao início"
      >
        <span 
          className="w-1 sm:w-1.5 h-6 sm:h-8 md:h-9 bg-[#c5192d] rounded-full mr-2.5 sm:mr-3.5 shrink-0 transition-all duration-300 group-hover:bg-[#e31b23] shadow-[0_0_12px_rgba(197,25,45,0.4)]" 
          aria-hidden="true" 
        />
        <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-light tracking-[0.14em] sm:tracking-[0.18em] text-white uppercase select-none truncate">
          LOCALIZAÇÕES
        </h1>
      </button>

      <div className="shrink-0 flex items-center">
        <a 
          href="https://www.mymohawkbr.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block group transition-opacity hover:opacity-90 focus:outline-none"
          title="Ir para MyMohawk Brasil (mymohawkbr.com)"
        >
          <img
            src="/assets/aistudio/logoMohawk_8d386cf1.png"
            alt="Mohawk Brasil"
            className="h-10 xs:h-12 sm:h-16 md:h-20 max-w-[130px] sm:max-w-none w-auto object-contain filter drop-shadow-[0_3px_12px_rgba(0,0,0,0.45)] transition-transform duration-200 hover:scale-105"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent && !parent.querySelector('.logo-fallback')) {
                const fb = document.createElement('div');
                fb.className = 'logo-fallback text-right text-white font-serif tracking-widest text-sm uppercase';
                fb.innerHTML = '<div class="text-[#c5192d] font-bold text-xs tracking-normal">▲▲▲</div>MOHAWK<span class="block text-[9px] tracking-normal opacity-80">BRASIL</span>';
                parent.appendChild(fb);
              }
            }}
          />
        </a>
      </div>
    </header>
  );
}
