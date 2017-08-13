import { Component, OnInit } from '@angular/core';
import { CrmPojazdyDodajComponent } from '../crm-pojazdy/crm-pojazdy-dodaj.component';
import { CrmPojazdyEdytujComponent } from '../crm-pojazdy/crm-pojazdy-edytuj.component';
import { DialogService } from "ng2-bootstrap-modal";
import {CrmServiceService} from '../crm-service.service';

@Component({
  selector: 'sbc-crm-pojazdy',
  templateUrl: './crm-pojazdy.component.html',
  styleUrls: ['./crm-pojazdy.component.scss']
})
export class CrmPojazdyComponent implements OnInit {
//Zminna przechowująca informacje o wszystkich pojazdów
cars;
modalText;
isDisplay;

//Zmienna przechowująca id szukanego pojazdu
CarSearch:string;

  constructor(private dialogService:DialogService, private crmService: CrmServiceService) {
         this.crmService.getCarsFromDb();
   }

// Wyświetlanie formularza dodawania pojazdu do bazy danych
   showConfirm() {
            let disposable = this.dialogService.addDialog(CrmPojazdyDodajComponent, {
                title:'Formularz dodawania pojazdu', 
                message:''})
                .subscribe((isConfirmed)=>{
               
                    if(isConfirmed) {
                        this.modalText ='Pojazd został dodany do bazy danych';
                        this.isDisplay = "block";
                    }
                    else {
                        this.modalText = 'Pojazd nie został dodany do bazy danych';
                        this.isDisplay = "block";
                    }
                });
            //We can close dialog calling disposable.unsubscribe();
            //If dialog was not closed manually close it by timeout
            
  }

//Załadowanie pojazdu o podanej nazwie z wyszukiwarki a następnie odświeżenie listy dodanych klientów
  showSearchCar(){
    this.crmService.setCarData(this.CarSearch);
    this.crmService.getCarsFromDb();
  }

//Pokazuje formularz edycji pojazdu a następnie wyświetla komunikat potwierdzający modyfikację.
  showEditConfirm(data) {
            let disposable = this.dialogService.addDialog(CrmPojazdyEdytujComponent, {
              title:'Formularz edytowania pojazdu',
              UserId:data,
            })
                .subscribe((isConfirmed)=>{
                  
                    if(isConfirmed) {
                        this.modalText ='Dane pojazdu zostały zmodyfikowane';
                        this.isDisplay = "block";
                    }
                    else {
                        this.modalText ='Dane pojazdu nie zostały zmodyfikowane';
                        this.isDisplay = "block";
                    }
                });
            //We can close dialog calling disposable.unsubscribe();
            //If dialog was not closed manually close it by timeout
            
  }

//Zamykanie modala po nacisnieciu na przycisk close
  modalCloseClick(){
    this.isDisplay = "none";
    this.modalText = "";
  }

//Wysyłanie danych pojazdu do funkcji usuwającej klienta z bazy danych
  deleteCar(data){
    this.crmService.deleteCarFromDB(data);
    
  }

//Inicjalizacja obiektów/funkcji w momencie całkowitego załadowania komponentu
  ngOnInit() {

  }

//Wywołanie funckji po zainicjalizowaniu obiektów/funkcji
  ngAfterContentChecked(){
     this.crmService.subscribeToGetCars().subscribe((cars)=>{
      this.cars = cars;
    }); 
   }

}