

import PetsIcon from '@mui/icons-material/Pets';

const GetLife = () => {
    return (
        <div className="w-[250px] justify-around bg-black bg-opacity-50 text-white font-bold rounded-3xl p-4 flex items-center space-x-4">
            <PetsIcon sx={{
                width: "40px",
                height: "40px",
            }} />
            <p className="text-white text-3xl font-poppins">Cat life</p>
        </div>

    )
}

export default GetLife