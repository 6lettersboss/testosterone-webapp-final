export function estimateTestosterone({ hrv, age }: { hrv: number; age: number }): number {
  return 300 + hrv * 2 - age * 1.5;
}
