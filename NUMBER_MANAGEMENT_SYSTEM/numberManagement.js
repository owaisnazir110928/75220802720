const express = require("express");
const axios = require("axios");
const router = express.Router();

// This endpoint handles the GET request to '/numbers'
router.get("/numbers", async (req, res) => {
  const { query } = req;
  let urls;

  // Check if 'query.url' is an object (single value) or an array (multiple values)
  if (typeof query.url === "object" && !Array.isArray(query.url)) {
    urls = [query.url]; // Convert to an array if it's a single value
  } else {
    urls = query.url; // Keep as it is if it's already an array
  }

  // Create an array of promises for fetching data from the provided URLs
  const fetchPromises = urls.map(async (url) => {
    try {
      const response = await axios.get(url, { timeout: 475 }); // Fetch data from the URL with a timeout of 475ms
      return response.data.numbers; // Extract the 'numbers' property from the response data
    } catch (error) {
      console.error(error.message); // Log any errors that occur during the API call
      return []; // Return an empty array if there was an error
    }
  });

  try {
    // Wait for all the fetchPromises to settle (either fulfilled or rejected)
    const results = await Promise.allSettled(fetchPromises);

    // Filter out the successful (fulfilled) responses and extract the 'value' property
    const validResponses = results
      .filter((result) => result.status === "fulfilled")
      .map((result) => result.value)
      .flat(); // Flatten the array of arrays into a single array

    // Remove duplicates by converting the array to a Set and then back to an array
    const uniqueNumbers = Array.from(new Set(validResponses));

    // Sort the numbers in ascending order
    const numbers = uniqueNumbers.sort((a, b) => a - b);

    // Respond with the sorted and unique numbers in JSON format
    res.status(200).json({ numbers });
  } catch (error) {
    console.error(error); // Log any unexpected errors that occur during Promise.allSettled
    res.status(500).json({
      error: "The API is down right now", // Respond with an error message if there's an issue with the server
    });
  }
});

module.exports = router;
