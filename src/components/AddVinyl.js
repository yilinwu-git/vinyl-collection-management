import React , {useContext} from 'react';
import VinylForm from './VinylForm';
import VinylsContext from '../context/VinylsContext';

const AddVinyl = ({history}) => {

    const {vinyls, setVinyls,} = useContext(VinylsContext);

    const handleOnSubmit = (vinyl) =>{
        setVinyls([...vinyls, vinyl]);
        history.push('/');
    };

    return (        
        <>
            <VinylForm handleOnSubmit={handleOnSubmit} />
         </>
    )
}

export default AddVinyl
