
import { useGetBreedsQuery } from '../redux/services/Cat';
import { setSelectedItem } from '../redux/actions';
import { connect } from 'react-redux';

const SearchBar = ({ selectedItem, setSelectedItem }) => {
    const { data, error, isFetching } = useGetBreedsQuery();
    const handleSelect = (item) => {
        setSelectedItem(item);
        //console.log(item); // Dispatch the action to update the selectedItem state
    };


    console.log(selectedItem);

    if (isFetching) return <div>Loading...</div>;
    if (error) return <div>Oh no, there was an error</div>;
    return (
        <div>
            <select
                value={selectedItem}
                onChange={(e) => handleSelect(e.target.value)}
            >
                <option value="">Select an item</option>
                {data.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

const mapStateToProps = (state) => ({
    selectedItem: state.selectedItem, // Access the shared state from the Redux store
});

export default connect(mapStateToProps, { setSelectedItem })(SearchBar);
