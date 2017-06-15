import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import {CrmServiceService} from '../crm-service.service';

export interface ConfirmModel {
  UserId:number;
  title:string;
}

@Component({
  selector: 'sbc-crm-korespondencja-dodaj',
  template: `
    <div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-header">
                     <button type="button" class="close" (click)="close()" >&times;</button>
                     <h4 class="modal-title">{{title || 'Confirm'}}</h4>
                   </div>
                   <div class="modal-body">
                 	<div class="container">
			<div class="row main">
				<div class="main-login main-center">
				<h5>Zmodyfikuj dane w polach aby edytować.</h5>
					<form class="" method="post" action="#">
						<div class="form-group">
							<label for="nazwa" class="cols-sm-2 control-label">Nazwa dokumentu</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
									<input type="text" [(ngModel)]="Posts.nazwa" class="form-control" name="nazwa" id="nazwa" required  placeholder="Wprowadz nazwę dokumentu"/>
								</div>
							</div>
						</div>

            	<div class="form-group">
							<label for="nazwa" class="cols-sm-2 control-label">Dotyczy Klienta</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-building fa-lg" aria-hidden="true"></i></span>
									<select class="form-control" required [(ngModel)]="Posts.client" name="klient" id="klient"> <!-- <== changed -->
                    <option value="" selected="selected" disabled>Wybierz Klienta</option>
                    <option *ngFor="let klient of klients"  [ngValue]="klient.nazwa">{{ klient.nazwa }}</option>
                  </select>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="dotyczy" class="cols-sm-2 control-label">Dotyczy</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-road fa" aria-hidden="true"></i></span>
									<input type="text" [(ngModel)]="Posts.dotyczy" class="form-control" name="dotyczy" id="dotyczy" required placeholder="Wprowadz informacje o dokumencie"/>
								</div>
							</div>
						</div>

				  	<div class="form-group">
							<label for="data" class="cols-sm-2 control-label">Data dodania</label>
							<div class="cols-sm-10">
                <div class="input-group">
                  <span class="input-group-addon"><i class="fa fa-road fa" aria-hidden="true"></i></span>
									<input type="date" class="form-control dateParam" [(ngModel)]="Posts.data" name="date" id="date" required/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="plik" class="cols-sm-2 control-label">Nazwa pliku</label>
							<div class="cols-sm-10">
                <progress [value]="procentage" max="100" id="uploader">0</progress>
								<div class="input-group">
									<input type="file" class="form-control" name="plik" id="plik" (change)="fileEvent($event)"/>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
                   </div>
                   <div class="modal-footer">
                     <button type="button" class="btn btn-primary" (click)="confirm()">OK</button>
                     <button type="button" class="btn btn-default" (click)="close()" >Cancel</button>
                   </div>
                 </div>
              </div>
  `,
  styles: [`
  .dateParam{
    display: inline-block !important;
    flex-direction: row !important;
  }
  .main-center{
    margin: 0 auto;
  }
  #uploader{
    appearance:none;
    width:100%;
    height:20px;
    margin-bottom:10px;
  }
  `]
})
export class CrmKorespondencjaDodajComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {

  
  procentage;
  dateSend;
  UserId:number;
  title:string;

//Zmienne przechowujące informacje z formularz oraz wybrany plik
  Posts;
  file;
  klients;

 constructor(dialogService: DialogService, private crmService: CrmServiceService) { 
    super(dialogService);
     this.Posts = [];
     this.procentage=0;
     this.dateSend = false;
  }
  
//Przypisanie wybranego pliku przez uzytkownika do odpowiedniej zmiennej, oraz wyłuskanie nazwy tego pliku.
  fileEvent(fileInput: any){
    this.file = fileInput.target.files[0];
    this.Posts.plik = this.file.name;
  }

//Wyslanie informacji o danych formularza oraz pliku do funkcji dodającej do bazy danych
  confirm() {
    if(this.dateSend==false){
    this.crmService.sendPostToDB(this.Posts, this.file);
    this.dateSend = true;
   };
    this.result = true;
  }

  getSubscriptToProcentage(){
    this.crmService.subscribeToGetPostsFileUploadProgress().subscribe((procentage:any)=>{
          this.procentage = procentage;
          if(this.procentage == 100){
            this.close();
            this.confirm();
            this.crmService.getPostsFromDb();
          }
      });
  }

  ngOnInit() {
   this.crmService.subscribeToGetKleints().subscribe((klients)=>{
   this.klients = klients;
   });
    this.getSubscriptToProcentage();
  }
   ngAfterContentInit(){
    if( this.klients == "" || this.klients == null || this.klients == undefined){
    this.crmService.getKlientFromDb();
    }
   }
}
