import { BASE_URL } from '../constants/apiConstants';

export async function getIdols(cursor, pageSize = 10, keyword) {
  let url = `${BASE_URL}/idols?`;
  if (cursor) {
    url += `cursor=${cursor}`;
  }

  if (pageSize) {
    url += `&pageSize=${pageSize}`;
  }

  if (keyword) {
    url += `&keyword=${keyword}`;
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
    console.error('아이돌 목록 불러오기 실패:', error);
    return [];
  }
}
