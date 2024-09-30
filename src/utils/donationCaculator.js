export function getCompletionRate(receivedDonations, targetDonation) {
  if (targetDonation === 0) {
    return '0%';
  }

  const percentage = (receivedDonations / targetDonation) * 100;

  if (percentage > 100) {
    return '100%';
  }

  return `${percentage.toFixed(2)}%`;
}
