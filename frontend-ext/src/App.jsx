import { useState } from 'react';

function App() {
  const [data, setData] = useState("");
  const [status, setStatus] = useState(""); // Status dikhane ke liye naya state

  const handleSave = async () => {
    setStatus("Sending...");
    try {
      const response = await fetch('http://localhost:5000/api/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: data })
      });
      
      const result = await response.json();
      console.log("Backend response:", result);
      setStatus("✅ Saved Successfully!");
      setData(""); // Input field clear karne ke liye
      
    } catch (error) {
      console.error("Connection Error:", error);
      setStatus("❌ Failed to connect to Backend.");
    }
  };

  return (
    <div className="w-[300px] h-[400px] p-4 bg-white">
      <h1 className="text-xl font-bold mb-4 text-blue-600">SinTax Helper</h1>
      
      <input 
        type="text" 
        className="w-full p-2 border border-gray-300 rounded mb-2"
        placeholder="Enter data..."
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      
      <button 
        onClick={handleSave}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
      >
        Save to Backend
      </button>

      {/* Status message */}
      {status && <p className="mt-4 text-sm font-medium text-center">{status}</p>}
    </div>
  );
}

export default App;