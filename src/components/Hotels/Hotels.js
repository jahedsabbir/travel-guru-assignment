import React from 'react';
import img from '../../Image/Rectangle 26.png'
import img2 from '../../Image/Rectangle 27.png'
import img3 from '../../Image/Rectangle 28.png'
import Maps from '../Map/Maps';

const Hotels = () => {
    return (
        <div className="container pt-5 pb-5">
            <div className="row">
                <div className="col-md-6">
                    <p>252 stays Apr 13-17 3 guest</p>
                    <h3>Stay In Cox's Bazar</h3>
                     <div className="d-flex">                                   
                    <div className="mr-2 ">
                        <img src={img} style={{width:'250px'}} alt=""/> 
                    </div>
                   <div>            
                    <h5>Light bright airy apt and safe peaceful stay</h5>
                    <p>4 guest 2 bedrooms 2 beds 2 baths</p>
                    <p>Wif air conditioning kitchen</p>
                    <p>Cancellation flexiblity available</p>
                    <p>4.9[20] <span>$34/night</span></p>
                    </div>
                    </div> 
                    <div className="d-flex"> 
                    <div className="mr-2">
                    <img src={img2} style={{width:'250px'}} alt=""/>
                    </div>
                   <div>            
                    <h5>Apartment in lost panaroma</h5>
                    <p>4 guest 2 bedrooms 2 beds 2 baths</p>
                    <p>Wif air conditioning kitchen</p>
                    <p>Cancellation flexiblity available</p>
                    <p>4.9[20] <span>$34/night</span></p>
                    </div>
                    </div>
                    <div className="d-flex"> 
                    <div className="mr-2">
                    <img src={img3} style={{width:'250px'}} alt=""/>
                    </div>
                   <div>            
                    <h5>AR lounge and pool (r&r + b&b)</h5>
                    <p>4 guest 2 bedrooms 2 beds 2 baths</p>
                    <p>Wif air conditioning kitchen</p>
                    <p>Cancellation flexiblity available</p>
                    <p>4.9[20] <span>$34/night</span></p>
                    </div>
                    </div>
                </div>
                <div className="col-md-5">
                
                <Maps></Maps>
                </div>               
            </div>
        </div>
         
    );
};

export default(Hotels);
