export function estimateTestosterone(input: { hrv: number; age: number }): number {
  return 300 + (input.hrv * 0.5) - (input.age * 0.2);
}
