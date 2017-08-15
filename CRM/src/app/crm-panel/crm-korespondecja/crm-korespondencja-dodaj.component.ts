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
        <div class="alert-danger mt-2 mb-2" *ngIf="errorMessage">{{errorMessage}}</div>
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
              <div class="alert-success mt-2 mb-2" *ngIf="sendStart">{{sendStart}}</div>
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
                     <button type="button" class="btn btn-default" (click)="closing()" >Cancel</button>
                   </div>
                 </div>
                 <div id="ModalBox" class="modalIn" [style.display]= "isDisplay">

                  <!-- Modal content -->
                  <div class="modalIn-content">
                    <p>{{modalText}}</p>
                    <div class="modalBtnCenter">
                     <div class="btn btn-primary btnModalClose" (click)="modalAgreeClick()">TAK</div>
                     <div class="btn btn-primary btnModalClose" (click)="modalCloseClick()">NIE</div>
                     </div>
                  </div>
                
                </div>
              </div>
  `,
  styles: [`
  .modalIn {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 99999999; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modalIn-content {
    position:relative;
    background-color: #fefefe;
    margin: 25% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
    font-size: 1.5em;
}
.modalBtnCenter{
  width:100%;
  text-align:center;
  margin:0 auto;
}
/* The Close Button */
.btnModalClose {
    color: #aaa;
    width:fit-content;
    height: 40px;
    color:#fff;
    background-color: #ff8213;
    border-color:#f97e11;
}

.btnModalClose:hover,
.btnModalClose:focus {
    background-color: #fff;
    color:#ff8213;  
    cursor: pointer;
}
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
  .alert-danger{
    font-size:1.5em;
    text-align:center;
    padding: 20px;
  }
  .modal-content{
			height:min-content;
	}
  
	@media all and (max-height: 500px) {
	.modal-content{
		height:400px;
  }
  }
  `]
})
export class CrmKorespondencjaDodajComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {

  
  procentage;
  dateSend;
  UserId:number;
  title:string;
  errorMessage;
  sendStart:string;
  toCheckName:boolean;
  checkFileName:boolean;
  modalText:string;
  isDisplay;

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
    if(this.file != undefined){
      this.Posts.plik = this.file.name;
    }
  }

//Wyslanie informacji o danych formularza oraz pliku do funkcji dodającej do bazy danych
  confirm() {
    this.errorMessage = "";
    if(this.dateSend ==  true && this.procentage < 100){
    this.errorMessage = "Trwa upload wybranego pliku, proszę czekać";
    }else if(this.dateSend ==  false ){
    if(this.Posts.nazwa != undefined && this.Posts.client != null && this.Posts.dotyczy != null && this.Posts.data != null && this.file != null
    && this.Posts.nazwa != "" && this.Posts.client != "" && this.Posts.dotyczy != "" && this.Posts.data != ""){
      var parts = this.Posts.data.split("-");
      var d = new Date();
      if(parseInt(parts[0]) != d.getFullYear()){
        this.errorMessage += "Wprowadzona data nie zgadza się z aktualnym rokiem!\n";
      }
      if(parseInt(parts[0]) === d.getFullYear() && parseInt(parts[1]) > d.getMonth()+1){

        this.errorMessage += "Podany miesiąc wybiega w przyszłość!\n";
			}
			if(parseInt(parts[1]) === d.getMonth()+1 && parseInt(parts[2]) > d.getDate()){
				this.errorMessage += "Podany dzień wybiega w przyszłość!\n";
			}

      if(this.dateSend==false && this.errorMessage == ""){
      this.toCheckName = true;
      this.crmService.sendPostToDB(this.Posts, this.file);
      };
      this.result = true;
    }else{
      this.errorMessage = "Wszystkie dane muszą zostać wprowadzone!";
    }
   }
  }

  modalCloseClick(){
    this.isDisplay = "none";
    this.modalText = "";
  }

  modalAgreeClick(){
    this.close();
  }

  closing(){
   if(this.dateSend ==  true && this.procentage < 100){
      this.modalText = "Trwa wgrywanie wybranego pliku. Czy anulowac?";
      this.isDisplay = "block";
   }else{
     this.close();
   }
  }

  getSubscriptToProcentage(){
    this.crmService.subscribeToGetPostsFileUploadProgress().subscribe((procentage:any)=>{
          this.procentage = procentage;
          if(this.procentage == 100){
            this.close();
          }else{
          //  this.errorMessage = "Upload pliku nie powiódł się. Spróbuj ponownie!";
          }
      });
  }

  ngOnInit() {
   this.crmService.subscribeToGetKleints().subscribe((klients)=>{
   this.klients = klients;
   });
   this.crmService.subscribeToGetPostsFileName().subscribe((nameflle:boolean)=>{
   this.checkFileName = nameflle;
   if(this.checkFileName == false && this.toCheckName == true){
        this.errorMessage += "Plik o podanej nazwie znajduje się już na serwerze!\n";
        this.toCheckName = false;
      }
    else if(this.checkFileName == true){
      this.sendStart = "Trwa wgrywanie pliku na serwer. Proszę czekać!"
      this.dateSend = true;
    }; 
   });
   this.getSubscriptToProcentage();
  }
   ngAfterContentInit(){
    if( this.klients == "" || this.klients == null || this.klients == undefined){
    this.crmService.getKlientFromDb();
    }
   }
}
