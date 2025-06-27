import PetsIcon from '@mui/icons-material/Pets';

const GetLife = () => {
    return (
        <div className="w-72 bg-black bg-opacity-50 text-white font-bold rounded-3xl p-4 m-10 flex items-center justify-around">
            <PetsIcon sx={{
                width: "40px",
                height: "40px",
            }} />
            <p className="text-white text-2xl font-poppins">Cat Life Matter</p>
        </div>

    )
}

export default GetLife