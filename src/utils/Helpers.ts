export function formatAmount(amount: string) {
  if (amount) return amount.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
