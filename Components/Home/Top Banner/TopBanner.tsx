import banner from "../../../public/Images/png/banner.png";
import Image from "next/image";
import Search from "./Search";
import Navbar from "@/Components/Layout/Navbar";
import DatePicker from "./DatePicker";


const TopBanner: React.FC = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="flex-row flex">
        <div className="w-full md:w-1/2 pl-0 pr-0 md:pl-12 lg:pl-32 items-center justify-center bg-white bg-blend-overlay bg-opacity-50  md:bg-[#F1F1F1] max-h-[550px] bg-building md:bg-none bg-no-repeat bg-cover">
          <p className="max-w-[300px] sm:max-w-[400px] md:max-w-[560px] text-black font-Manrope font-semibold md:text-4xl text-2xl  lg:text-6xl leading-[30px] md:leading-[60px] my-8 w-full flex pt-32 px-6">
            Find the perfect place to stay with your family
          </p>
          <p className="pb-32 max-w-[413px] w-full text-gray-700 font-Inter text-base font-normal   leading-7 px-6">
            Besnik is insanely flexible and amazingly easy to use. This alone
            would be enough for a 5 star rating.
          </p>
        </div>
        <div className="w-1/2 hidden md:flex">
          <Image src={banner} alt="banner" className="w-full h-auto" />
        </div>
      </div>
      <div className=" absolute left-1/2 transition-transform translate-x-[-50%] translate-y-[-50%] bottom-[1%] max-w-[1200px] w-full hidden lg:flex">
        <Search />
      </div>
      <DatePicker />
    </div>
  );
};
export default TopBanner;
