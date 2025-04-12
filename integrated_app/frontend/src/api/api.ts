const API_URL = 'http://localhost:5000'; // Flask 백엔드 URL

export const sendQuery = async (query: string) => {
  try {
    const response = await fetch(`${API_URL}/api/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error('Failed to send query');
    }

    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
