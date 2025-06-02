export function estimateTestosterone(hrv: number): number {
  return hrv * 1.35 + 180 + Math.random() * 50;
}
