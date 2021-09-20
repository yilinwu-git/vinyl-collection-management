import React, {useContext} from 'react';
import VinylForm from './VinylForm';
import { useParams } from 'react-router-dom';
import VinylsContext from '../context/VinylsContext';


const EditVinyl = ({history}) => {

    const {vinyls, setVinyls} = useContext(VinylsContext);
    const { id } = useParams();
    const vinylToEdit = vinyls.find((vinyl) => vinyl.id === id);
  
    const handleOnSubmit = (vinyl) => {
        const filteredVinyls = vinyls.filter((vinyl) => vinyl.id !== id);
        setVinyls([vinyl, ...filteredVinyls ]);
        history.push('/');
      };
    


    return (
        <div>
            <VinylForm vinyl={vinylToEdit} handleOnSubmit={handleOnSubmit} />
        </div>
    )
}

export default EditVinyl
