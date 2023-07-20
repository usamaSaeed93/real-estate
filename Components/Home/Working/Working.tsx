import icon from "../../../public/Images/svg/Icon.svg";
import icon2 from "../../../public/Images/svg/Icon2.svg";
import Image from "next/image";


const Working: React.FC = () => {
  return (
    <div className="m-auto mt-32">
      <p className="text-black text-center font-Manrope text-4xl font-semibold leading-normals my-14 md:my-20">
        How It Works
      </p>
      <div className="max-w-[1200px] items-center justify-evenly flex flex-col md:flex-row  m-auto">
        <div className="flex flex-col justify-center items-center text-center">
          <Image src={icon} alt="icon" className="mt-10 md:mt-0" />
          <p className="text-black text-center font-Roboto text-lg font-medium mt-12 mb-3 leading-6">
            Research SubUrbs
          </p>
          <p className="text-gray-700 text-center font-Roboto text-base font-normal leading-6 max-w-[260px] w-full">
            Over 30 high quality profession designed re-built website concepts
            to choose from.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <Image src={icon2} alt="icon" className="mt-10 md:mt-0" />
          <p className="text-black text-center font-Roboto text-lg font-medium mt-12 mb-3 leading-6">
            Research SubUrbs
          </p>
          <p className="text-gray-700 text-center font-Roboto text-base font-normal leading-6 max-w-[260px] w-full">
            Over 30 high quality profession designed re-built website concepts
            to choose from.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <Image src={icon} alt="icon" className="mt-10 md:mt-0" />
          <p className="text-black text-center font-Roboto text-lg font-medium mt-12 mb-3 leading-6">
            Research SubUrbs
          </p>
          <p className="text-gray-700 text-center font-Roboto text-base font-normal leading-6 max-w-[260px] w-full">
            Over 30 high quality profession designed re-built website concepts
            to choose from.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Working;
