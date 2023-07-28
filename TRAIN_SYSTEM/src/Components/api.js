import owner from "../../secret.json";
export async function authenticateUser(owner) {
  try {
    const response = await fetch("http://20.244.56.144/train/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(owner),
    });

    if (!response.ok) {
      throw new Error("Authentication failed");
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error authenticating user:", error);
    throw error;
  }
}

export async function fetchAllTrains() {
  try {
    const authToken = await authenticateUser(owner);
    const headers = {
      Authorization: `Bearer ${authToken}`,
    };

    const response = await fetch("http://20.244.56.144/train/trains", {
      headers,
    });

    if (!response.ok) {
      console.log("error");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching trains:", error);
    throw error;
  }
}

export async function fetchTrainDetails(trainId) {
  try {
    const authToken = await authenticateUser(owner);
    const headers = {
      Authorization: `Bearer ${authToken}`,
    };
    const response = await fetch(
      `http://20.244.56.144/train/trains/${trainId}`,
      { headers }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch train details");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching train details:", error);
    throw error;
  }
}
