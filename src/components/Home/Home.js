import React, { useState } from 'react';
import places from '../../fakeData/Location';
import Places from '../Place/Places';
 
const Home = () => {
   
    const places = [
        {
            title:"Cox's Bazar",
            img:"https://i.ibb.co/0G0Dkfm/Sajek.png",
            id:1,
            details:"Cox's Bazar is a town in the southest coast in Bangladesh.It's known for it's very long sandy beachfront.stretching from sea Beach in the north to kolatoli beach in the south.Aggameda khyang  monastery is home to bronze statuse an countries oldd Buddhits, manuscripts. South of town in the tropical rainforest of himchari naational park has water falls and many birds... "
           
        },
        {
            title:"Sreemongol",
            img:"https://i.ibb.co/xGCp1QL/Sreemongol.png",
            id:2,
            details:"Cox's Bazar is a town in the southest coast in Bangladesh.It's known for it's very long sandy beachfront.stretching from sea Beach in the north to kolatoli beach in the south.Aggameda khyang  monastery is home to bronze statuse an countries oldd Buddhits, manuscripts. South of town in the tropical rainforest of himchari naational park has water falls and many birds... "
        },
        {
            title:"Sajek",
            img:"https://i.ibb.co/PwhLBgW/sundorbon.png",
            id:3,
            details:"Cox's Bazar is a town in the southest coast in Bangladesh.It's known for it's very long sandy beachfront.stretching from sea Beach in the north to kolatoli beach in the south.Aggameda khyang  monastery is home to bronze statuse an countries oldd Buddhits, manuscripts. South of town in the tropical rainforest of himchari naational park has water falls and many birds... "
        }
    ];

    return (
        <div className="container pt-5">
        <div  className="row d-flex container">
            <div  className="col-md-4">          
            <h1>Cox's Bazar'</h1>
            <p>Cox's Bazar is a town in the southest coast in Bangladesh.It's known for it's very long sandy beachfront.stretching from sea Beach in the north to kolatoli beach in the south.Aggameda khyang  monastery is home to bronze statuse an countries oldd Buddhits, manuscripts. South of town in the tropical rainforest of himchari naational park has water falls and many birds...</p>
            </div>
        <div className="col-md-2 d-flex"> 

         {
             places.map(place => <Places key={place.id} place={place}></Places>)
         }
        </div>
        </div>
        </div>
    );
};
export default Home;