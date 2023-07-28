const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/numbers", async (req, res) => {
  const { query } = req;
  let urls;

  if (typeof query.url === "object" && !Array.isArray(query.url)) {
    urls = [query.url];
  } else {
    urls = query.url;
  }

  const fetchPromises = urls.map(async (url) => {
    try {
      const response = await axios.get(url, { timeout: 475 });
      return response.data.numbers;
    } catch (error) {
      console.error(error.message);
      return [];
    }
  });

  try {
    const results = await Promise.allSettled(fetchPromises);

    const validResponses = results
      .filter((result) => result.status === "fulfilled")
      .map((result) => result.value)
      .flat();

    const uniqueNums = Array.from(new Set(validResponses));
    const numbers = uniqueNums.sort((a, b) => a - b);
    res.status(200).json({ numbers });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "The API is down right now",
    });
  }
});

module.exports = router;
