import { useEffect, useState } from "react";

function App() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchJoke = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?type=single"
      );
      const data = await res.json();
      setJoke(data?.joke ?? "No joke found.");
    } catch {
      setError("Failed to load joke.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      {/* Updated button text to match test expectation */}
      <button onClick={fetchJoke}>Get a New Joke</button>

      {/* Single <p> for test consistency */}
      <p>{error ? error : loading ? "Loading..." : joke}</p>
    </div>
  );
}

export default App;
 