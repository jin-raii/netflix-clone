
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />

      <Row title="Netflix Origin" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title=" Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title=" Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
