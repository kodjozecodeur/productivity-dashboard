import { useEffect, useState } from "react";

const QuotesTiles = () => {
  const [quote, setQuote] = useState({
    text: "Loading advice...",
    author: "Advice Slip API",
  });

  useEffect(() => {
    async function loadQuote() {
      try {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setQuote({
          text: `"${data.slip.advice}"`,
          author: "Unknown",
        });
      } catch (error) {
        console.error("Failed to fetch advice:", error);
        setQuote({
          text: "Could not load advice.",
          author: "Error",
        });
      }
    }

    loadQuote();
  }, []);

  return (
    <div className="flex items-center justify-center bg-gray-100 py-12">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">{quote.text}</h2>
        <p className="text-right text-sm text-gray-600">— {quote.author}</p>
      </div>
    </div>
  );
};

export default QuotesTiles;
