import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sbc-crm-klienci',
  templateUrl: './crm-klienci.component.html',
  styleUrls: ['./crm-klienci.component.scss']
})
export class CrmKlienciComponent implements OnInit {

klienci=[
  {
    nazwa: "Splast sp. z o.o.",
    ulica: "Grunwaldzka 13",
    kodPocztowy: "39-300",
    miasto: "Mielec"
  },
  {
    nazwa: "Kris Mat",
    ulica: "Kolejowa 8",
    kodPocztowy: "39-300",
    miasto: "Rzeszów"
  }
];

  constructor() { }

  ngOnInit() {
  }

}
