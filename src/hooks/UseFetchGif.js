import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGif = (category) =>{

    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(true);

    const getImage = async () =>{

        const newImage = await getGifs(category);
        setGifs (newImage);
        setLoading(false);
    }

    useEffect( () =>{
        getImage()
    },[])


    return(
        {
            gifs,
            loading,
            setGifs,
        }
    );
}