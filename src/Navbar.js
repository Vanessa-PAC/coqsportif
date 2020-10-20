import React from 'react'
import App from './App'


function Navbar() {
    return (
        <div>
        <div class="container-fluid bg-light">
        <ul class="nav justify-content-end">
         <li class="nav-item">
           <a class="nav-link ">Livraison standard gratuite pour toute commande supérieure à 90€</a>
         </li>
         <li class="nav-item">
           <a class="nav-link">Trouver un point de vente</a>
         </li>
         <li class="nav-item">
           <a class="nav-link">Suivi de commande</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" >S'identifier'</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" >Mon panier</a>
         </li>
        </ul>
       </div>  
          
       <nav class="navbar navbar-expand-lg navbar-light bg-white">
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
         <img src="images/logo-1.png" class="img-fluid" width="76px" height="50px"></img>
           <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
             <li class="nav-item active">
               <a class="nav-link" id="normal">TEXTILES <span class="sr-only">(current)</span></a>
             </li>
             <li class="nav-item">
               <a class="nav-link" id="normal">CHAUSSURES</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" id="normal" tabindex="-1" aria-disabled="true">SPORTS</a>
             </li>
           </ul>
           <form class="form-inline my-2 my-lg-0">
             <input class="form-control mr-sm-2" type="search" placeholder="Ma recherche..." aria-label="Search"/>
             <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
           </form>
         </div>
       </nav>
    </div>
    )
}

export default Navbar