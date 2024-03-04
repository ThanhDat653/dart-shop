import { useDispatch } from "react-redux";
import filtersSlide from "../../redux/slices/filtersSlide";
import useDebounce from "../../hook/useDebounce";

const SearchBar = () => {
   const dispatch = useDispatch();
   // const [searchText, setSearchText] = useState("");

   const handleSearch = useDebounce((searchText) => {
      dispatch(filtersSlide.actions.searchFilterChange(searchText));
   }, 500);

   return (
      <div className="flex-1 flex flex-row-reverse mr-4 border border-gray-500 rounded-sm justify-end items-center h-[33px] sm:block sm:h-auto sm:border-0">
         <input
            type="text"
            placeholder="Search products"
            className="flex-1 text-gray-700 h-full font-normal text-[16px] leading-[16px] box-border border-0 sm:border-b border-transparent outline-0 ring-0 focus:ring-0 focus:border-gray-600 transition-colors"
            // value={searchText}
            onChange={(e) => {
               handleSearch(e.target.value);
               // setSearchText(e.target.value);
               console.log("after function handleSearch");
            }}
         ></input>

         <i className="fa-solid fa-magnifying-glass ml-3 text-base text-gray-700 cursor-pointer hover:text-red-700 transition-colors sm:m-0"></i>
      </div>
   );
};

export default SearchBar;
