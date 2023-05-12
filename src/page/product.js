import React from 'react'

export default function Product() {
  return (

<div id="demo" class="carousel slide" data-bs-ride="carousel">

 
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
    <div>
    <div className="row"> 
    <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./image/2.jpg" alt="1" class="d-block w-100" />
    </div>
    <div class="carousel-item">
      <img src="./image/3.jpg" alt="2" class="d-block w-100" />
    </div>
    <div class="carousel-item">
      <img src="./image/4.jpg" alt="3" class="d-block w-100" />
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
  

     <center><h1>ขายบ้าน</h1></center> 
        <div className="col-sm-4">
        <img src='./image/2.jpg' height="200"/>
            <h3>บ้านกบ 250 บาท</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
        </div>
        <div className="col-sm-4">
        <img src='./image/3.jpg' height="200"/>
        <h3>บ้านหมา 250 บาท</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
        </div>
        <div className="col-sm-4">
        <img src='./image/4.jpg' height="200"/>
        <h3>บ้านหมีพู 250 บาท</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
        </div>
        
    </div>
</div>
  )
}