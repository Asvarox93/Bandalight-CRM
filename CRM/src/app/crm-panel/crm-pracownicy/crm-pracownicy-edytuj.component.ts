import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import {CrmServiceService} from '../crm-service.service';

export interface ConfirmModel {
  UserId:number;
  title:string;
}

@Component({
  selector: 'sbc-crm-pracownicy-edytuj',
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
				<h5>Wszystkie pola muszą być uzupełnione aby edytować pracownika</h5>
				<div class="alert-danger mt-2 mb-2" *ngIf="errorMessage">{{errorMessage}}</div>
						<form class="" method="post" action="#">
						<div class="form-group">
							<label for="imie" class="cols-sm-2 control-label">Imie</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-user-o fa" aria-hidden="true"></i></span>
									<input type="text" [(ngModel)]="workers.imie" class="form-control" name="imie" id="imie" required  placeholder="Wprowadz imie pracownika"/>
								</div>
							</div>
						</div>

            <div class="form-group">
							<label for="nazwisko" class="cols-sm-2 control-label">Nazwisko</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-address-book fa-lg" aria-hidden="true"></i></span>
									<input type="text" [(ngModel)]="workers.nazwisko" class="form-control" name="nazwisko" id="nazwisko" required placeholder="Wprowadz nazwisko pracownika"/>
								</div>
							</div>
						</div>

          	<div class="form-group">
							<label for="kodPocztowy" class="cols-sm-2 control-label">Kod Pocztowy</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-get-pocket fa-lg" aria-hidden="true"></i></span>
									<input type="text" [(ngModel)]="workers.kodPocztowy" class="form-control" name="kodPocztowy" id="kodPocztowy" required placeholder="Wprowadz kod pocztowy i miasto"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="ulica" class="cols-sm-2 control-label">Ulica</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-road fa" aria-hidden="true"></i></span>
									<input type="text" [(ngModel)]="workers.ulica" class="form-control" name="ulica" id="ulica" required placeholder="Wprowadz ulicę"/>
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
	.alert-danger{
    font-size:1.5em;
    text-align:center;
    padding: 20px;
	}
	`]
})
export class CrmPracownicyEdytujComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {

UserId:number;
title:string;
errorMessage;
workers;

  constructor(dialogService: DialogService, private crmService: CrmServiceService) { 
    super(dialogService);
  }

//Wysyła zmienione dane do funkji edytującej aktualne dane użytkownika z podanymi.
  confirm() {
		if(this.workers.imie != null && this.workers.nazwisko != null && this.workers.kodPocztowy != null && this.workers.ulica != null 
    && this.workers.imie != "" && this.workers.nazwisko != "" && this.workers.kodPocztowy != "" && this.workers.ulica != ""){
    this.crmService.editWorkersToDb(this.UserId,this.workers);
    this.result = true;
		this.close();
		}else{
			this.errorMessage = "Wszystkie dane muszą zostać wprowadzone!";
		}
  }

  ngOnInit() {
    this.workers = this.crmService.getWorkerToEdit(this.UserId);
  }

}
