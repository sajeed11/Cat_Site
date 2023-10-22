// SearchBar.js
import { useState } from 'react';
import { useGetBreedsQuery } from '../redux/services/Cat';

const SearchBar = () => {
    const [selectedItem, setSelectedItem] = useState('');
    const fetchItems = useGetBreedsQuery();
    //console.log(fetchItems);
    return (
        <div>
            <select
                value={selectedItem}
                onChange={(e) => setSelectedItem(e.target.value)}
            >
                <option value="">Select an item</option>
                {fetchItems.data.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SearchBar;
