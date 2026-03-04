
import React from 'react'

const Header = () => {
  return (
  <div className="Header">
  <div className ='headerSection'>
   <div className = "left">
    <div className = "title">
      <h1>Shopvia</h1>
    </div>
    <div className ="search">
      <input type="text"  placeholder='Search...'/> 
    </div> 
   </div>
   <div className ="center"> 
    <ul>
      <li>Become a Supplier</li>
      <li>Investor Relations</li>
    </ul>
   </div>
   <div className ="right">
    <div className ="profile">
     Profile
    </div>
    <div className ="cart">
      Cart
    </div>
   </div>
   </div>

    <div className ="headerSection2">
    <div className="left2">
     <ul>
      <li>Popular</li>
      <li>kurti, Saree & Lehenga</li>
      <li>Women Western</li>
      <li>Lingerie</li>
      </ul>
    </div>
      <div className = "center2">
      <ul>
      <li>Men</li>
      <li>Kids & Toys</li>
      <li>Home and Kitchen</li>
      <li>Beauty and Health</li>
      </ul>
    </div>
    <div className ="right2">
      <ul>
      <li>Jewelleries and Accessiores</li>
      <li>Bags and Footware</li>
      <li>Electronics</li>
      <li>Watch</li>
    </ul>
    </div>
   </div>
  </div>
  
  )
}

export default Header
