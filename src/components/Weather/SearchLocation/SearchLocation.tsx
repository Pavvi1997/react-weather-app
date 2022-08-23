import { FaArrowRight } from "react-icons/fa";
import './SearchLocation.scss'

type SearchLocationProps = {
    searchCity: any;
    city: string;
    setCity: any;
}

const SearchLocation = ({ searchCity, city, setCity }: SearchLocationProps) => {
    return (
        <div className="finder">
            <form id="search-city" onSubmit={searchCity}>
                <input
                    type="search"
                    placeholder="Enter the location"
                    value={city}
                    onChange={(event) => {
                        setCity(event.target.value);
                    }}
                />
                <button type="button" onClick={searchCity}>
                    <FaArrowRight color="#f5f2f2" />
                </button>
            </form>
        </div>
    )
}
export default SearchLocation