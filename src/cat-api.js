const URL = 'https://api.thecatapi.com/v1/breeds';
const API_KEY =
  'live_jXw3tBflfjXo0Z62r16zj1bSIgqmnq8vWoKt8ifUMSD29d3RhAeK94Gtxi4tQjUd';

export function fetchBreeds() {
  return fetch(`${URL}/breeds?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `${URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
