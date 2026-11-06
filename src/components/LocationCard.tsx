import React, { useState } from 'react';
import { LocationItem } from '../data/locations';
import { FineLocationPin, FineArrow } from './Icons';
import { Copy, Check, Info } from 'lucide-react';

interface LocationCardProps {
  location: LocationItem;
  showAddressAlways?: boolean;
  onCopyAddress: (address: string, name: string) => void;
  onOpenDetails: (location: LocationItem) => void;
  isCopied: boolean;
}

export function LocationCard({
  location,
  showAddressAlways = true,
  onCopyAddress,
  onOpenDetails,
  isCopied,
}: LocationCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    onCopyAddress(location.address, location.name);
  };

  const handleOpenMaps = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(location.googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onCopyAddress(location.address, location.name);
        }
      }}
      className={`group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-[#f4f5f7] hover:bg-[#eaecee] transition-all duration-200 border border-slate-200/50 hover:border-slate-300 shadow-[0_2px_4px_rgba(0,0,0,0.03)] hover:shadow-md cursor-pointer select-none text-left focus:outline-none focus:ring-2 focus:ring-[#c5192d]/40 ${
        isCopied ? 'ring-2 ring-emerald-500/80 bg-emerald-50/40' : ''
      }`}
      title="Clique para copiar o endereço completo"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <h3 className="font-bold text-[#1f242d] text-xs sm:text-[14px] uppercase tracking-wide leading-snug group-hover:text-black transition-colors">
            {location.name}
          </h3>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            onClick={handleOpenMaps}
            className="min-w-[38px] min-h-[38px] p-2 rounded-xl text-[#c5192d] hover:bg-red-100/70 active:scale-90 transition-all flex items-center justify-center group/btn"
            title="Abrir rota no Google Maps"
            aria-label={`Abrir ${location.name} no Google Maps`}
          >
            <FineLocationPin className="w-5 h-5 text-[#c5192d] group-hover/btn:scale-110 transition-transform" strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={handleOpenMaps}
            className="min-w-[38px] min-h-[38px] p-2 rounded-xl text-[#c5192d] hover:bg-red-100/70 active:scale-90 transition-all flex items-center justify-center group/btn"
            title="Ir para o Google Maps"
            aria-label={`Abrir no Google Maps`}
          >
            <FineArrow className="w-5 h-5 text-[#c5192d] group-hover/btn:translate-x-0.5 transition-transform" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {showAddressAlways && (
        <div className="mt-2.5 pt-2 border-t border-slate-200/70 flex items-start justify-between gap-2">
          <p className="text-[12px] sm:text-[12.5px] font-normal text-slate-600 leading-relaxed tracking-normal line-clamp-2">
            {location.address}
          </p>
          
          <div className="shrink-0 pt-0.5">
            {isCopied ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-100/80 px-2 py-0.5 rounded-md animate-in fade-in">
                <Check className="w-3 h-3" />
                Copiado!
              </span>
            ) : (
              <span 
                className="inline-flex items-center gap-1 text-[11px] text-slate-400 group-hover:text-[#c5192d] transition-colors"
                title="Clique para copiar"
              >
                <Copy className="w-3.5 h-3.5" />
              </span>
            )}
          </div>
        </div>
      )}

      <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
        <span className="group-hover:text-slate-600 transition-colors">
          {isCopied ? '✓ Copiado para a área de transferência' : 'Clique no card para copiar'}
        </span>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetails(location);
          }}
          className="text-slate-500 hover:text-slate-800 active:text-slate-950 flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-slate-200/60 active:bg-slate-200 transition-colors min-h-[30px]"
          title="Ver rotas, Waze e QR Code"
        >
          <Info className="w-3.5 h-3.5 text-slate-500" />
          <span>Detalhes</span>
        </button>
      </div>
    </div>
  );
}
