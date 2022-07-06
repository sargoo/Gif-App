import { useEffect, useState } from "react";
import{getGifs} from "../helpers/getGifs";

export const useFetchGif = (category) => {
    
    const [gif,setGif] = useState([]);
    const [loading,setLoading] = useState(true);

    const getImage = async () => {
        const newImage = await getGifs(category);
        setGif(newImage);
        setLoading(false);
    }
    
    useEffect(() =>{
        getImage ()
    }, []);

    return( {
        gif,
        loading,
    }
    );
}