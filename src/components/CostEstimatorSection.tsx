import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Users, 
  Calendar, 
  Plane, 
  Hotel, 
  Utensils, 
  Ticket, 
  HelpCircle,
  Save,
  Trash2,
  CheckCircle2,
  TrendingUp,
  MapPin
} from 'lucide-react';
import { Destination, SavedCostCalculation } from '../types';
import { DESTINATIONS } from '../data/destinations';
import { getSavedEstimates, saveEstimate, removeEstimate } from '../services/storage';

interface CostEstimatorSectionProps {
  initialDestination?: Destination;
}

export const CostEstimatorSection: React.FC<CostEstimatorSectionProps> = ({
  initialDestination,
}) => {
  // Preset or default
  const defaultDest = initialDestination || DESTINATIONS[0];

  const [selectedDestinationId, setSelectedDestinationId] = useState<string>(defaultDest.id);
  const [travellers, setTravellers] = useState<number>(2);
  const [days, setDays] = useState<number>(5);
  const [transportCost, setTransportCost] = useState<number>(defaultDest.sampleCostsINR.transport);
  const [lodgingPerNight, setLodgingPerNight] = useState<number>(defaultDest.sampleCostsINR.lodgingPerNight);
  const [foodPerDay, setFoodPerDay] = useState<number>(defaultDest.sampleCostsINR.foodPerDay);
  const [otherExpenses, setOtherExpenses] = useState<number>(defaultDest.sampleCostsINR.otherExpenses);

  const [savedEstimatesList, setSavedEstimatesList] = useState<SavedCostCalculation[]>(() => getSavedEstimates());
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  // Apply preset destination
  const handleApplyPreset = (dest: Destination) => {
    setSelectedDestinationId(dest.id);
    setTransportCost(dest.sampleCostsINR.transport);
    setLodgingPerNight(dest.sampleCostsINR.lodgingPerNight);
    setFoodPerDay(dest.sampleCostsINR.foodPerDay);
    setOtherExpenses(dest.sampleCostsINR.otherExpenses);
  };

  // Calculations
  const calculations = useMemo(() => {
    const validTravellers = Math.max(1, travellers || 1);
    const validDays = Math.max(1, days || 1);

    // Transport is per-traveller for intercity/flight or total
    const totalTransport = Math.max(0, transportCost || 0) * validTravellers;
    
    // Lodging is per night for the party
    const lodgingNights = Math.max(1, validDays - 1);
    const totalLodging = Math.max(0, lodgingPerNight || 0) * lodgingNights;
    
    // Food is per person per day
    const totalFood = Math.max(0, foodPerDay || 0) * validDays * validTravellers;
    
    // Activities / other is per person
    const totalOther = Math.max(0, otherExpenses || 0) * validTravellers;

    const totalCost = totalTransport + totalLodging + totalFood + totalOther;
    const costPerPerson = Math.round(totalCost / validTravellers);

    const transportPct = totalCost > 0 ? Math.round((totalTransport / totalCost) * 100) : 0;
    const lodgingPct = totalCost > 0 ? Math.round((totalLodging / totalCost) * 100) : 0;
    const foodPct = totalCost > 0 ? Math.round((totalFood / totalCost) * 100) : 0;
    const otherPct = totalCost > 0 ? Math.max(0, 100 - (transportPct + lodgingPct + foodPct)) : 0;

    return {
      validTravellers,
      validDays,
      lodgingNights,
      totalTransport,
      totalLodging,
      totalFood,
      totalOther,
      totalCost,
      costPerPerson,
      percentages: {
        transport: transportPct,
        lodging: lodgingPct,
        food: foodPct,
        other: otherPct,
      },
    };
  }, [travellers, days, transportCost, lodgingPerNight, foodPerDay, otherExpenses]);

  const handleSaveCalculation = () => {
    const dest = DESTINATIONS.find((d) => d.id === selectedDestinationId);
    const calculationRecord: SavedCostCalculation = {
      destinationId: selectedDestinationId,
      destinationName: dest ? dest.name : 'Custom Itinerary',
      travellers: calculations.validTravellers,
      days: calculations.validDays,
      transportCost,
      lodgingPerNight,
      foodPerDay,
      otherExpenses,
      totalCost: calculations.totalCost,
      costPerPerson: calculations.costPerPerson,
      dateCalculated: new Date().toLocaleString(),
    };

    const updated = saveEstimate(calculationRecord);
    setSavedEstimatesList(updated);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handleDeleteSavedEstimate = (dateCalculated: string) => {
    const updated = removeEstimate(dateCalculated);
    setSavedEstimatesList(updated);
  };

  const formatINR = (val: number) => {
    return '₹' + val.toLocaleString('en-IN');
  };

  return (
    <section id="estimator" className="py-12 lg:py-20 border-t border-[#E3DAC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A84420] mb-2">
            <Calculator className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Interactive Financial Planning</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A382B]">
            Travel Cost Estimator
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5C6B61]">
            Budget your heritage journey in Indian Rupees (INR). Customize travellers, accommodation styles, and local activities with instant recalculation.
          </p>
        </div>

        {/* Quick Destination Preset Selector */}
        <div className="mb-8 bg-white p-4 rounded-2xl border border-[#D9CFC0] shadow-xs">
          <div className="text-xs font-bold text-[#1A382B] mb-2 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Quick-Load Realistic Presets:</span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {DESTINATIONS.map((dest) => {
              const isSelected = selectedDestinationId === dest.id;
              return (
                <button
                  key={dest.id}
                  onClick={() => handleApplyPreset(dest)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#1A382B] text-white shadow-xs'
                      : 'bg-[#F4EFE6] text-[#445348] hover:text-[#1A382B] hover:bg-[#EAE2D5]'
                  }`}
                >
                  {dest.name} ({dest.country})
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Column (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#D9CFC0] shadow-sm space-y-5">
            <h3 className="font-display text-lg font-bold text-[#1A382B] pb-3 border-b border-[#F0EBE1]">
              Trip Parameters & Expenses (INR)
            </h3>

            {/* Travellers & Days */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-[#1A382B] flex items-center gap-1.5 mb-1.5">
                  <Users className="w-4 h-4 text-[#C85A32]" />
                  <span>Number of Travellers:</span>
                </label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={travellers}
                  onChange={(e) => setTravellers(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full bg-[#FBF8F3] border border-[#D9CFC0] rounded-xl px-3.5 py-2.5 text-sm font-semibold text-[#1A382B] focus:outline-none focus:ring-2 focus:ring-[#1A382B]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#1A382B] flex items-center gap-1.5 mb-1.5">
                  <Calendar className="w-4 h-4 text-[#C85A32]" />
                  <span>Number of Days:</span>
                </label>
                <input
                  type="number"
                  min="1"
                  max="90"
                  value={days}
                  onChange={(e) => setDays(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full bg-[#FBF8F3] border border-[#D9CFC0] rounded-xl px-3.5 py-2.5 text-sm font-semibold text-[#1A382B] focus:outline-none focus:ring-2 focus:ring-[#1A382B]"
                />
              </div>
            </div>

            {/* Transport Cost */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-[#1A382B] flex items-center gap-1.5">
                  <Plane className="w-4 h-4 text-[#C85A32]" />
                  <span>Transport Cost (per traveller in INR):</span>
                </label>
                <span className="text-[11px] text-[#718076]">Flights, trains & local transfers</span>
              </div>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-[#86958A]">₹</span>
                <input
                  type="number"
                  min="0"
                  step="500"
                  value={transportCost}
                  onChange={(e) => setTransportCost(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full pl-8 pr-4 py-2.5 bg-[#FBF8F3] border border-[#D9CFC0] rounded-xl text-sm font-semibold text-[#1A382B] focus:outline-none focus:ring-2 focus:ring-[#1A382B]"
                />
              </div>
            </div>

            {/* Accommodation Cost */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-[#1A382B] flex items-center gap-1.5">
                  <Hotel className="w-4 h-4 text-[#C85A32]" />
                  <span>Accommodation Cost (per night for party in INR):</span>
                </label>
                <span className="text-[11px] text-[#718076]">Heritage hotels, homestays, or inns</span>
              </div>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-[#86958A]">₹</span>
                <input
                  type="number"
                  min="0"
                  step="500"
                  value={lodgingPerNight}
                  onChange={(e) => setLodgingPerNight(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full pl-8 pr-4 py-2.5 bg-[#FBF8F3] border border-[#D9CFC0] rounded-xl text-sm font-semibold text-[#1A382B] focus:outline-none focus:ring-2 focus:ring-[#1A382B]"
                />
              </div>
            </div>

            {/* Food Cost */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-[#1A382B] flex items-center gap-1.5">
                  <Utensils className="w-4 h-4 text-[#C85A32]" />
                  <span>Food Cost (per person per day in INR):</span>
                </label>
                <span className="text-[11px] text-[#718076]">Local culinary dining & beverages</span>
              </div>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-[#86958A]">₹</span>
                <input
                  type="number"
                  min="0"
                  step="100"
                  value={foodPerDay}
                  onChange={(e) => setFoodPerDay(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full pl-8 pr-4 py-2.5 bg-[#FBF8F3] border border-[#D9CFC0] rounded-xl text-sm font-semibold text-[#1A382B] focus:outline-none focus:ring-2 focus:ring-[#1A382B]"
                />
              </div>
            </div>

            {/* Other Expenses */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-[#1A382B] flex items-center gap-1.5">
                  <Ticket className="w-4 h-4 text-[#C85A32]" />
                  <span>Other Expenses (per person in INR):</span>
                </label>
                <span className="text-[11px] text-[#718076]">Monument tickets, local guides, crafts</span>
              </div>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-[#86958A]">₹</span>
                <input
                  type="number"
                  min="0"
                  step="200"
                  value={otherExpenses}
                  onChange={(e) => setOtherExpenses(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full pl-8 pr-4 py-2.5 bg-[#FBF8F3] border border-[#D9CFC0] rounded-xl text-sm font-semibold text-[#1A382B] focus:outline-none focus:ring-2 focus:ring-[#1A382B]"
                />
              </div>
            </div>

          </div>

          {/* Results Summary Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Calculation Card */}
            <div className="bg-[#1A382B] text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#E5C158] font-semibold">
                    Immediate Calculation
                  </span>
                  <h3 className="font-display text-xl font-bold">Trip Cost Summary</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#E5C158]">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              {/* Total Large Numbers */}
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-white/70">Total Estimated Trip Cost:</div>
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#E5C158] mt-0.5">
                    {formatINR(calculations.totalCost)}
                  </div>
                </div>

                <div className="p-3 bg-white/10 rounded-xl flex items-center justify-between">
                  <div>
                    <div className="text-xs text-white/70">Cost Per Person:</div>
                    <div className="text-xl font-bold text-white mt-0.5">
                      {formatINR(calculations.costPerPerson)}
                    </div>
                  </div>
                  <div className="text-right text-[11px] text-white/60">
                    For {calculations.validTravellers} {calculations.validTravellers === 1 ? 'traveller' : 'travellers'} · {calculations.validDays} days
                  </div>
                </div>
              </div>

              {/* Breakdown Bars */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-semibold text-white/80">Expense Distribution:</div>
                <div className="h-3 w-full bg-black/30 rounded-full overflow-hidden flex">
                  <div 
                    style={{ width: `${calculations.percentages.transport}%` }} 
                    className="bg-[#E5C158]" 
                    title={`Transport: ${calculations.percentages.transport}%`}
                  />
                  <div 
                    style={{ width: `${calculations.percentages.lodging}%` }} 
                    className="bg-[#C85A32]" 
                    title={`Lodging: ${calculations.percentages.lodging}%`}
                  />
                  <div 
                    style={{ width: `${calculations.percentages.food}%` }} 
                    className="bg-[#4ADE80]" 
                    title={`Food: ${calculations.percentages.food}%`}
                  />
                  <div 
                    style={{ width: `${calculations.percentages.other}%` }} 
                    className="bg-[#38BDF8]" 
                    title={`Other: ${calculations.percentages.other}%`}
                  />
                </div>

                {/* Legend */}
                <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 text-white/80">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E5C158]" />
                    <span>Transport: {formatINR(calculations.totalTransport)} ({calculations.percentages.transport}%)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C85A32]" />
                    <span>Stay ({calculations.lodgingNights}n): {formatINR(calculations.totalLodging)} ({calculations.percentages.lodging}%)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4ADE80]" />
                    <span>Food: {formatINR(calculations.totalFood)} ({calculations.percentages.food}%)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]" />
                    <span>Other: {formatINR(calculations.totalOther)} ({calculations.percentages.other}%)</span>
                  </div>
                </div>
              </div>

              {/* Action: Save Estimate */}
              <div className="pt-2">
                <button
                  onClick={handleSaveCalculation}
                  className="w-full bg-[#C85A32] hover:bg-[#B34E2A] text-white text-xs sm:text-sm font-bold py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  {saveSuccess ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span>Saved to Local Storage!</span>
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      <span>Save Estimate to Memory</span>
                    </>
                  )}
                </button>
              </div>

              {/* Illustrative Disclaimer (Prompt Requirement) */}
              <div className="p-3 bg-black/25 rounded-xl border border-white/10 text-[11px] text-white/70 leading-relaxed flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-[#E5C158] shrink-0 mt-0.5" />
                <span>
                  <strong>Illustrative Estimate Only:</strong> Actual trip expenses vary depending on flight seasonality, visa charges, exchange rate fluctuations, and personal choices.
                </span>
              </div>

            </div>

            {/* Saved Estimates History */}
            {savedEstimatesList.length > 0 && (
              <div className="bg-white p-5 rounded-2xl border border-[#D9CFC0] shadow-xs">
                <div className="text-xs font-bold text-[#1A382B] mb-3 flex items-center justify-between">
                  <span>Saved Budget History ({savedEstimatesList.length})</span>
                  <span className="text-[10px] text-[#718076]">Stored in localStorage</span>
                </div>
                <div className="space-y-2 max-h-48 overflow-y-auto divide-y divide-[#F0EBE1]">
                  {savedEstimatesList.map((est, idx) => (
                    <div key={idx} className="pt-2 first:pt-0 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-semibold text-[#1A382B]">{est.destinationName}</div>
                        <div className="text-[11px] text-[#718076]">
                          {est.travellers}p · {est.days}d · {est.dateCalculated.split(',')[0]}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#C85A32]">{formatINR(est.totalCost)}</span>
                        <button
                          onClick={() => handleDeleteSavedEstimate(est.dateCalculated)}
                          className="p-1 text-[#86958A] hover:text-[#C85A32] transition-colors"
                          title="Delete saved estimate"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
