import { useGetBreedsQuery } from '../redux/services/Cat';
import { useDispatch } from 'react-redux';
import { setSelectedItem } from '../redux/actions';

const SearchBar = () => {
    const { data, error, isFetching } = useGetBreedsQuery();
    const dispatch = useDispatch();

    const handleSelect = (event) => {
        dispatch(setSelectedItem(event.target.value));
    };

    if (isFetching) return <div>Loading...</div>;
    if (error) return <div>Oh no, there was an error</div>;
    return (
        <div>
            <select onChange={handleSelect}>
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

export default SearchBar;