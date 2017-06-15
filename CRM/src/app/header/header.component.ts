import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'sbc-header',
  template: `
    <div class="fluid-container">
      <div class="jumbotron">
        <div class="container">
          <nav class="navbar navbar-toggleable-md navbar-light ">
          <button class="navbar-toggler navbar-toggler-right" type="button" (click)="isCollapsed = !isCollapsed"
                  [attr.aria-expanded]="!isCollapsed" data-toggle="collapse"
                  aria-controls="navbarSupportedContent"  aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div 	[ngbCollapse]="!isCollapsed" class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" routerLink="/">STRONA GŁÓWNA</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/oferta">OFERTA</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/pomoc">POMOC</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/kontakt">KONTAKT</a>
              </li>
             
              <li class="nav-item">
                <a class="nav-link cpanel" routerLink="/panel-klienta">PANEL KLIENTA</a>
              </li>
            </ul>
          </div>
        </nav>

          <img class="img-fluid mx-auto d-block" src="../../../assets/header/bandalight.png" alt="Brand Logo">
          <p class="lead text-center">
            <a class="btn btn-primary btn-lg btn-hover" routerLink="/rejestracja" role="button">ZAŁÓŻ DARMOWE KONTO</a>
          </p>
          <hr class="my-4">
          <p class="text-center">DARMOWY SYSTEM <span class="text-col">CRM</span></p>
          
      </div>
    </div>
  </div>
  `,
  styles: [`
  .btn-hover:hover{
    background: #fff;
    color: #ff8213;
  }
  .text-col{
    color: #ff8213;
  }
  p{
    color: #fff;
  }
  hr{
    background:white;
  }
  .btn-primary{
    background:#ff8213;
    border-color:#f97e11;
  }
  .img-fluid{
    width:300px;
    margin-top:60px;
    margin-bottom:40px;
  }
  .cpanel{
    color: #ff8213 !important;
  }

  .cpanel:hover{
    color: #ff8213 !important;
    background-color:#fff;
    transition: 0.5s ease-in-out;
  }
  .jumbotron{
    min-height:600px;
    background-image: url("../../../assets/header/hbackground.jpg");
    background-size:cover;
      padding-top: 0;
      margin:0;
  }
 
  .navbar{
    margin: 0 auto;
    padding: 0;
    width:80%;
  }
  ul{
     margin: 0 auto;
     font-size: 0.4em;
     
  }  
  ul li{
    margin: 0 2px;
    background-color:#0d0d0f;
  }
  ul li a:not(.cpanel){
    color: #fff;
  }
  ul li a:hover{
    color:#ff8213;
  }
     
    
  `]
})
export class HeaderComponent implements OnInit {
  isCollapsed;

  constructor() { }

  ngOnInit() {
  }

}
