import React from 'react';
import '../Products/Products.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row } from 'react-bootstrap';
// import CategoryItems from '../../components/CategoryItems'

export default class Products extends React.Component {
 render(){
   return(
     <div className="Bakhour--products">
<div class="wrapper">
     <header>
<div class="wrapper-text-box">
<p className="title-header-bakhour">Our Work and designs before and after </p>
</div>
    </header>
</div>

<div className>
<div class="row">
<div class="column">
<img  src='/Image/car4.jpg' id="row-pic"/>
</div>




<div class="column">
<img  src='/Image/car5.webp' id="row-pic"/>
</div>




<div class="column">
<img  src='/Image/car6.jpg' id="row-pic"/>

</div>



<div class="column">
<img  src='/Image/car7.jpg' id="row-pic"/>
</div>
</div>


<center><div class="wrapper">
<header >
<div class="wrapper-text-box">
<p className="title-header-bakhour-skincare">Our skincare essentials are designed to make you look and feel your glowy, dewy best before you even think about makeup.</p>
</div>
</header>
</div>
</center>



<div class="row">
<div class="column">
<img  src='/Image/range1.jpg' id="row-pic"/>
<p1 className="title-header-bakhour1">Before</p1>
</div>



<div class="column">
<img  src='/Image/range2.jpg' id="row-pic"/><p1 className="title-header-bakhour1">After</p1>
</div>




<div class="column">
<img  src='/Image/range5.jpg' id="row-pic"/>
<p1 className="title-header-bakhour1">Before</p1>
{/* <p className="title-header-bakhour">oil serum hybrid</p> */}
</div>


<div class="column">
<img  src='/Image/range6.jpg' id="row-pic"/>
<p1 className="title-header-bakhour1">After</p1>
{/* <p className="title-header-bakhour">conditioning face wash</p> */}
</div>



<div class="column">
<img  src='/Image/range7.jpg' id="row-pic"/><p1 className="title-header-bakhour1">Before</p1>
{/* <p className="title-header-bakhour">eye+lip plumping cream</p> */}
</div>



<div class="column">
<img  src='/Image/range8.jpg' id="row-pic"/>
<p1 className="title-header-bakhour1">After</p1>
{/* <p className="title-header-bakhour">buildable hydrating creme</p> */}
</div>


<div class="column">
<img  src='/Image/range11.jpg' id="row-pic"/>
<p1 className="title-header-bakhour1">Before</p1>
{/* <p className="title-header-bakhour">acid face serum</p> */}
</div>


<div class="column">
<img  src='/Image/range12.jpg' id="row-pic"/>
<p1 className="title-header-bakhour1">After</p1>

</div>
</div>
</div>
</div>


   
 
   )
 }
}

  

   