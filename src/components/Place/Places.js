import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

export default function Places({place}){

    const history = useHistory();
    const handleBook = (id) => {
        history.push(`/placedetails/${id}`);
    }

    return (
        
        <div>       
              <div className="ml-1 container">
                <img style={{width:"200px"}} src={place.img} alt=""/>
                <h3> {place.title}</h3>          
                <Button className="w-100" onClick={() => handleBook(place.id)} variant=" bg-warning" color="primary">
                    Book
                </Button>
              </div>   
        </div>
    );
};



