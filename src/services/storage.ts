import { SavedCostCalculation } from '../types';

const SAVED_DESTINATIONS_KEY = 'sacred_pixels_saved_destinations_v1';
const SAVED_ESTIMATES_KEY = 'sacred_pixels_saved_estimates_v1';

export function getSavedDestinationIds(): string[] {
  try {
    const raw = localStorage.getItem(SAVED_DESTINATIONS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.warn('Could not read saved destinations from localStorage:', err);
    return [];
  }
}

export function saveDestinationId(id: string): string[] {
  try {
    const current = getSavedDestinationIds();
    if (!current.includes(id)) {
      const updated = [...current, id];
      localStorage.setItem(SAVED_DESTINATIONS_KEY, JSON.stringify(updated));
      return updated;
    }
    return current;
  } catch (err) {
    console.warn('Could not save destination to localStorage:', err);
    return getSavedDestinationIds();
  }
}

export function removeDestinationId(id: string): string[] {
  try {
    const current = getSavedDestinationIds();
    const updated = current.filter((item) => item !== id);
    localStorage.setItem(SAVED_DESTINATIONS_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.warn('Could not remove destination from localStorage:', err);
    return getSavedDestinationIds();
  }
}

export function isDestinationSaved(id: string): boolean {
  return getSavedDestinationIds().includes(id);
}

export function getSavedEstimates(): SavedCostCalculation[] {
  try {
    const raw = localStorage.getItem(SAVED_ESTIMATES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.warn('Could not read saved estimates from localStorage:', err);
    return [];
  }
}

export function saveEstimate(estimate: SavedCostCalculation): SavedCostCalculation[] {
  try {
    const current = getSavedEstimates();
    const updated = [estimate, ...current.slice(0, 9)]; // Keep recent 10
    localStorage.setItem(SAVED_ESTIMATES_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.warn('Could not save estimate to localStorage:', err);
    return getSavedEstimates();
  }
}

export function removeEstimate(dateCalculated: string): SavedCostCalculation[] {
  try {
    const current = getSavedEstimates();
    const updated = current.filter((item) => item.dateCalculated !== dateCalculated);
    localStorage.setItem(SAVED_ESTIMATES_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.warn('Could not remove estimate from localStorage:', err);
    return getSavedEstimates();
  }
}
