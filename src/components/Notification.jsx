
import { Link } from "react-router-dom";
import { navitems } from "../constants"

const Notification = () => {
	return (
		<div
			className="flex flex-col items-center	notification border-solid border-x-2 border-b rounded-b-md shadow-sm p-2 w-48 z-20"
			role="menu"
			aria-label="Notification Menu"
		>
			<div className="flex flex-col items-start gap-4 w-full">
				{navitems.map((item) => (
					<Link
						key={item.id}
						to={`/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
						className="text-sm sm:text-base text-gray-800 hover:text-blue-600 transition-colors duration-200"
					>
						{item.title}
					</Link>
				))}

			</div>

			<div className="mt-4 flex justify-start w-full">
				<Link
					to="/images"
					className="text-sm text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-200"
				>
					See More →
				</Link>
			</div>
		</div>
	);
};
export default Notification