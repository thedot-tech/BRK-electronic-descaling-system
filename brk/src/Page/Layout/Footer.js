import React from 'react'
import "./Footer.css"
import Logo from "../src/logo@2x.png"
export default function Footer() {
    return (
        <div>
            <footer class="footer">
  <div class="footer-left col-md-4 col-sm-6">
    <p class="about">
      <span> About the company</span> BRK SYSTEMS ENTERPRISE
107/-2nd FLOOR, DHIVYA SABARY COMPLEX, SUBBAN STREET, SCHEME ROAD, THENI, TAMIL NADU – 625531. INDIA

    </p>
    <div class="icons">
      <a href="#"><i class="fa fa-facebook"></i></a>
      <a href="#"><i class="fa fa-twitter"></i></a>
      <a href="#"><i class="fa fa-linkedin"></i></a>
      <a href="#"><i class="fa fa-google-plus"></i></a>
      <a href="#"><i class="fa fa-instagram"></i></a>
    </div>
  </div>
  <div class="footer-center col-md-4 col-sm-6">
    <div>
      <i class="fa fa-map-marker"></i>
      <p><span> GST 33HWBPK2258G1ZN
 </span> Email : brksystem1@gmail.com</p>
    </div>
    <div>
      <i class="fa fa-phone"></i>
      <p>Contact : +91-9842993606</p>
    </div>
    <div>
      <i class="fa fa-envelope"></i>
      <p><a href="#">brksystem1@gmail.com</a></p>
    </div>
  </div>
  <div class="footer-right col-md-4 col-sm-6">
    <h2> <img height= '100'
    width= '200' src={Logo}/></h2>
  

  </div>
  <div>
  <p class="name text-center"> BRK Systems &copy; 2021</p>
  </div>
</footer>
        </div>
    )
}
