type Quote = {
  quote: string;
  author: string;
};

export async function Quote() {
  const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
    method: "GET",
    headers: {
      "X-Api-Key": process.env.API_NINJA_KEY || "",
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    return <p className="text-red-500">Failed to fetch quote</p>;
  }

  const data: Quote[] = await res.json();
  const quote = data[0];

  return (
    <div className="bg-white shadow-md rounded-xl p-5 border border-gray-200 max-w-xl mx-4 sm:mx-auto">
      <blockquote className="text-lg sm:text-xl text-gray-800 italic leading-relaxed">
        “{quote.quote}”
      </blockquote>
      <p className="mt-4 text-sm sm:text-base text-right text-gray-600 font-medium">
        — {quote.author}
      </p>
    </div>
  );
}
