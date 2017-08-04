import { Component, OnInit } from '@angular/core';
import { CrmKlienciDodajComponent } from '../crm-klienci/crm-klienci-dodaj.component';
import { CrmKlienciEdytujComponent } from '../crm-klienci/crm-klienci-edytuj.component';
import { DialogService } from "ng2-bootstrap-modal";
import {CrmServiceService} from '../crm-service.service';


@Component({
  selector: 'sbc-crm-klienci',
  templateUrl: './crm-klienci.component.html',
  styleUrls: ['./crm-klienci.component.scss']
})


export class CrmKlienciComponent implements OnInit {

klienci;
KlientSearch:string;


  constructor(private dialogService:DialogService, private crmService: CrmServiceService) {
        this.crmService.getKlientFromDb();
  }

// Wyświetlanie formularza dodawania klienta do bazy danych
   showConfirm() {
            let disposable = this.dialogService.addDialog(CrmKlienciDodajComponent, {
                title:'Formularz dodawania klienta', 
                message:''})
                .subscribe((isConfirmed)=>{
               
                    if(isConfirmed) {
                        alert('Klient został dodany do bazy danych');
                    }
                    else {
                        alert('Klient nie został dodany do bazy danych');
                    }
                });
            //We can close dialog calling disposable.unsubscribe();
            //If dialog was not closed manually close it by timeout
            
  }

//Załadowanie klienta o podanej nazwie z wyszukiwari a następnie odświeżenie listy dodanych klientów
  showSearchKlient(){
    this.crmService.setKlientData(this.KlientSearch);
    this.crmService.getKlientFromDb();
  }

//Pokazuje formularz edycji klienta a następnie wyświetla komunikat potwierdzający modyfikację.
  showDeleteConfirm(data) {
            let disposable = this.dialogService.addDialog(CrmKlienciEdytujComponent, {
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

//Wysyłanie danych klienta do funkcji usuwającej klienta z bazy danych
  deleteKlient(data){
    this.crmService.deleteKleintFromDB(data);
    
  }

//Inicjalizacja obiektów/funkcji w momencie całkowitego załadowania komponentu
  ngOnInit() {

  }
  ngAfterContentChecked(){
     this.crmService.subscribeToGetKleints().subscribe((klienci)=>{
        this.klienci = klienci;
    }); 
   }

}
