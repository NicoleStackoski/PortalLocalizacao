import React, { useEffect, useState } from 'react';
import { LocationItem } from '../data/locations';
import { FineLocationPin, FineArrow } from './Icons';
import { Copy, Check, ExternalLink, Navigation, Share2, X, QrCode } from 'lucide-react';

interface LocationModalProps {
  location: LocationItem | null;
  onClose: () => void;
  onCopyAddress: (address: string, name: string) => void;
  isCopied: boolean;
}

export function LocationModal({ location, onClose, onCopyAddress, isCopied }: LocationModalProps) {
  const [showQr, setShowQr] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!location) return null;

  const shareText = `*${location.name}*\n📍 ${location.address}\n\nGoogle Maps: ${location.googleMapsUrl}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(location.googleMapsUrl)}`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white text-slate-900 rounded-2xl sm:rounded-3xl max-w-xl w-full p-4.5 sm:p-6 md:p-8 shadow-2xl relative border border-slate-100 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 active:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none min-w-[36px] min-h-[36px] flex items-center justify-center"
          title="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-start gap-3.5 pr-8 mb-5">
          <div className="w-10 h-10 rounded-2xl bg-red-50 text-[#c5192d] flex items-center justify-center shrink-0">
            <FineLocationPin className="w-6 h-6 text-[#c5192d]" strokeWidth={1.8} />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#c5192d]">
              {location.stateName} ({location.state}) · {location.type}
            </span>
            <h2 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-slate-900 mt-0.5">
              {location.name}
            </h2>
          </div>
        </div>

        <div className="bg-[#f5f6f8] rounded-2xl p-4 sm:p-5 border border-slate-200/60 mb-6">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5 font-medium">
            <span>Endereço Completo:</span>
            <span className="text-xs text-[#c5192d] font-semibold">Clique para copiar</span>
          </div>

          <div 
            onClick={() => onCopyAddress(location.address, location.name)}
            className="text-slate-800 text-sm sm:text-base font-semibold leading-relaxed cursor-pointer p-3 rounded-xl bg-white border border-slate-200/80 hover:border-[#c5192d]/50 hover:shadow-xs transition-all flex items-start justify-between gap-3 group"
            title="Copiar endereço"
          >
            <p className="select-all">{location.address}</p>
            <button
              className={`shrink-0 p-2 rounded-lg font-medium text-xs flex items-center gap-1 transition-all ${
                isCopied 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-slate-100 group-hover:bg-[#c5192d] group-hover:text-white text-slate-700'
              }`}
            >
              {isCopied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>
        </div>

        {showQr && (
          <div className="mb-6 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center animate-in fade-in duration-150">
            <p className="text-xs text-slate-600 mb-2 font-medium">
              Aponte a câmera do celular para abrir o GPS no Google Maps:
            </p>
            <img 
              src={qrUrl} 
              alt="QR Code de navegação" 
              className="mx-auto w-40 h-40 rounded-lg shadow-sm border border-slate-200 bg-white p-2" 
            />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <a
            href={location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 px-4 py-3 bg-[#c5192d] hover:bg-[#b01326] text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg text-sm"
          >
            <FineLocationPin className="w-5 h-5 text-white" strokeWidth={1.8} />
            <span>Abrir no Google Maps</span>
            <ExternalLink className="w-4 h-4 opacity-75" />
          </a>

          <a
            href={location.wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all text-sm"
          >
            <Navigation className="w-4 h-4 text-cyan-400" />
            <span>Navegar via Waze</span>
            <ExternalLink className="w-4 h-4 opacity-75" />
          </a>
        </div>

        <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs text-slate-600">
          <button
            onClick={() => setShowQr(!showQr)}
            className="flex items-center gap-1.5 hover:text-slate-900 font-medium py-1 px-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <QrCode className="w-4 h-4 text-slate-600" />
            <span>{showQr ? 'Ocultar QR Code' : 'Ver QR Code no Celular'}</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-emerald-700 text-emerald-600 font-semibold py-1 px-2 rounded-lg hover:bg-emerald-50 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span>Compartilhar Localização</span>
          </a>
        </div>
      </div>
    </div>
  );
}
