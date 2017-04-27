import { Component, OnInit } from '@angular/core';
import { CrmKlienciDodajComponent } from '../crm-klienci/crm-klienci-dodaj.component';
import { CrmKlienciEdytujComponent } from '../crm-klienci/crm-klienci-edytuj.component';
import { DialogService } from "ng2-bootstrap-modal";
import {CrmServiceService} from '../crm-service.service';

/*interface klienci{
  nazwa:string,
  ulica:string,
  kodPocztowy:string,
  miasto:string
}
*/
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

  showSearchKlient(){
    this.crmService.setKlientData(this.KlientSearch);
    this.crmService.getKlientFromDb();
  }

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

  deleteKlient(data){
    this.crmService.deleteKleintFromDB(data);
  }

  ngOnInit() {
    this.crmService.subscribeToGetKleints().subscribe((klients)=>{
      this.klienci = klients;
    }); 
  }

}
