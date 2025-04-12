export const callAgent = async (inputText) => {
  try {
    const response = await fetch("http://localhost:5000/api/agent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ input: inputText })
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Agent 호출 실패:", error);
    return { error: "Flask 서버에 연결할 수 없습니다." };
  }
};
