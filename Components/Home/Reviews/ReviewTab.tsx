import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";
import reviewman from "../../../public/Images/png/reviewman.png";


const ReviewTab: React.FC = () => {
  const yellowStarStyle = {
    color: "#FBB040",
    fontSize: 24,
  };
  return (
    <div className="max-w-[380px] min-h-[367px] w-full h-full border border-solid border-black border-opacity-25 m-auto">
      <div className="mt-14 pl-7">
        <StarIcon style={yellowStarStyle} />
        <StarIcon style={yellowStarStyle} />
        <StarIcon style={yellowStarStyle} />
        <StarIcon style={yellowStarStyle} />
        <StarIcon style={yellowStarStyle} />
      </div>
      <p className="text-gray-700 font-inter text-base font-normal leading-7 max-w-[270px] pt-8 pl-7">
        Vast Conference is second to none. Lorem ipsum dolor sit amet, vnbvbv
        consectetur adipiscing elit. Congue pharetra non.
      </p>
      <div className="flex flex-row gap-5 mb-14 mt-14 pl-7">
        <Image src={reviewman} alt="men" />
        <div className="">
          <p className="text-gray-700 font-inter text-base font-medium leading-normal">
            Natalie Hernandez
          </p>
          <p className="text-gray-400 font-inter text-base font-normal leading-normal ">
            CEO @Stacksy
          </p>
        </div>
      </div>
    </div>
  );
};
export default ReviewTab;
