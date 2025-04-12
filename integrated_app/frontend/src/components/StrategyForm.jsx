import React, { useState } from 'react';
import axios from 'axios';

function StrategyForm() {
  const [strategy, setStrategy] = useState('');

  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:5000/run", { text: strategy });
    alert(response.data.result);
  };

  return (
    <div>
      <input value={strategy} onChange={e => setStrategy(e.target.value)} />
      <button onClick={handleSubmit}>Submit Strategy</button>
    </div>
  );
}

export default StrategyForm;