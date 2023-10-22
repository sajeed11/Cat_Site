import { useGetFirstImagesQuery, useGetBreedsQuery } from "../redux/services/Cat"

import SearchBar from "./SearchBar";

const Images = () => {
    const { data, error, isFetching } = useGetFirstImagesQuery();
    const { data1 } = useGetBreedsQuery();
    console.log(data1);
    //console.log(data);
    //csonsole.log(data1);

    // const [searchResults, setSearchResults] = useState([]);

    // const handleSearch = (query) => {
    //     // Simulate a search request and update the results
    //     const { data } = useGetImagesQuery(query); // Replace with actual search logic
    //     setSearchResults(data);
    // };

    if (isFetching) return <div>Loading...</div>;
    if (error) return <div>Oh no, there was an error</div>;
    return (
        <div>
            <div>
                <SearchBar />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md">
                        <img src={item.url} alt={item.id} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-4">
                            {/* Additional card content can be added here */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Images