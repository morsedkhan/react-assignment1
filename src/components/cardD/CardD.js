import React from 'react';

const CardD = (props) => {
    const {title,price, img} = props.CardD;
    return (
        // <div>
        //     <h1>This{props.CardD.title}</h1>
            
        // </div>
        <div className="shadow-sm p-3 mb-5 bg-white rounded card mb-3" style={{margin:'0 auto'}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={img} className="card-img" style={{width:"150%"}} alt="img"/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body" style={{marginLeft:"20px"}}>
                        <h5 className="card-title " style={{fontSize:"20px"}}>{title.substring(15,0)+"..."}</h5>
                        <p className="card-text">price : ${price}</p>
                    </div>
                    </div>
                </div>
            </div>
    );
};

export default CardD;