import { BASE_URL } from '../constants/apiConstants';

export async function getDonations(
  cursor,
  pageSize = 10,
  priorityIdolIds = [],
) {
  let url = `${BASE_URL}/donations?`;

  if (cursor) {
    url += `cursor=${cursor}`;
  }

  if (pageSize) {
    url += `&pageSize=${pageSize}`;
  }

  if (priorityIdolIds && priorityIdolIds.length > 0) {
    const limitedPriorityIds = priorityIdolIds.slice(0, 5);
    const priorityIdolQuery = limitedPriorityIds
      .map((id) => `priorityIdolIds=${id}`)
      .join('&');
    url += `&${priorityIdolQuery}`;
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const result = await response.json();
  return result;
}

export async function proceedDonation(id, amount) {
  const url = `${BASE_URL}/donations/${id}/contribute`;

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount }),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
}
