
import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const PlaceDetails = () => {
    const [selectedDate, handleDateChange] = useState(new Date("2020/01/01"));
    const [endDate, endDateChange] = useState(new Date("2020/02/10"));
    return (
        <div  className="container pt-5 p-5">
           <div className="row d-flex justify-content-between">
               <div className="col-md-5 p-5 ">
                   <h2>Welcome</h2>
                   <p>Cox's Bazar is a town in the southest coast in Bangladesh.It's known for it's very long sandy beachfront.stretching from sea Beach in the north to kolatoli beach in the south.Aggameda khyang  monastery is home to bronze statuse an countries oldd Buddhits, manuscripts. South of town in the tropical rainforest of himchari naational park has water falls and many birds...</p>
               </div>
               <div className="col-md-4 p-5 " style={{boxShadow:"0 15px 25px -6px rgba(0,0,0,0.25"}}>
               <form> 
                   <label htmlFor="">Origin</label><br/>
                   <input className="form-control" type="text" name="" id=""/>
                   <label htmlFor="">Destination</label><br/>
                   <input className="form-control" type="text" name="" id=""/>
                </form>   

               <form action="">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <div className="d-flex">
                    <p>From</p>
                    <p style={{marginLeft:"108px"}}>To</p>
                    </div>
                    <div className="d-flex ">
                    <DatePicker value={selectedDate} className={{width:"80px"}} onChange={handleDateChange} />
                     <DatePicker value={endDate} onChange={endDateChange} />
                    </div>
                    <Link to="/hotels">
                    <Button style={{width:"100%",marginTop:"12px"}} variant=" bg-warning">Start Booking</Button> 
                    </Link>  
                                
                </MuiPickersUtilsProvider>
                </form>
               </div>    
           </div>
           
        </div>
    );
};

export default PlaceDetails;
