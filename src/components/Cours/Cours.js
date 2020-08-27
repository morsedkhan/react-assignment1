import React from 'react';
import './Cours.css'
const Cours = (props) => {

  //  console.log(props);

    const {title, img, price} = props.product;
    return (
        





// <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" href="#">Navbar</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav mr-auto">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Link</a>
//       </li>
//       <li class="nav-item dropdown">
//         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Dropdown
//         </a>
//         <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//           <a class="dropdown-item" href="#">Action</a>
//           <a class="dropdown-item" href="#">Another action</a>
//           <div class="dropdown-divider"></div>
//           <a class="dropdown-item" href="#">Something else here</a>
//         </div>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//       </li>
//     </ul>
//     <form class="form-inline my-2 my-lg-0">
//       <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
//       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
//   </div>
// </nav>









<div className="col-md-4">
    <div className="card m-2 ">
      <img src={img} className="card-img-top imgClass" alt="..."/>
      <div className="card-body">
        <p className="card-title">{title.substring(15,0)+"..."}</p>
        <p className="card-text">${price}</p>
        <button className="btn btn-primary" onClick={() =>props.handleAddproduct(props.product)} >
            Add to card</button> </div>
    </div>
 </div>
  );
};

export default Cours;