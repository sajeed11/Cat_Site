import { useGetBreedsQuery } from "../redux/services/Cat"

const Images = () => {
    const { data, error, isFetching } = useGetBreedsQuery();
    console.log(data);
    return (
        <div>Images</div>
    )
}

export default Images