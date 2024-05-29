import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
	useGetImagesQuery,
	useGetFirstImagesQuery,
} from "../redux/services/Cat";
import SearchBar from "./SearchBar";
import styles from "../styles";

export const CatImageCard = ({ cat }) => {
	return (
		<div className="max-w-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 cursor-pointer">
			<div className="relative">
				{/* Image */}
				<img
					src={cat.url}
					alt={cat.id}
					className="rounded-lg shadow-md w-full h-64 object-cover"
				/>

				{/* Overlay for additional effects */}
				<div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-60 transition-opacity duration-300"></div>

				{/* Title and Info */}
				<div className="absolute bottom-0 left-0 p-4 text-white">
					<h2 className="text-2xl font-semibold mb-2">{cat.breeds[0].name}</h2>
					{/* Additional information can be added here */}
				</div>
			</div>
		</div>
	);
};

CatImageCard.propTypes = {
	cat: PropTypes.object.isRequired,
};

export const CatImageCardWithoutProps = ({ cat }) => {
	return (
		<div className="max-w-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 cursor-pointer">
			<div className="relative">
				{/* Image */}
				<img
					src={cat.url}
					alt={cat.id}
					className="rounded-lg shadow-md w-full h-64 object-cover"
				/>

				{/* Overlay for additional effects */}
				<div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-60 transition-opacity duration-300"></div>
			</div>
		</div>
	);
};

CatImageCardWithoutProps.propTypes = {
	cat: PropTypes.object.isRequired,
};

const Images = () => {
	const dispatch = useDispatch();
	const selectedItem = useSelector((state) => state.breeds.selectedItem);
	const { data: firstImages, isFetching: firstImagesIsFetching } =
		useGetFirstImagesQuery();
	const { data, error } = useGetImagesQuery(selectedItem);
	// console.log(data);
	// useEffect(() => {
	//     dispatch(useGetImagesQuery(selectedItem));
	// }, [selectedItem, dispatch]);

	if (firstImagesIsFetching) return <div>Loading...</div>;
	if (error) return <div>Oh no, there was an error</div>;
	return (
		<div className={`${styles.section} ${styles.marginX}`}>
			<SearchBar selectedItem={selectedItem} setSelectedItem={dispatch} />
			<div className=" flex flex-wrap -m-2">
				{selectedItem
					? data.map((item) => <CatImageCard cat={item} key={item.id} />)
					: firstImages.map((item) => (
						<CatImageCardWithoutProps cat={item} key={item.id} />
					))}
			</div>
		</div>
	);
};

export default Images;
