import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetImagesQuery } from '../redux/services/Cat';
import SearchBar from './SearchBar';

const Images = () => {
    const dispatch = useDispatch();
    const selectedItem = useSelector((state) => state.breeds.selectedItem);
    const { data, error, isFetching } = useGetImagesQuery(selectedItem);
    console.log(data);
    // useEffect(() => {
    //     dispatch(useGetImagesQuery(selectedItem));
    // }, [selectedItem, dispatch]);

    if (isFetching) return <div>Loading...</div>;
    if (error) return <div>Oh no, there was an error</div>;
    return (
        <div>
            <SearchBar selectedItem={selectedItem} setSelectedItem={dispatch} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.map((item) => (
                    <img src={item.url} key={item.id} title={item.name} />
                ))}
            </div>
        </div>
    );
};

export default Images;