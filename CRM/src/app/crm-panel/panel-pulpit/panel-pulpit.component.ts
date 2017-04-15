import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'sbc-panel-pulpit',
  template: `
  <div class="row">
  <div class="col-md-4">
    <div class="card" routerLink="./zlecenia">
      <div class="card-block text-center">
        <h4 class="  fa fa-book fa-3x"></h4>
        <h6 class="card-subtitle mb-2 text-muted mt-3"> Tutaj możesz sprawdz swoje aktualne zlecenia </h6>
      </div>
    </div>
    </div>

    <div class="col-md-4">
    <div class="card" routerLink="./klienci">
      <div class="card-block text-center">
        <h4 class="fa fa-users fa-3x"></h4>
        <h6 class="card-subtitle mb-2 text-muted  mt-3"> Sprawdz bazę swoich aktualnych klientów </h6>
      </div>
    </div>
    </div>

    <div class="col-md-4">
    <div class="card" routerLink="./korespondencja">
      <div class="card-block text-center">
        <h4 class="fa fa-clipboard fa-3x"></h4>
        <h6 class="card-subtitle mb-2 text-muted  mt-3"> Przechowywaj swoją aktualna korespondencję </h6>
      </div>
    </div>
    </div>
</div>

<div class="row mt-5">
    <div class="col-md-4">
    <div class="card" routerLink="./pracownicy">
      <div class="card-block text-center">
        <h4 class="  fa fa-male fa-3x"></h4>
        <h6 class="card-subtitle mb-2 text-muted mt-3"> Lista twoich aktualnych pracowników </h6>
      </div>
    </div>
    </div>

    <div class="col-md-4">
    <div class="card" routerLink="./pojazdy">
      <div class="card-block text-center">
        <h4 class="  fa fa-car fa-3x"></h4>
        <h6 class="card-subtitle mb-2 text-muted mt-3"> Przechowywaj informacje o pojazdach firmowych</h6>
      </div>
    </div>
    </div>

    <div class="col-md-4">
    <div class="card" routerLink="./produkty" >
      <div class="card-block text-center">
        <h4 class="  fa fa-product-hunt fa-3x"></h4>
        <h6 class="card-subtitle mb-2 text-muted mt-3"> Lista aktualnych produktów </h6>
      </div>
    </div>
    </div>
</div>

<div class="row mt-5">
   <div class="col-md-4">
    <div class="card" routerLink="./finanse">
      <div class="card-block text-center">
        <h4 class="  fa fa-money fa-3x"></h4>
        <h6 class="card-subtitle mb-2 text-muted mt-3"> Tutaj wystawisz fakturę </h6>
      </div>
    </div>
    </div>

   <div class="col-md-4">
    <div class="card" routerLink="./kalendarz">
      <div class="card-block text-center">
        <h4 class="  fa fa-calendar fa-3x"></h4>
        <h6 class="card-subtitle mb-2 text-muted mt-3"> Sprawdz aktualną date </h6>
      </div>
    </div>
    </div>

    <div class="col-md-4">
    <div class="card" routerLink="./raporty">
      <div class="card-block text-center">
        <h4 class="  fa fa-file-text-o fa-3x"></h4>
        <h6 class="card-subtitle mb-2 text-muted mt-3"> Zobacz swój zbiór informacji</h6>
      </div>
    </div>
    </div>
    
</div>
  `,
  styles: [`

.fa{
  color:#ff8213;
}
.card{
  margin-bottom:15px;
}
.card:hover{
  overflow:hidden;
  margin-bottom: 0;
  border-color:#f97e11;
  cursor:pointer;
  font-size: 1.1em;
  transition: font-size 0.2s ease-in-out;
}

    
  `]
})
export class PanelPulpitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
