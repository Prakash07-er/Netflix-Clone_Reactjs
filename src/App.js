import './App.css';
import Row from './row'
import requests from './request'
import Banner from './components/banner'
import Navbar from './components/navbar'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} islargeRow={true}></Row>
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
     <Row title="Comedy Movies Now" fetchUrl={requests.fetchComedyMovies}></Row>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>

    </div>
  );
}

export default App;
