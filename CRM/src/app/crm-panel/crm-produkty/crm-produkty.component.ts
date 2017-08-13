import { Component, OnInit } from '@angular/core';
import { CrmProduktyDodajComponent } from '../crm-produkty/crm-produkty-dodaj.component';
import { CrmProduktyEdytujComponent } from '../crm-produkty/crm-produkty-edytuj.component';
import { DialogService } from "ng2-bootstrap-modal";
import {CrmServiceService} from '../crm-service.service';

@Component({
  selector: 'sbc-crm-produkty',
  templateUrl: './crm-produkty.component.html',
  styleUrls: ['./crm-produkty.component.scss']
})
export class CrmProduktyComponent implements OnInit {

  //Zmienna przechowująca informacje o wszystkich produktach
products;

//Zmienna przechowująca id szukanego pracownika
ProductSearch:string;

modalText;
isDisplay;

  constructor(private dialogService:DialogService, private crmService: CrmServiceService) {
         this.crmService.getProductsFromDb();
   }

// Wyświetlanie formularza dodawania pracownika do bazy danych
   showConfirm() {
            let disposable = this.dialogService.addDialog(CrmProduktyDodajComponent, {
                title:'Formularz dodawania produktów', 
                message:''})
                .subscribe((isConfirmed)=>{
               
                    if(isConfirmed) {
                        this.modalText ='Produkt został dodany do bazy danych';
                        this.isDisplay = "block";
                    }
                    else {
                        this.modalText ='Produkt nie został dodany do bazy danych';
                        this.isDisplay = "block";
                    }
                });
            //We can close dialog calling disposable.unsubscribe();
            //If dialog was not closed manually close it by timeout
            
  }

//Załadowanie produktów o podanej nazwie z wyszukiwarki a następnie odświeżenie listy dodanych produktów
  showSearchProduct(){
    this.crmService.setProductData(this.ProductSearch);
    this.crmService.getProductsFromDb();
  }

//Pokazuje formularz edycji produktu a następnie wyświetla komunikat potwierdzający modyfikację.
  showEditConfirm(data) {
            let disposable = this.dialogService.addDialog(CrmProduktyEdytujComponent, {
              title:'Formularz edytowania produktu',
              UserId:data,
            })
                .subscribe((isConfirmed)=>{
                  
                    if(isConfirmed) {
                        this.modalText ='Dane produktu zostały zmodyfikowane';
                        this.isDisplay = "block";
                    }
                    else {
                        this.modalText ='Dane produktu nie zostały zmodyfikowane';
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

//Wysyłanie danych produktu do funkcji usuwającej produkt z bazy danych
  deleteProduct(data){
    this.crmService.deleteProductFromDB(data);
    
  }

//Inicjalizacja obiektów/funkcji w momencie całkowitego załadowania komponentu
  ngOnInit() {

  }

//Wywołanie funckji po zainicjalizowaniu obiektów/funkcji
  ngAfterContentChecked(){
     this.crmService.subscribeToGetProducts().subscribe((product)=>{
      this.products = product;
    }); 
   }
}
