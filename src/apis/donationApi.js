import { BASE_URL } from '../constants/apiConstants';

export async function getdonationList(cursor, pageSize = 10, priorityIdolIds) {
  let url = `${BASE_URL}/donations`;
  if (cursor) {
    url += `&cursor=${cursor}`;
  }

  if (pageSize) {
    url += `&pageSize=${pageSize}`;
  }

  if (priorityIdolIds) {
    url += `&priorityIdolIds=${priorityIdolIds}`;
  }

  try {
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
  } catch (error) {
    console.error('후원 목록 불러오기 실패:', error);
    return [];
  }
}
