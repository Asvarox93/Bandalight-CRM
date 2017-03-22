import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sbc-footer',
  template: `
    <footer class="fluid-container">
    <div class="navbar navbar-toggleable-md navbar-light  " id="navbarNav">
    <ul class="navbar-nav mx-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">REGULAMIN</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">POLITYKA PRYWATNOŚCI</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">COOKIES</a>
      </li>
    </ul>
  </div>
  <div class="row">
  <div class="col-sm-12 text-center ">
  <img class="img-fluid" src="../../../assets/footer/flogo.png">
  </div>
  <div class="col-sm-12">
  <p class="text-center">Darmowy CRM Online &#9400; Bandalight Sp. z o.o. <br> wszelkie prawa zastrzeżone. </p>
 </div>
  </div>
 </footer>
  `,
  styles: [`
    footer{
      color: #fff;
      height: 300px;
      font-size:0.55em;
      background-image: url("../../../assets/footer/fbackground.jpg");
      background-size: cover;
      background-repeat: no-repeat;
    }
    .navbar{
      padding-top:50px;
    }
    img{
      margin-bottom: 20px;
    }
    p{
      font-size:0.7em;
      color: #cdcdcd;
    }
    ul li{
      text-align:center;
    }
    ul li a{
      color:#fff;
    }
    ul li a:hover{
      color:#ff8213;
    }

  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
