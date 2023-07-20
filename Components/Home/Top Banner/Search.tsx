import SearchIcon from "@mui/icons-material/Search";


const Search: React.FC = () => {
  return (
    <div className="max-w-[1200px] w-full h-24 flex flex-col md:flex-row justify-evenly border-r border-solid border-white shadow-[0px_25px_50px_0px_rgba(0, 0, 0, 0.05)] items-center m-auto bg-white shadow-lg rounded-xl">
      <div className="flex flex-col border-r border-solid border-black border-opacity-25 justify-center items-start ">
        <p className="text-gray-700 font-Inter text-xs font-semibold leading-normal">
          Location
        </p>
        <input
          type="text"
          placeholder="Where are you going?"
          className="text-gray-400 font-Inter text-base font-normal leading-normal w-[200px] border-none outline-none justify-center items-center"
        />
      </div>
      <div className="flex flex-col border-r border-solid border-black border-opacity-25 justify-center items-start px-5">
        <p className="text-gray-700 font-Inter text-xs font-semibold leading-normal">
          Check In
        </p>
        <input
          type="text"
          placeholder="Add Dates"
          className="text-gray-400 font-Inter text-base font-normal leading-normal border-none outline-none justify-center items-center w-[150px]"
        />
      </div>
      <div className="flex flex-col border-r border-solid border-black border-opacity-25 justify-center items-start px-5">
        <p className="text-gray-700 font-Inter text-xs font-semibold leading-normal">
          Check Out
        </p>
        <input
          type="text"
          placeholder="Add Dates"
          className="text-gray-400 font-Inter text-base font-normal leading-normal border-none outline-none justify-center items-center w-[150px]"
        />
      </div>
      <div className="justify-center items-start px-5 ">
        <p className="text-gray-700 font-Inter text-base font-semibold leading-normal">
          Rent WorkSpace
        </p>
      </div>
      <div>
        <button className="max-w-56 px-4 w-full h-14 flex flex-row justify-center items-center bg-[#F85A47] font-white font-normal text-base text-white rounded-md">
          564 property found
          <SearchIcon
            sx={{ color: "#fff", fontSize: "26px", paddingLeft: "8px" }}
          />
        </button>
      </div>
    </div>
  );
};
export default Search;
