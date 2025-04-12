const BASE_URL = 'http://localhost:5000'; // Docker-compose 내부 네트워크에서는 flask-agent:5000

export const fetchAgentStatus = async () => {
  try {
    const res = await fetch(`${BASE_URL}/status`);
    if (!res.ok) throw new Error('Failed to fetch status');
    return await res.json();
  } catch (err) {
    console.error(err);
    return { status: 'Error', timestamp: '' };
  }
};

export const sendAgentCommand = async (command) => {
  try {
    const res = await fetch(`${BASE_URL}/command`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ command }),
    });
    return await res.json();
  } catch (err) {
    console.error(err);
    return { message: 'Failed to send command' };
  }
};
