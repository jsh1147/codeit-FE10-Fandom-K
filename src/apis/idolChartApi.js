import { BASE_URL } from '../constants/apiConstants';

export async function getIdolChart(gender, cursor, pageSize = 10) {
  let url = `${BASE_URL}/charts/{gender}?gender=${gender}`;
  if (cursor) {
    url += `&cursor=${cursor}`;
  }

  if (pageSize) {
    url += `&pageSize=${pageSize}`;
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
    console.error('이달의 아이돌 차트 실패:', error);
    return [];
  }
}
