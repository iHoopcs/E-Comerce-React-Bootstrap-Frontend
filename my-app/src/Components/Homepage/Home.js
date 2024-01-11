import "./Home.css";
import Header from "../Header";
import axios from "axios";
import { useEffect, useState } from "react";
import UpcomingReleaseCard from "../Products/UpcomingReleaseCard";
import Footer from "../footer";

const Body = () => {
  const LOCAL_API_URL = "http://localhost:8080";

  //fetch clothes & shoes from Homepage component
  const [upcomingReleases, setUpcomingReleases] = useState([]);

  //fetch upcoming shoes & clothing from backend
  const fetchUpcomingReleases = async () => {
    try {
      const response = await axios(LOCAL_API_URL + "/upcomingReleases");
      console.log(response.data);
      setUpcomingReleases(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  //render on each change/update
  useEffect(() => {
    fetchUpcomingReleases();
  }, []);

  return (
    <>
      <div className="container-fluid mt-4 mb-4">
        <h1 className="home-display-title mb-4">Coming Soon...</h1>
        <div className="row justify-content-center">
          {
            //display each item in Display card comp
            upcomingReleases.map((item) => {
              return <UpcomingReleaseCard item={item} key={item.id} />;
            })
          }
        </div>
      </div>
    </>
  );
};
export default function Home(props) {
  //fetch props from index.js -> give access to Body component
  const { clothes, shoes } = props;
  return (
    <>
      <div>
        <Header />
        <div>
          <Body clothes={clothes} shoes={shoes} />
        </div>
        <Footer />
      </div>
    </>
  );
}
