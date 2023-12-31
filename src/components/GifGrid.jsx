import PropTypes from 'prop-types';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const { images, isloading } = useFetchGifs(category);

    console.log(isloading);



    return (
        <>
            <h3>{ category }</h3>

            {
                isloading && (<h2>CARGANDO...</h2>)
            }
            
            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem key={image.id} { ...image } />
                    ))
                }
            </div>
                
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
