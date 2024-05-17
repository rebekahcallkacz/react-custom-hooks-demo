// Documentation for the API: https://api.artic.edu/docs/#quick-start
const basePath = "https://api.artic.edu/api/v1/";

export const fetchData = async (path) => {
    // Get the response
    const response = await fetch(path, {
        // This tells the API that you want your data in JSON format
        headers: { "Content-Type": "application/json" },
      });
      // Pull out your data
      const data = await response.json();
      // If there's data, return the data (where the people are)
      if (data) {
        return data.data;
      }
      // If there's not data, return an empty array
      return [];
};

export const searchCollection = async (searchText) => {
    // Documentation for this API request: https://api.artic.edu/docs/#get-artworks-search
    const path = `${basePath}artworks/search?q=${searchText}`
    return fetchData(path)
  };
