import React, { useContext } from 'react';
import _ from 'lodash';
import Vinyl from './Vinyl';
import VinylsContext from '../context/VinylsContext';


const VinylsList = () => {

    const {vinyls, setVinyls} = useContext(VinylsContext);
  
    const handleRemoveVinyl = (id) => {
        setVinyls(vinyls.filter((vinyl)=> vinyl.id !== id))
    };

    return (
        <>
            <div className="vinyl-list">
                {!_.isEmpty(vinyls) ? (
                    vinyls.map((vinyl) => (
                        <Vinyl key={vinyl.id} {...vinyl} handleRemoveVinyl={handleRemoveVinyl} />
                    ))
                    ) : (
                    <div className="message slide-in-bottom">
                        <p >no vinyls available.</p> 
                        <p>Please add some vinyls.</p>
                    </div>
                )}
            </div>
        </>
    )
};

export default VinylsList;
