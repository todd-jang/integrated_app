import React, { useEffect, useState } from 'react';
import { fetchAgentStatus, sendAgentCommand } from '../api/agentAPI';

const AgentMonitor = () => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [command, setCommand] = useState('');

  useEffect(() => {
    const getStatus = async () => {
      setLoading(true);
      const data = await fetchAgentStatus();
      setStatus(data);
      setLoading(false);
    };

    getStatus();
  }, []);

  const handleSendCommand = async () => {
    setLoading(true);
    const result = await sendAgentCommand(command);
    alert(`Agent responded: ${result.message}`);
    setCommand('');
    setLoading(false);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Agent Monitor</h2>

      {loading && <p>Loading...</p>}

      {status && (
        <div className="mb-4 p-4 bg-gray-100 rounded">
          <p><strong>Status:</strong> {status.status}</p>
          <p><strong>Last updated:</strong> {status.timestamp}</p>
        </div>
      )}

      <div className="flex gap-2">
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder="Enter command"
          className="border p-2 flex-1 rounded"
        />
        <button
          onClick={handleSendCommand}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AgentMonitor;
