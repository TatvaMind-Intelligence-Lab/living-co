import { useEffect, useState } from "react";
import { supabase } from "./services/supabase";

function App() {
  const [status, setStatus] = useState("Checking connection...");

  useEffect(() => {
    async function checkConnection() {
      try {
        const { data, error } = await supabase.auth.getSession();

        if (error) throw error;

        setStatus("✅ Connected to Supabase");
        console.log(data);
      } catch (err) {
        console.error(err);
        setStatus("❌ Failed to connect");
      }
    }

    checkConnection();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-xl font-semibold">
        {status}
      </div>
    </div>
  );
}

export default App;