const API_KEY = "11b2d14827febd76b7a136ceb36ec8e6";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
};

export default requests;
