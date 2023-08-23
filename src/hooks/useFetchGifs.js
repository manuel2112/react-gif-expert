import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    const getImages = async() => {

        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []); 
    
    return {
        images,
        isloading
    }
    

}
