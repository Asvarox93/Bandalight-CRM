import { Component, OnInit } from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";
import {CrmServiceService} from '../crm-service.service';
import { CrmZleceniaDodajComponent } from '../crm-zlecenia/crm-zlecenia-dodaj.component';
import { CrmZleceniaEdytujComponent } from '../crm-zlecenia/crm-zlecenia-edytuj.component';

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
//Wyśiwetla formularz edytowania klienta a następnie potwierdza wykonane zmiany komunikatem.
   showEditConfirm(data) {
            let disposable = this.dialogService.addDialog(CrmZleceniaEdytujComponent, {
              title:'Formularz edytowania klienta',
              UserId:data,
            })
                .subscribe((isConfirmed)=>{
                  
                    if(isConfirmed) {
                        alert('Dane klienta zostały zmodyfikowane');
                    }
                    else {
                        alert('Dane klienta nie zostały zmodyfikowane');
                    }
                });
            //We can close dialog calling disposable.unsubscribe();
            //If dialog was not closed manually close it by timeout
            
  }

//Usuwanie wyznaczonego zlecenia przez użytkownika
  deleteOrders(data){
    this.crmService.deleteOrersFromDB(data);
    this.crmService.getOrdersFromDb();
  }

//Wyszukiwanie zlecenia według podanej frazy
 showSearchOrders(){
    this.crmService.setOrderData(this.OrderSearch);
    this.crmService.getOrdersFromDb();
  }

  ngOnInit() {
  
  }

//Ładuje zlecenia po załadowaniu całego komponentu
  ngAfterContentChecked(){
     this.crmService.getOrdersFromDb();
     //Subskrybuje sie na zmiany w bazie zleceń i aktualizuje je w momencie zmiany.
      this.crmService.subscribeToGetOrders().subscribe((orders)=>{
      this.orders = orders;
    }); 
   }


}
