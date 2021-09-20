import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Vinyl = ({
    id,
    albumName, 
    artist, 
    released, 
    country,
    label,             
    genre,
    handleRemoveVinyl,

}) => {

    const history = useHistory();

    return (
        <Card style={{ width: '18rem' }} className="record">
            <Card.Body>
                <Card.Title className="record-title">{albumName}</Card.Title>
                    <div className="record-details">
                        <div>Artist: {artist}</div>
                        <div>Release Year: {released}</div>
                        <div>Country: {country} </div>
                        <div>Label: {label} </div>
                        <div>Genre: {genre} </div>
                    </div>
                <Button variant="" className=" btn-group btn-group_edit" onClick={()=> history.push(`/edit/${id}`)}>Edit</Button>{' '}
                <Button variant="" className=" btn-group  btn-group_delete" onClick={() => handleRemoveVinyl(id)}>Delete</Button>
            </Card.Body>
        </Card>
    )
}

export default Vinyl
