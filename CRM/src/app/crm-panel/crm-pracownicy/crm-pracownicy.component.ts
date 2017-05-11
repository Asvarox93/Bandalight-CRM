import { Component, OnInit } from '@angular/core';
import { CrmPracownicyDodajComponent } from '../crm-pracownicy/crm-pracownicy-dodaj.component';
import { CrmPracownicyEdytujComponent } from '../crm-pracownicy/crm-pracownicy-edytuj.component';
import { DialogService } from "ng2-bootstrap-modal";
import {CrmServiceService} from '../crm-service.service';

@Component({
  selector: 'sbc-crm-pracownicy',
  templateUrl: './crm-pracownicy.component.html',
  styleUrls: ['./crm-pracownicy.component.scss']
})
export class CrmPracownicyComponent implements OnInit {

//Zminna przechowująca informacje o wszystkich pracownikach
workers;

//Zmienna przechowująca id szukanego pracownika
WorkerSearch:string;

  constructor(private dialogService:DialogService, private crmService: CrmServiceService) {
   }

// Wyświetlanie formularza dodawania pracownika do bazy danych
   showConfirm() {
            let disposable = this.dialogService.addDialog(CrmPracownicyDodajComponent, {
                title:'Formularz dodawania pracownika', 
                message:''})
                .subscribe((isConfirmed)=>{
               
                    if(isConfirmed) {
                        alert('Pracownik został dodany do bazy danych');
                    }
                    else {
                        alert('Pracownik nie został dodany do bazy danych');
                    }
                });
            //We can close dialog calling disposable.unsubscribe();
            //If dialog was not closed manually close it by timeout
            
  }

//Załadowanie pracownika o podanej nazwie z wyszukiwarki a następnie odświeżenie listy dodanych klientów
  showSearchWorker(){
    this.crmService.setWorkerData(this.WorkerSearch);
    this.crmService.getWorkersFromDb();
  }

//Pokazuje formularz edycji pracownika a następnie wyświetla komunikat potwierdzający modyfikację.
  showEditConfirm(data) {
            let disposable = this.dialogService.addDialog(CrmPracownicyEdytujComponent, {
              title:'Formularz edytowania pracownika',
              UserId:data,
            })
                .subscribe((isConfirmed)=>{
                  
                    if(isConfirmed) {
                        alert('Dane pracownika zostały zmodyfikowane');
                    }
                    else {
                        alert('Dane pracownika nie zostały zmodyfikowane');
                    }
                });
            //We can close dialog calling disposable.unsubscribe();
            //If dialog was not closed manually close it by timeout
            
  }

//Wysyłanie danych pracownika do funkcji usuwającej klienta z bazy danych
  deleteWorker(data){
    this.crmService.deleteWorkerFromDB(data);
    this.crmService.getWorkersFromDb();
  }

//Inicjalizacja obiektów/funkcji w momencie całkowitego załadowania komponentu
  ngOnInit() {

  }

//Wywołanie funckji po zainicjalizowaniu obiektów/funkcji
  ngAfterContentChecked(){
     this.crmService.getWorkersFromDb();
     this.crmService.subscribeToGetWorkers().subscribe((workers)=>{
      this.workers = workers;
    }); 
   }

}
