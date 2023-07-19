import React from 'react'
import TopBanner from './Top Banner/TopBanner';
import Options from './Options/Options';
import Working from './Working/Working';
import  Offer from './Offer/Offer';
import GetStarted from './Started/GetStarted';
import Review from './Reviews/Review';

const Home:React.FC=()=> {
  return (
    <>
<TopBanner />
<Options />
<Working />
<Offer />
<GetStarted />
<Review />
    </>
  )
}
export default Home;