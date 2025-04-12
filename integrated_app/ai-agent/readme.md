# 🧠 Integrated AI Agent App

This app combines **Flask**, **LangChain**, and **Ollama** for a local AI agent powered by LLMs.  
Can be extended to use LangGraph, Gradio, and Kubernetes deployments.

## 📦 Usage

```bash
curl -X POST http://localhost:5000/ask \
     -H "Content-Type: application/json" \
     -d '{"question": "What is 2 + 2?"}'
