import React, { useState, useMemo } from 'react';
import { LOCATIONS_DATA, LocationItem } from './data/locations';
import { Header } from './components/Header';
import { FooterLogos } from './components/FooterLogos';
import { LocationCard } from './components/LocationCard';
import { LocationModal } from './components/LocationModal';
import { Search, MapPin, Check, Layers } from 'lucide-react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddressAlways, setShowAddressAlways] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeModalLocation, setActiveModalLocation] = useState<LocationItem | null>(null);

  const filteredLocations = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return LOCATIONS_DATA;

    return LOCATIONS_DATA.filter((loc) => {
      return (
        loc.name.toLowerCase().includes(term) ||
        loc.address.toLowerCase().includes(term) ||
        loc.city.toLowerCase().includes(term) ||
        loc.cep.toLowerCase().includes(term) ||
        loc.stateName.toLowerCase().includes(term) ||
        loc.state.toLowerCase().includes(term)
      );
    });
  }, [searchTerm]);

  const handleCopyAddress = (address: string, name: string) => {
    navigator.clipboard
      .writeText(address)
      .then(() => {
        setCopiedId(address);
        setToastMessage(`Endereço copiado: ${name}`);
        setTimeout(() => {
          setCopiedId(null);
        }, 2500);
        setTimeout(() => {
          setToastMessage(null);
        }, 3000);
      })
      .catch(() => {
        const textArea = document.createElement('textarea');
        textArea.value = address;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopiedId(address);
        setToastMessage(`Endereço copiado: ${name}`);
        setTimeout(() => setCopiedId(null), 2500);
        setTimeout(() => setToastMessage(null), 3000);
      });
  };

  return (
    <div className="min-h-screen relative flex flex-col justify-between selection:bg-[#c5192d] selection:text-white bg-[#484a4e] overflow-x-hidden font-sans">
      <div 
        className="fixed inset-0 pointer-events-none z-0" 
        style={{
          background: 'linear-gradient(172deg, #484a4e 0%, #525356 22%, #5e575b 45%, #6a5358 65%, #724b4d 85%, #754345 100%)'
        }}
      />

      <div className="relative z-10 w-full flex-1 flex flex-col justify-start">
        <Header 
          onResetFilter={() => {
            setSearchTerm('');
          }} 
        />

        <main className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-6 flex-1 flex flex-col justify-center">
          <div className="bg-white rounded-2xl sm:rounded-3xl lg:rounded-[36px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.55)] p-3.5 sm:p-7 md:p-9 lg:p-12 transition-all">
            
            <div className="mb-4 sm:mb-6 pb-4 sm:pb-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <div className="relative w-full sm:flex-1 sm:max-w-md md:max-w-lg">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Pesquisar por expedição, cidade, rodovia ou CEP..."
                  className="w-full pl-10 pr-9 py-2.5 sm:py-2 text-sm sm:text-xs md:text-sm bg-[#f4f5f7] hover:bg-[#eaecee] focus:bg-white text-slate-900 placeholder:text-slate-400 rounded-xl sm:rounded-2xl border border-transparent focus:border-[#c5192d]/50 focus:outline-none transition-all"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full text-xs text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
                    title="Limpar pesquisa"
                  >
                    ✕
                  </button>
                )}
              </div>

              <button
                type="button"
                onClick={() => setShowAddressAlways(!showAddressAlways)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 text-xs font-semibold text-slate-600 bg-[#f4f5f7] hover:bg-[#eaecee] active:bg-slate-200 rounded-xl sm:rounded-2xl transition-colors shrink-0"
                title="Alternar exibição dos endereços nos cards"
              >
                <Layers className="w-3.5 h-3.5 text-slate-500" />
                <span>{showAddressAlways ? 'Endereços Visíveis' : 'Modo Compacto'}</span>
              </button>
            </div>

            <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-[11px] sm:text-xs text-slate-500 leading-normal">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c5192d] shrink-0" />
                <span className="font-medium text-slate-700">
                  Toque no card para copiar o endereço
                </span>
              </div>
              <div className="flex items-center gap-2 pl-4 sm:pl-0">
                <span className="hidden sm:inline text-slate-300">·</span>
                <span>
                  Toque no ícone de localização para abrir rota no Google Maps
                </span>
              </div>
            </div>

            {filteredLocations.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
                {filteredLocations.map((location) => (
                  <LocationCard
                    key={location.id}
                    location={location}
                    showAddressAlways={showAddressAlways}
                    onCopyAddress={handleCopyAddress}
                    onOpenDetails={(loc) => setActiveModalLocation(loc)}
                    isCopied={copiedId === location.address}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-10 px-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                <MapPin className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <h3 className="text-slate-800 font-bold text-base">Nenhuma localização encontrada</h3>
                <p className="text-slate-500 text-xs mt-1">
                  Não encontramos resultados para "{searchTerm}". Tente outro termo de busca.
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-3 px-4 py-2 bg-[#c5192d] text-white text-xs font-bold rounded-xl hover:bg-[#b01326] transition-colors"
                >
                  Limpar Pesquisa
                </button>
              </div>
            )}
          </div>
        </main>
      </div>

      <FooterLogos />

      {toastMessage && (
        <div 
          role="status"
          className="fixed bottom-4 sm:bottom-6 left-3 right-3 sm:left-auto sm:right-6 z-50 flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-3.5 bg-slate-900/95 text-white rounded-2xl shadow-2xl border border-slate-800 backdrop-blur-md animate-in slide-in-from-bottom-5 duration-300 text-xs sm:text-sm font-medium max-w-sm sm:max-w-md sm:ml-auto"
        >
          <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
            <Check className="w-4 h-4 stroke-[2.5]" />
          </div>
          <div className="min-w-0">
            <p className="font-bold text-white text-xs truncate">{toastMessage}</p>
            <p className="text-[11px] text-slate-300">Copiado para a área de transferência! Pronto para colar.</p>
          </div>
        </div>
      )}

      <LocationModal
        location={activeModalLocation}
        onClose={() => setActiveModalLocation(null)}
        onCopyAddress={handleCopyAddress}
        isCopied={copiedId === activeModalLocation?.address}
      />
    </div>
  );
}
