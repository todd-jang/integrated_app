import React from 'react';

interface AgentLogProps {
  agentName: string;
  logs: string[];
}

const AgentLog: React.FC<AgentLogProps> = ({ agentName, logs }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">{agentName} Logs</h3>
      <div className="space-y-2">
        {logs.map((log, index) => (
          <div key={index} className="text-sm text-gray-700">
            {log}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentLog;
