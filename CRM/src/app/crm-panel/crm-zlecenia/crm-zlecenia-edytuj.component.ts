import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import {CrmServiceService} from '../crm-service.service';

export interface ConfirmModel {
  UserId:number;
  title:string;
}

@Component({
  selector: 'sbc-crm-zlecenia-edytuj',
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
        <h5>Uzupełnij wszystkie pola aby dodać nowe zlecenie</h5>
        <div class="alert-danger mt-2 mb-2" *ngIf="errorMessage">{{errorMessage}}</div>
					<form class="" method="post" action="#">
						<div class="form-group">
							<label for="nazwa" class="cols-sm-2 control-label">Nazwa Klienta</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-building fa-lg" aria-hidden="true"></i></span>
									<select class="form-control" required [(ngModel)]="orders.nazwa" name="klient" id="klient"> <!-- <== changed -->
                    <option value="" selected="selected" disabled >{{orders.nazwa}}</option>
                    <option *ngFor="let klient of klients"  [ngValue]="klient.nazwa">{{ klient.nazwa }}</option>
                  </select>
								</div>
							</div>
						</div>
						<div class="form-group">
							<label for="data" class="cols-sm-2 control-label">Data dodania</label>
							<div class="cols-sm-10">
                <div class="input-group">
                  <span class="input-group-addon"><i class="fa fa-road fa" aria-hidden="true"></i></span>
									<input type="date" class="form-control dateParam" [(ngModel)]="orders.data" name="date" id="date" required/>
								</div>
							</div>
						</div>
	          <div class="form-group">
							<label for="pracownik" class="cols-sm-2 control-label">Pracownik</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-building fa-lg" aria-hidden="true"></i></span>
									<input type="text" [(ngModel)]="orders.pracownik" class="form-control" name="pracownik" id="pracownik" required placeholder="Wprowadz nazwę pracownika"/>
								</div>
							</div>
						</div>
						<div class="form-group">
							<label for="trescZlecenia" class="cols-sm-2 control-label">Treść Zlecenia</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<textarea class="form-control" placeholder="Treść dodawanego zlecenia" [(ngModel)]="orders.tresc" name="tresc" id="tresc"></textarea>
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
 `]
})
export class CrmZleceniaEdytujComponent  extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {

  UserId:number;
  title:string;
  klients;
  orders;
  errorMessage;

  constructor(dialogService: DialogService, private crmService: CrmServiceService) {
    super(dialogService);
   }
  
   confirm() {
    if(this.orders.nazwa != null && this.orders.data != null && this.orders.pracownik != null && this.orders.tresc != null && this.orders.nazwa != "" && this.orders.data != "" && this.orders.pracownik != "" && this.orders.tresc != ""){
    this.crmService.editOrdersToDb(this.UserId,this.orders);
    this.result = true;
    this.close();
    }
    this.errorMessage = "Wszystkie dane muszą zostać wprowadzone!";
  }

  ngOnInit() {
      this.orders = this.crmService.getOrdersToEdit(this.UserId);
        this.crmService.subscribeToGetKleints().subscribe((klients)=>{
        this.klients = klients;
        });
  }

   ngAfterContentInit(){
    if( this.klients == "" || this.klients == null || this.klients == undefined){
    this.crmService.getKlientFromDb();
    }
   }

}
