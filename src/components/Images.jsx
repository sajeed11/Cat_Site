import { useEffect } from "react";
import { useGetFirstImagesQuery, useGetBreedsQuery, useGetImagesQuery } from "../redux/services/Cat"
import { connect } from "react-redux";

import SearchBar from "./SearchBar";




const Images = ({ selectedItem }) => {
    const { data, error, isFetching } = useGetFirstImagesQuery();
    //const { data1 } = useGetImagesQuery();
    //const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchImages = async () => { useGetImagesQuery(selectedItem) };
        if (selectedItem) {
            // Fetch images based on selectedItem and update component state
            fetchImages();
        }
    }, [selectedItem]);

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

const mapStateToProps = (state) => ({
    selectedItem: state.selectedItem, // Access the shared state from the Redux store
});

export default connect(mapStateToProps)(Images);