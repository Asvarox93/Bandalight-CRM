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
                        alert('Produkt został dodany do bazy danych');
                    }
                    else {
                        alert('Produkt nie został dodany do bazy danych');
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
                        alert('Dane produktu zostały zmodyfikowane');
                    }
                    else {
                        alert('Dane produktu nie zostały zmodyfikowane');
                    }
                });
            //We can close dialog calling disposable.unsubscribe();
            //If dialog was not closed manually close it by timeout
            
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
