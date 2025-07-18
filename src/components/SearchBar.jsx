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
        <div className='flex justify-center items-center mt-20'>
            <div className='relative inline-block text-gray-700 '>
                <select onChange={handleSelect} className='h-12 block appearance-none w-[1000px] bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"'>
                    <option value="">Select an item</option>
                    {data.map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5z" /></svg>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;