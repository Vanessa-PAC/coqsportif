import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // 
<body>
<div class="container-fluid bg-light">
 <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link " href="#">Livraison standard gratuite pour toute commande supérieure à 90€</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Trouver un point de vente</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Suivi de commande</a>
  </li>
  <li class="nav-item">
    <a class="nav-link"  href="#">S'identifier'</a>
  </li>
  <li class="nav-item">
    <a class="nav-link"  href="#">Mon panier</a>
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
        <a class="nav-link" id="normal" href="#">TEXTILES <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="normal" href="#">CHAUSSURES</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="normal" href="#" tabindex="-1" aria-disabled="true">SPORTS</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Ma recherche..." aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

<div class="jumbotron jumbotron-fluid">
<img src="images/fond.png" class="img-fluid" alt="responsive image"></img>
</div>

</body>
  );
}

export default App;
