async function fetchFromAPI(endpoint) {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status} / response: ${response}`,
      );
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
}

export async function getDonations({ pageSize = 10, cursor }) {
  const queryParams = new URLSearchParams({ pageSize });

  if (cursor) {
    queryParams.append('cursor', cursor);
  }

  const endpoint = `/donationsApi.json`;
  return await fetchFromAPI(endpoint);
}
