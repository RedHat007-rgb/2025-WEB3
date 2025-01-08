import { createPublicClient, http } from 'viem';
import './App.css';
import { sepolia } from 'viem/chains';
import { useState } from 'react';

const client = createPublicClient({
  chain: sepolia,
  transport: http(),
});

function App() {
  const [balance, setBalance] = useState(null);

  async function getBalance() {
      const response = await client.getBalance({
        address: "0x7a76E0eb90f96690962D67AcBC6c7631d951eff0",
      });
      const data = response.toString();
      setBalance(data); 
      console.log(data);
    
  }

  return (
    <div>
      <button onClick={getBalance}>Get Balance</button>
      {<div>Balance: {balance}</div>}
    </div>
  );
}

export default App;
