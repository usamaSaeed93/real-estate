import React from "react";
import TopBanner from "./Top Banner/TopBanner";
import Options from "./Options/Options";
import Working from "./Working/Working";
import Offer from "./Offer/Offer";
import GetStarted from "./Started/GetStarted";
import Review from "./Reviews/Review";
import Deals from "./Deals/Deals";
import Country from "./Country/Country";
const Home: React.FC = () => {
  return (
    <>
      <TopBanner />
      <Options />
      <Working />
      <Country />
      <Offer />
      <Review />
      <Deals />
      <GetStarted />
    </>
  );
};
export default Home;
