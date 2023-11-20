export function formatNumber(number: number): string {
  return number.toLocaleString('pt-BR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}
