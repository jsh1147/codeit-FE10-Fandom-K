import { BASE_URL } from '../constants/apiConstants';

export async function createVote(idolId) {
  const url = `${BASE_URL}/votes`;
  const requestBody = {
    idolId: idolId,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('투표 생성 실패:', error);
    return null;
  }
}
