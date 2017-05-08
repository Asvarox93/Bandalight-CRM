import { Component, OnInit } from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";
import {CrmServiceService} from '../crm-service.service';
import { CrmZleceniaDodajComponent } from '../crm-zlecenia/crm-zlecenia-dodaj.component';
@Component({
  selector: 'sbc-crm-zlecenia',
  templateUrl: './crm-zlecenia.component.html',
  styleUrls: ['./crm-zlecenia.component.scss']
})
export class CrmZleceniaComponent implements OnInit {
  orders;
  OrderSearch;


  constructor(private dialogService:DialogService, private crmService: CrmServiceService) {
  }
 
  //Wyświetlenie formularza dodawania nowego zlecenia
  showOrderConfirm(){
       let disposable = this.dialogService.addDialog(CrmZleceniaDodajComponent, {
                title:'Formularz dodawania zlecenia', 
                message:''})
                .subscribe((isConfirmed)=>{
               
                    if(isConfirmed) {
                        alert('Zlecenie zostało dodane do bazy danych');
                    }
                    else {
                        alert('Zlecenie nie zostało dodane do bazy danych');
                    }
                });
  }

  ngOnInit() {
     this.crmService.subscribeToGetOrders().subscribe((orders)=>{
      this.orders = orders;
    }); 
  }

  ngAfterContentInit(){
     this.crmService.getOrdersFromDb();
   }


}
