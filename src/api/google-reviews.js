export default async function handler(req, res) {
    try {
      const placeId = 'ChIJdyVjt2anvUcRpTmGLxpJj-k';      // process.env.PLACE_ID;
      const key = process.env.GOOGLE_MAPS_API_KEY;
  
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&language=ar&key=${key}`;
  
      const response = await fetch(url);
      const data = await response.json();
  
      res.status(200).json(data.result.reviews || []);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Error fetching reviews" });
    }
  }
  