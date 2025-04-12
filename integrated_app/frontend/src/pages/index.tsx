// 📁 src/pages/index.tsx (Next.js 기준)
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [result, setResult] = useState("");

  const handleAsk = async () => {
    setLoading(true);
    setLogs(["🤖 요청 시작..."]);

    try {
      const res = await fetch("http://localhost:5000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question })
      });

      const data = await res.json();

      setResult(data.final_result);
      setLogs(prev => [
        ...prev,
        `📚 교육 Agent 응답: ${data.edu}`,
        `💹 트레이딩 Agent 응답: ${data.trade}`,
        `🧘 요가 Agent 응답: ${data.yoga}`
      ]);
    } catch (err) {
      setLogs(prev => [...prev, "❌ 에러 발생"]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">🧠 멀티에이전트 LangGraph 데모</h1>

      <div className="mb-4">
        <input
          type="text"
          className="border p-2 w-full rounded"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="무엇이든 물어보세요..."
        />
        <Button onClick={handleAsk} className="mt-2 w-full" disabled={loading}>
          {loading ? "⏳ 로딩 중..." : "🚀 질문하기"}
        </Button>
      </div>

      <Card className="mb-4">
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">📜 Agent 로그</h2>
          <ul className="list-disc pl-5 space-y-1">
            {logs.map((log, i) => <li key={i}>{log}</li>)}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">✅ 통합 응답</h2>
          <pre className="whitespace-pre-wrap text-gray-800">{result}</pre>
        </CardContent>
      </Card>
    </main>
  );
}

