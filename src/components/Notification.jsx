
import { navitems } from "../constants"

const Notification = () => {
    const column1 = navitems.slice(0, 2);
    const column2 = navitems.slice(2, 5);

    console.log(column1, column2)
    return (
        <>
            <div className="absolute top-50 right-20 w-[400px] h-[250px] bg-white rounded-[20px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-5 ">
                    <div>
                        {column1.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                className="block py-2 hover:underline text-btnColor cursor-pointer text-lg font-semibold"
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                    <div>
                        {column2.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                className="block py-2 hover:underline
                                text-btnColor cursor-pointer text-lg font-semibold"
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notification