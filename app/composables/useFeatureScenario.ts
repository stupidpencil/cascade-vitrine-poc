export const FEATURE_SCENARIOS = [
  { key: 'tiers-lieux', label: 'Tiers-lieu', icon: 'i-lucide-map-pin-house' },
  { key: 'cooperatives', label: 'Coopérative', icon: 'i-lucide-building-2' },
  { key: 'ateliers', label: 'Atelier partagé', icon: 'i-lucide-hammer' },
  { key: 'amap', label: 'AMAP', icon: 'i-lucide-carrot' },
  { key: 'creche', label: 'Crèche parentale', icon: 'i-lucide-baby' },
  { key: 'fanfare', label: 'Fanfare', icon: 'i-lucide-music' }
] as const

export type FeatureScenarioKey = typeof FEATURE_SCENARIOS[number]['key']

export function useFeatureScenario() {
  return useState<FeatureScenarioKey>('feature-scenario', () => 'tiers-lieux')
}
