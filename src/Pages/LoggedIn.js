import React from "react";
import Row from "../components/Row";
import requests from "../requests";
import Banner from "../components/Banner.js";
import Navbar from "../components/Navbar.js";

const LoggedIn = ({user,setIsUserSignedIn}) => {
  return (
      <div className="App">
        <Navbar user={user} setIsUserSignedIn={setIsUserSignedIn}/>
        <Banner />
        <Row
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOrginals}
          isLargeRow="true"
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorroMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
  );
};

export default LoggedIn;
