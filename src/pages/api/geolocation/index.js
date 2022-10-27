// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    res.status(200).json({ name: "POST REQUEST" });
  } else if (req.method === "GET") {
    let result = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_GEOLOCATION_API_KEY}&ipAddress=8.8.8.8`);
    let data = await result.json();
    // Process a GET request
    res.status(200).json(data);
  } else {
    res.status(200).json({ name: "ANY OTHER" });
    //handle any other HTTP method
  }
}
