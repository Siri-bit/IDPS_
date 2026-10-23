import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, 
  Search, 
  Filter, 
  Building2, 
  Users, 
  GraduationCap, 
  Sparkles, 
  ChevronRight, 
  X, 
  CheckCircle, 
  Phone, 
  ArrowRight,
  Maximize2,
  RotateCcw
} from 'lucide-react';
import { BRANCHES, TERRITORIES, INFRA_FACILITIES, Branch, Territory } from '../data/schoolData';
import indiaStates from '../data/indiaStates.json';
import { useTheme } from '../context/ThemeContext';
import L from 'leaflet';

interface NetworkMapSectionProps {
  onOpenEnquiry: (type: 'franchise' | 'admission', targetCampus?: string) => void;
}

export const NetworkMapSection: React.FC<NetworkMapSectionProps> = ({ onOpenEnquiry }) => {
  const { theme, themeConfig } = useTheme();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const stateLayerRef = useRef<L.GeoJSON | null>(null);
  const markersRef = useRef<L.Marker[]>([]);

  const [selectedState, setSelectedState] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterType, setFilterType] = useState<string>('all');
  const [activeBranch, setActiveBranch] = useState<Branch | null>(null);
  const [activeTerritory, setActiveTerritory] = useState<Territory | null>(null);

  // Extract unique states
  const allStates = Array.from(new Set([
    ...BRANCHES.map(b => b.state),
    ...TERRITORIES.map(t => t.state)
  ])).sort();

  // Filtered branches and territories
  const filteredBranches = BRANCHES.filter(b => {
    const matchesState = selectedState === 'all' || b.state === selectedState;
    const matchesSearch = searchTerm === '' || 
      b.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      b.city.toLowerCase().includes(searchTerm.toLowerCase()) || 
      b.state.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || 
      (filterType === 'head' && b.type === 'Head Branch') ||
      (filterType === 'senior' && b.type === 'Senior Sec.') ||
      (filterType === 'secondary' && b.type === 'Secondary') ||
      (filterType === 'franchise' && b.type === 'Franchise');
    return matchesState && matchesSearch && matchesType;
  });

  const filteredTerritories = filterType === 'all' || filterType === 'territories' 
    ? TERRITORIES.filter(t => {
        const matchesState = selectedState === 'all' || t.state === selectedState;
        const matchesSearch = searchTerm === '' || 
          t.city.toLowerCase().includes(searchTerm.toLowerCase()) || 
          t.state.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesState && matchesSearch;
      })
    : [];

  // Initialize Map with custom India GeoJSON vector boundaries (NO tileLayer, NO watermarks!)
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [22.8, 79.5],
        zoom: 4.5,
        minZoom: 3.5,
        maxZoom: 10,
        scrollWheelZoom: false,
        attributionControl: false,
        zoomControl: true,
      });

      mapInstanceRef.current = map;
    }

    const map = mapInstanceRef.current;

    // Helper counts for state shading based on current theme
    const cnt = (s: string) => BRANCHES.filter(b => b.state === s).length;
    const tcnt = (s: string) => TERRITORIES.filter(t => t.state === s).length;
    
    const getShade = (n: number) => {
      return n >= 5 ? "#0B1D38" : 
             n >= 3 ? "#133568" : 
             n >= 2 ? "#1D4ED8" : 
             n >= 1 ? "#60A5FA" : "#ffffff";
    };

    // Clear previous stateLayer
    if (stateLayerRef.current) {
      stateLayerRef.current.remove();
      stateLayerRef.current = null;
    }

    const baseStyle = (ft: any) => {
      const s = ft?.properties?.st_nm;
      const n = cnt(s);
      const t = tcnt(s);
      const isSelected = selectedState !== 'all' && selectedState === s;
      
      if (isSelected) {
        return {
          color: "#d97706",
          weight: 2.5,
          fillColor: "#fef08a",
          fillOpacity: 1
        };
      }

      return {
        color: "#a8a29e",
        weight: 0.85,
        fillColor: n > 0 ? getShade(n) : (t > 0 ? "#fef3c7" : "#ffffff"),
        fillOpacity: 1
      };
    };

    // Render 36 Indian state vector polygons
    const stateLayer = L.geoJSON(indiaStates as any, {
      style: baseStyle,
      onEachFeature: (ft, ly) => {
        const s = ft.properties.st_nm;
        const n = cnt(s);
        const t = tcnt(s);
        
        ly.bindTooltip(
          `<b>${s}</b><br/>${n} Campus${n !== 1 ? 'es' : ''}${t ? ` · ${t} Open Franchise Territor${t !== 1 ? 'ies' : 'y'}` : ''}`, 
          { sticky: true, className: "st-tip", direction: "top", offset: [0, -8] }
        );

        ly.on("mouseover", () => {
          if (s !== selectedState) {
            (ly as any).setStyle({ fillColor: "#fef08a", weight: 2, color: "#d97706" });
            (ly as any).bringToFront();
            markersRef.current.forEach(m => m.setZIndexOffset(1000));
          }
        });

        ly.on("mouseout", () => {
          if (s !== selectedState) {
            stateLayer.resetStyle(ly);
            markersRef.current.forEach(m => m.setZIndexOffset(0));
          }
        });

        ly.on("click", () => {
          if (n > 0 || t > 0) {
            setSelectedState(s);
            try {
              map.fitBounds((ly as any).getBounds(), { padding: [30, 30], maxZoom: 8 });
            } catch {
              // fallback
            }
          }
        });
      }
    }).addTo(map);

    stateLayerRef.current = stateLayer;

    // Clear previous markers
    markersRef.current.forEach(m => m.remove());
    markersRef.current = [];

    // Add branch markers with theme colors
    filteredBranches.forEach(branch => {
      const isHead = branch.type === 'Head Branch';
      const markerColor = '#133568';
      
      const customHtml = isHead
        ? `<div class="custom-marker-head" style="background:#f59e0b; color:#0B1D38; border-color:#0B1D38;" title="${branch.name}">★</div>`
        : `<div class="custom-marker-branch" style="background:${markerColor}; color:#fef3c7; border-color:#f59e0b;" title="${branch.name}">${branch.city.slice(0, 2).toUpperCase()}</div>`;

      const icon = L.divIcon({
        html: customHtml,
        className: 'custom-leaflet-icon',
        iconSize: isHead ? [28, 28] : [22, 22],
        iconAnchor: isHead ? [14, 14] : [11, 11],
      });

      const marker = L.marker([branch.lat, branch.lng], { 
        icon, 
        zIndexOffset: isHead ? 1500 : 500 
      })
        .addTo(map)
        .bindTooltip(`<b>${branch.name}</b><br/>${branch.city}, ${branch.state}<br/>${branch.students} Students • ${branch.classes}`, {
          direction: 'top',
          className: 'st-tip'
        })
        .on('click', () => {
          setActiveBranch(branch);
          setActiveTerritory(null);
          map.setView([branch.lat, branch.lng], 8.5, { animate: true });
        });

      markersRef.current.push(marker);
    });

    // Add territory markers
    filteredTerritories.forEach(terr => {
      const customHtml = `<div class="custom-marker-territory" style="border-color:#b45309; color:#b45309;" title="Available Territory: ${terr.city}">+</div>`;

      const icon = L.divIcon({
        html: customHtml,
        className: 'custom-leaflet-icon',
        iconSize: [22, 22],
        iconAnchor: [11, 11],
      });

      const marker = L.marker([terr.lat, terr.lng], { icon, zIndexOffset: 200 })
        .addTo(map)
        .bindTooltip(`<b>Franchise Available: ${terr.city}</b><br/>${terr.state} • Format: ${terr.model}`, {
          direction: 'top',
          className: 'st-tip'
        })
        .on('click', () => {
          setActiveTerritory(terr);
          setActiveBranch(null);
          map.setView([terr.lat, terr.lng], 8.5, { animate: true });
        });

      markersRef.current.push(marker);
    });

    // Fit view according to selection
    if (selectedState === 'all') {
      try {
        map.fitBounds(stateLayer.getBounds(), { padding: [10, 10] });
        map.setMaxBounds(stateLayer.getBounds().pad(0.2));
      } catch {
        // fallback
      }
    }

  }, [filteredBranches, filteredTerritories, selectedState, theme]);

  const handleSelectBranch = (branch: Branch) => {
    setActiveBranch(branch);
    setActiveTerritory(null);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView([branch.lat, branch.lng], 8.5, { animate: true });
    }
  };

  const handleSelectTerritory = (terr: Territory) => {
    setActiveTerritory(terr);
    setActiveBranch(null);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView([terr.lat, terr.lng], 8.5, { animate: true });
    }
  };

  const resetMapZoom = () => {
    setSelectedState('all');
    setSearchTerm('');
    setFilterType('all');
    setActiveBranch(null);
    setActiveTerritory(null);
    if (mapInstanceRef.current && stateLayerRef.current) {
      mapInstanceRef.current.fitBounds(stateLayerRef.current.getBounds(), { padding: [10, 10] });
    }
  };

  return (
    <section id="network" className="py-20 bg-white relative overflow-hidden border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 text-[#6B1124] text-xs font-bold uppercase tracking-wider mb-3 border border-rose-200">
            <MapPin className="w-3.5 h-3.5 text-[#6B1124]" />
            <span>Interactive Pan-India Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-stone-900 tracking-tight">
            Explore Our 35+ Campuses &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B1124] to-amber-700 italic">
              Available Territories
            </span>
          </h2>
          <p className="mt-3 text-stone-600 text-base md:text-lg">
            Delivering the gold standard of CBSE & international education across 15 states. Click on any state or campus marker to explore strength, faculty, and infrastructure.
          </p>
        </div>

        {/* Toolbar & Filters */}
        <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 mb-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search campus, city or state..."
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#6B1124] font-medium"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* State Select */}
            <div className="w-full sm:w-auto">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                aria-label="Filter campuses by Indian state"
                className="w-full py-2 px-3 text-xs font-bold text-stone-800 bg-white rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#6B1124] cursor-pointer"
              >
                <option value="all">All States ({allStates.length} States)</option>
                {allStates.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              <button
                onClick={() => setFilterType('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer whitespace-nowrap ${
                  filterType === 'all' ? 'bg-[#133568] text-white' : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterType('senior')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer whitespace-nowrap ${
                  filterType === 'senior' ? 'bg-[#133568] text-white' : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                Senior Sec. (10+2)
              </button>
              <button
                onClick={() => setFilterType('franchise')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer whitespace-nowrap ${
                  filterType === 'franchise' ? 'bg-[#133568] text-white' : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                Franchises
              </button>
              <button
                onClick={() => setFilterType('territories')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer whitespace-nowrap ${
                  filterType === 'territories' ? 'bg-amber-700 text-white' : 'bg-white text-amber-800 border border-amber-300 hover:bg-amber-50'
                }`}
              >
                Available Territories (14)
              </button>
            </div>

            {/* Reset Map Button */}
            <button
              onClick={resetMapZoom}
              className="p-2 rounded-xl bg-white border border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
              title="Reset India Map View"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

          </div>

          {/* Map Legend */}
          <div className="flex items-center gap-4 text-xs text-stone-600 font-medium shrink-0 flex-wrap">
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-amber-400 border border-[#133568] inline-flex items-center justify-center text-[9px] font-bold text-stone-950">★</span>
              <span>HQ</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-[#133568] border border-amber-400 inline-block"></span>
              <span>Campuses ({BRANCHES.length})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-white border-2 border-dashed border-amber-700 inline-block"></span>
              <span>Franchise Available ({TERRITORIES.length})</span>
            </div>
          </div>

        </div>

        {/* Map + Campus Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Custom GeoJSON India Map (NO external tiles, clean and fast) */}
          <div className="lg:col-span-7 h-[560px] rounded-2xl overflow-hidden border border-stone-200 shadow-md relative bg-gradient-to-b from-[#fbf8f5] to-[#f2ece4]">
            <div ref={mapContainerRef} className="w-full h-full z-10" />

            {/* Interactive hint overlay */}
            <div className="absolute left-3 bottom-3 z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-[11px] font-semibold text-stone-700 shadow-sm border border-stone-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>Interactive India Vector Map · Click any state to inspect campuses</span>
            </div>
          </div>

          {/* Right Column: Campus Cards List & Detail Card */}
          <div className="lg:col-span-5 h-[560px] flex flex-col rounded-2xl border border-stone-200 bg-stone-50 overflow-hidden shadow-sm">
            
            {/* Header in side panel */}
            <div 
              style={{ backgroundColor: themeConfig.primaryBg }}
              className="p-4 text-white flex items-center justify-between"
            >
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-amber-300">
                  {selectedState === 'all' ? 'All India Network' : selectedState}
                </span>
                <div className="text-sm font-bold text-white">
                  {filteredBranches.length} Campuses Listed
                </div>
              </div>

              {(activeBranch || activeTerritory || selectedState !== 'all') && (
                <button
                  onClick={resetMapZoom}
                  className="text-xs text-stone-200 hover:text-white flex items-center gap-1 bg-white/10 px-2 py-1 rounded cursor-pointer"
                >
                  <X className="w-3 h-3" />
                  <span>Show All States</span>
                </button>
              )}
            </div>

            {/* Active Campus Detail Highlight (if selected) */}
            {activeBranch && (
              <div className="p-4 bg-blue-50/70 border-b border-blue-200 animate-in fade-in">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#133568] text-white">
                    {activeBranch.type}
                  </span>
                  <span className="text-xs text-stone-500 font-semibold">
                    Estd. {activeBranch.est} • {activeBranch.campus}
                  </span>
                </div>

                <h4 className="text-base font-bold text-stone-900">
                  {activeBranch.name} ({activeBranch.city})
                </h4>
                <div className="text-xs text-stone-600 mt-0.5">
                  Classes: <strong>{activeBranch.classes}</strong> | State: <strong>{activeBranch.state}</strong>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center my-3">
                  <div className="p-2 rounded-lg bg-white border border-stone-200">
                    <span className="text-[10px] text-stone-500 uppercase block font-medium">Students</span>
                    <strong className="text-sm font-bold text-stone-900">{activeBranch.students}</strong>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-stone-200">
                    <span className="text-[10px] text-stone-500 uppercase block font-medium">Capacity</span>
                    <strong className="text-sm font-bold text-stone-900">{activeBranch.capacity}</strong>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-stone-200">
                    <span className="text-[10px] text-stone-500 uppercase block font-medium">Faculty</span>
                    <strong className="text-sm font-bold text-stone-900">{activeBranch.teachers}</strong>
                  </div>
                </div>

                {/* Facilities Badges */}
                <div className="mb-3">
                  <div className="text-[10px] font-bold text-stone-500 uppercase mb-1">Equipped Infrastructure:</div>
                  <div className="flex flex-wrap gap-1">
                    {activeBranch.facilities.map(code => (
                      <span key={code} className="text-[10px] px-2 py-0.5 rounded bg-white text-stone-700 font-medium border border-stone-200">
                        {INFRA_FACILITIES[code]?.label.split(' ')[0] || code}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => onOpenEnquiry('admission', activeBranch.name)}
                    className="flex-1 py-2 rounded-lg text-xs font-bold bg-[#133568] text-white hover:bg-[#0B1D38] transition-colors cursor-pointer"
                  >
                    Admission Enquiry
                  </button>
                  <button
                    onClick={() => onOpenEnquiry('franchise')}
                    className="py-2 px-3 rounded-lg text-xs font-bold bg-amber-400 text-stone-950 hover:bg-amber-300 transition-colors cursor-pointer"
                  >
                    Franchise Query
                  </button>
                </div>
              </div>
            )}

            {/* Active Territory Highlight (if selected) */}
            {activeTerritory && (
              <div className="p-4 bg-amber-50 border-b border-amber-200 animate-in fade-in">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-200 text-amber-950">
                    Territory Open for Expression of Interest
                  </span>
                  <span className="text-xs text-amber-800 font-bold capitalize">
                    Status: {activeTerritory.status}
                  </span>
                </div>

                <h4 className="text-base font-bold text-stone-900">
                  {activeTerritory.city}, {activeTerritory.state}
                </h4>
                <p className="text-xs text-stone-600 mt-1">
                  Recommended Model Format: <strong>{activeTerritory.model}</strong>. Strategic catchment territory with high unsatisfied parent demand for CBSE/IB schooling.
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <button
                    onClick={() => onOpenEnquiry('franchise', `${activeTerritory.city} (${activeTerritory.state})`)}
                    className="w-full py-2 rounded-lg text-xs font-bold bg-[#0B1D38] text-white hover:bg-[#133568] transition-colors cursor-pointer"
                  >
                    Lock Territory for {activeTerritory.city}
                  </button>
                </div>
              </div>
            )}

            {/* Scrollable List */}
            <div className="flex-1 overflow-y-auto divide-y divide-stone-200">
              {filteredBranches.map(branch => {
                const isSelected = activeBranch?.name === branch.name;
                return (
                  <div
                    key={branch.name}
                    onClick={() => handleSelectBranch(branch)}
                    className={`p-3.5 hover:bg-white transition-all cursor-pointer flex items-center justify-between group ${
                      isSelected ? 'bg-white border-l-4 border-[#133568] shadow-xs' : ''
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h5 className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-[#133568]">
                          {branch.name}
                        </h5>
                        {branch.type === 'Head Branch' && (
                          <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-amber-400 text-stone-950">
                            HQ
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-stone-500">
                        {branch.city}, {branch.state} • {branch.classes}
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-extrabold text-stone-800 block">
                        {branch.students}
                      </span>
                      <span className="text-[10px] text-stone-400 uppercase">
                        Students
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Territories in list */}
              {filteredTerritories.map(terr => (
                <div
                  key={terr.city}
                  onClick={() => handleSelectTerritory(terr)}
                  className="p-3.5 bg-amber-50/40 hover:bg-amber-50 transition-all cursor-pointer flex items-center justify-between border-l-4 border-dashed border-amber-600"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h5 className="text-xs sm:text-sm font-bold text-amber-950">
                        {terr.city} (Open Territory)
                      </h5>
                      <span className="text-[9px] font-bold uppercase bg-amber-200 text-amber-900 px-1.5 py-0.2 rounded">
                        Available
                      </span>
                    </div>
                    <div className="text-[11px] text-stone-500">
                      {terr.state} • Format: {terr.model}
                    </div>
                  </div>

                  <span className="text-xs font-bold text-[#133568]">
                    Apply &rarr;
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
