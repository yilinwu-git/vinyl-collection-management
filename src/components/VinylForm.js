import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';


const VinylForm = (props) => {

    const[vinyl, setVinyl] = useState({
            albumName: props.vinyl ? props.vinyl.albumName : '',
            artist: props.vinyl ? props.vinyl.artist: '',
            released: props.vinyl ? props.vinyl.released: '',
            country: props.vinyl ? props.vinyl.country: '',
            label: props.vinyl ? props.vinyl.label: '',
            genre: props.vinyl ? props.vinyl.genre: '',
    });

    const [errorMsg, setErrorMsg] = useState('');
    const { albumName, artist, released, country, label, genre } = vinyl;



    const handleOnSubmit = (e) => {
        e.preventDefault();

        const values = [albumName, artist, released, country, label, genre];
        let isAllFilled = true;

        values.forEach((value)=> {
            if(value === '' || value === '0'){
                isAllFilled = false;
            }
        });

        if (isAllFilled) {
            
            const regExp = new RegExp(/^(19|20)\d{2}$/);
            
            if (regExp.test(released)) {                
                
                const vinylToSubmit = {
                    id: uuidv4(),
                    albumName, 
                    artist, 
                    released, 
                    country,
                    label,             
                    genre,
                };
                // submit vinyl to localstoreage
                props.handleOnSubmit(vinylToSubmit);
                setErrorMsg("");

            }  else {
                setErrorMsg("Please Enter A Valid Year");
                window.scrollTo({top: 0, behavior: 'smooth'});
            }
        }
        else {
            setErrorMsg("Please fill all the fields");
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setVinyl((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }


    return (
       
        <>
            {errorMsg && <p className="errorMsg blinking">{errorMsg}</p>}

            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="album">
                    <Form.Label>Album</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="albumName"
                        value={albumName}
                        placeholder="Enter Album Name"
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="artist">
                    <Form.Label>Artist(s)</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="artist"
                        value={artist}
                        placeholder="Enter Artist Name(s)"
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="released">
                    <Form.Label>Release Year</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="released"
                        value={released}
                        placeholder="Enter Release Year e.g.,2020 "
                        onChange={handleInputChange}
                    />
                </Form.Group>


                <Form.Group controlId="country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="country"
                        value={country}
                        placeholder="Enter Country"
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="label">
                    <Form.Label>Label</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="label"
                        value={label}
                        placeholder="Enter Label"
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="genre">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="genre"
                        value={genre}
                        placeholder="Enter Genre"
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button variant="" type="submit" className="btn-hvr-sweep-to-right">
                    Submit
                </Button>
            </Form>
        </>    
       
    )
}

export default VinylForm
