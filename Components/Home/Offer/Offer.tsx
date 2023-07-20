import room from "../../../public/Images/png/room.png";
import Image from "next/image";


const Offer: React.FC = () => {
  return (
    <div className="m-auto w-full flex justify-center items-center">
      <div className="md:max-w-[750px] lg:max-w-[1050px] mx-5 flex flex-row w-full m-auto bg-[#D6EBE4] mt-44 h-max py-10 sm:h-[500px] justify-center items-center overflow-visible relative">
        <div className="lg:w-1/2 md:w-1/4 lg:flex hidden">
          <Image
            src={room}
            alt="room"
            className="absolute bottom-[5%] left-[-5%] lg:w-[500px] lg:h-[500px] md:w-[300px] md:h-[300px]"
          />
        </div>

        <div className="lg:w-1/2 md:w-3/4 justify-center items-start flex flex-col px-3">
          <div></div>
          <p className="text-black font-Manrope text-3xl font-semibold leading-normal max-w-[378px] mb-4">
            All the stuff you need and none that you don’t
          </p>
          <p className="max-w-[344px] mb-8 text-gray-600 font-Inter text-base font-normal leading-6">
            Crafted with care by the authors of Oshine, a best seller with over
            25K customers. Take complete control of your website.
          </p>
          <div className="flex flex-row md:gap-x-20 sm:gap-x-10 gap-x-5">
            <div>
              <p className="text-black font-Inter text-base font-medium leading-normal">
                Budget
              </p>
              <p className="text-gray-600 font-Inter text-base font-normal leading-normal">
                Confidential
              </p>
            </div>
            <div>
              <p className="text-black font-Inter text-base font-medium leading-normal">
                Budget
              </p>
              <p className="text-gray-600 font-Inter text-base font-normal leading-normal">
                Confidential
              </p>
            </div>
            <div>
              <p className="text-black font-Inter text-base font-medium leading-normal">
                Budget
              </p>
              <p className="text-gray-600 font-Inter text-base font-normal leading-normal">
                Confidential
              </p>
            </div>
          </div>
          <div className="flex flex-row md:gap-x-20 sm:gap-x-10 gap-x-5 mt-8">
            <div>
              <p className="text-black font-Inter text-base font-medium leading-normal">
                Budget
              </p>
              <p className="text-gray-600 font-Inter text-base font-normal leading-normal">
                Confidential
              </p>
            </div>
            <div>
              <p className="text-black font-Inter text-base font-medium leading-normal">
                Budget
              </p>
              <p className="text-gray-600 font-Inter text-base font-normal leading-normal">
                Confidential
              </p>
            </div>
            <div>
              <p className="text-black font-Inter text-base font-medium leading-normal">
                Budget
              </p>
              <p className="text-gray-600 font-Inter text-base font-normal leading-normal">
                Confidential
              </p>
            </div>
          </div>
          <button className="font-Inter font-medium text-xs sm:text-base text-white max-w-[410px] h-14 bg-[#F85A47] mt-8 rounded-md px-2">
            YES! I WANT BOOK “OFFICE PACKAGE”
          </button>
        </div>
      </div>
    </div>
  );
};
export default Offer;
