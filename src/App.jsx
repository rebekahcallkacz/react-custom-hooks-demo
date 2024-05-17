import { useState, useEffect } from 'react';
import './App.css';
import { fetchData, searchCollection } from './network';

function App() {
  const [isFetchingSearchResults, setIsFetchingSearchResults] = useState(false);
  // Store search results
  const [searchResults, setSearchResults] = useState();
  const [searchResultsError, setSearchResultsError] = useState();
  // Store link to further info about selected artwork
  const [selectedArtworkApiLink, setSelectedArtworkApiLink] = useState();
  // Store further data about the selected artwork
  const [selectedArtwork, setSelectedArtwork] = useState();

  const searchTerm = 'monet';

  // Update the search results when the query term changes
  useEffect(() => {
    // Clear out former data
    setIsFetchingSearchResults(true);
    setSearchResults(undefined);
    setSelectedArtworkApiLink(undefined);
    setSearchResultsError(false);

    // Fetch data
    searchCollection(searchTerm)
      .then((data) => {
        // Update because data is successfully returned
        setSearchResults(data);
        setIsFetchingSearchResults(false);
        setSearchResultsError(false);
      })
      .catch((error) => {
        // Update because there was an error
        setSearchResults(null);
        setIsFetchingSearchResults(false);
        setSearchResultsError(error);
      });
  }, [searchTerm]);

  // Update the selected artwork info when the link changes
  useEffect(() => {
    if (selectedArtworkApiLink) {
      fetchData(selectedArtworkApiLink)
        .then((data) => setSelectedArtwork(data))
        .catch((error) => console.log(error));
    }
  }, [selectedArtworkApiLink]);

  const handleMoreInfoButtonClick = (event) => {
    // Documentation for this API request: https://api.artic.edu/docs/#get-artworks-id
    const clickedArtworkApiLink = event.target.value;
    setSelectedArtworkApiLink(clickedArtworkApiLink);
  };

  if (isFetchingSearchResults) return <h1>Loading...</h1>;
  if (searchResultsError) return <h1>{`There was an error: ${searchResultsError}`}</h1>;
  return (
    <>
      <div>
        <h1>{`Search Results for: ${searchTerm}`}</h1>
        <div>
          {searchResults &&
            searchResults.map((artwork) => (
              <ul key={artwork.id}>
                <h3>{artwork.title}</h3>
                <button value={artwork.api_link} onClick={handleMoreInfoButtonClick}>
                  More Info
                </button>
                <button
                  onClick={() => {
                    window.open(`https://www.artic.edu/artworks/${artwork.id}`, '_blank');
                  }}
                >
                  Go to website
                </button>
                {selectedArtwork && selectedArtwork.id == artwork.id && (
                  <div dangerouslySetInnerHTML={{ __html: selectedArtwork.description }}></div>
                )}
              </ul>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
