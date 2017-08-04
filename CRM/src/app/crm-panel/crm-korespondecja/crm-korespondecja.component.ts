import { Component, OnInit } from '@angular/core';
import { CrmKorespondencjaDodajComponent } from '../crm-korespondecja/crm-korespondencja-dodaj.component';
import { CrmKorespondencjaEdytujComponent } from '../crm-korespondecja/crm-korespondencja-edytuj.component';
import { DialogService } from "ng2-bootstrap-modal";
import {CrmServiceService} from '../crm-service.service';

@Component({
  selector: 'sbc-crm-korespondecja',
  templateUrl: './crm-korespondecja.component.html',
  styleUrls: ['./crm-korespondecja.component.scss']
})
export class CrmKorespondecjaComponent implements OnInit {

//Zminna przechowująca informacje o wszylkiej koresponedcji
posts;

//Zmienna przechowująca id szukanego pracownika
postsSearch:string;

  constructor(private dialogService:DialogService, private crmService: CrmServiceService) {
         this.crmService.getPostsFromDb();
   }

// Wyświetlanie formularza dodawania pracownika do bazy danych
   showPostConfirm() {
            let disposable = this.dialogService.addDialog(CrmKorespondencjaDodajComponent, {
                title:'Formularz dodawania korespondencji', 
               })
                .subscribe((isConfirmed)=>{
               
                    if(isConfirmed) {
                        alert('Korespondencja została dodana do bazy danych');
                    }
                    else {
                        alert('Korespondencja nie została dodana do bazy danych');
                    }
                });
            //We can close dialog calling disposable.unsubscribe();
            //If dialog was not closed manually close it by timeout
            
  }

//Załadowanie korespondencji o podanej nazwie z wyszukiwarki a następnie odświeżenie listy dodanych klientów
  showSearchPost(){
    this.crmService.setPostData(this.postsSearch);
    this.crmService.getPostsFromDb();
  }

//Pokazuje formularz edycji pracownika a następnie wyświetla komunikat potwierdzający modyfikację.
  showEditConfirm(data) {
            let disposable = this.dialogService.addDialog(CrmKorespondencjaEdytujComponent, {
              title:'Formularz edytowania korespondencji',
              UserId:data,
            })
                .subscribe((isConfirmed)=>{
                  
                    if(isConfirmed) {
                        alert('Dane zostały zmodyfikowane');
                    }
                    else {
                        alert('Dane nie zostały zmodyfikowane');
                    }
                });
            //We can close dialog calling disposable.unsubscribe();
            //If dialog was not closed manually close it by timeout
            
  }

//Wysyłanie danych korespondecji do funkcji usuwającej dana korespondecje z bazy danych
  deletePost(data){
    this.crmService.deletePostFromDB(data);
    
  }

//Wysyła informacje o wybranej korespondencji do funkcji zajmującej się pobieraniem pliku korespondencji z serwera.
  downloadFile(data){
    this.crmService.downloadPostFromDB(data);
  }

//Inicjalizacja obiektów/funkcji w momencie całkowitego załadowania komponentu
  ngOnInit() {

  }

//Wywołanie funckji po zainicjalizowaniu obiektów/funkcji
  ngAfterContentChecked(){
     this.crmService.subscribeToGetPosts().subscribe((posts)=>{
      this.posts = posts;
    }); 
   }

}