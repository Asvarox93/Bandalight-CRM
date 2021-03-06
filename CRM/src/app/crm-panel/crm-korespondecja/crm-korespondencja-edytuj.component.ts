import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import {CrmServiceService} from '../crm-service.service';

export interface ConfirmModel {
  UserId:number;
  title:string;
}

@Component({
  selector: 'sbc-crm-korespondencja-edytuj',
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
							<label for="plik" class="cols-sm-2 control-label">Nazwa pliku</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-building fa-lg" aria-hidden="true"></i></span>
									<input type="text" [(ngModel)]="Posts.plik" class="form-control" name="plik" id="plik" disabled=""/>
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
export class CrmKorespondencjaEdytujComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {

  UserId:number;
  title:string;
  errorMessage;
  Posts;
  klients;

 constructor(dialogService: DialogService, private crmService: CrmServiceService) { 
    super(dialogService);
  }

  confirm() {
		this.errorMessage = "";
  
    if(this.Posts.nazwa != null && this.Posts.client != null && this.Posts.dotyczy != null && this.Posts.data != null
    && this.Posts.nazwa != "" && this.Posts.client != "" && this.Posts.dotyczy != "" && this.Posts.data != ""){
      var parts = this.Posts.data.split("-");
      var d = new Date();
      if(parseInt(parts[0]) != d.getFullYear()){
        this.errorMessage += "Wprowadzona data nie zgadza się z aktualnym rokiem!\n";
      }
      if(parseInt(parts[0]) === d.getFullYear() && parseInt(parts[1]) > d.getMonth()){
        this.errorMessage += "Podany miesiąc wybiega w przyszłość!\n";
			}
			if(parseInt(parts[1]) === d.getMonth()+1 && parseInt(parts[2]) > d.getDate()){
				this.errorMessage += "Podany dzień wybiega w przyszłość!\n";
			}

      if(this.errorMessage == ""){
	      this.crmService.editPostsToDb(this.UserId,this.Posts);
		    this.result = true;
				this.close();
      };
      
    }else{
      this.errorMessage = "Wszystkie dane muszą zostać wprowadzone!";
    }
	 }
	
  ngOnInit() {
	 this.crmService.subscribeToGetKleints().subscribe((klients)=>{
   this.klients = klients;
   });
    this.Posts = this.crmService.getPostToEdit(this.UserId);
  }
	 ngAfterContentInit(){
    if( this.klients == "" || this.klients == null || this.klients == undefined){
    this.crmService.getKlientFromDb();
    }
   }
}
