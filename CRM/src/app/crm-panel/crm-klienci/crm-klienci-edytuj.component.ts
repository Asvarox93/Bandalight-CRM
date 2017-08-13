import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import {CrmServiceService} from '../crm-service.service';

export interface ConfirmModel {
  UserId:number;
  title:string;
}

@Component({
  selector: 'sbc-crm-klienci-edytuj',
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
				<h5>Zmodyfikuj dane w polach aby edytować klienta</h5>
				<div class="alert-danger mt-2 mb-2" *ngIf="errorMessage">{{errorMessage}}</div>
					<form class="" method="post" action="#">
						<div class="form-group">
							<label for="nazwa" class="cols-sm-2 control-label">Nazwa</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
									<input type="text" [(ngModel)]="klienci.nazwa" class="form-control" name="nazwa" id="nazwa" required  placeholder="Wprowadz nazwę klienta"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="ulica" class="cols-sm-2 control-label">Ulica</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-road fa" aria-hidden="true"></i></span>
									<input type="text" [(ngModel)]="klienci.ulica" class="form-control" name="ulica" id="ulica" required placeholder="Wprowadz ulicę"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="kodPocztowy" class="cols-sm-2 control-label">Kod Pocztowy</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-get-pocket fa-lg" aria-hidden="true"></i></span>
									<input type="text" [(ngModel)]="klienci.kodPocztowy" class="form-control" name="kodPocztowy" id="kodPocztowy" required placeholder="Wprowadz kod pocztowy"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="miasto" class="cols-sm-2 control-label">Miasto</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-building fa-lg" aria-hidden="true"></i></span>
									<input type="text" [(ngModel)]="klienci.miasto" class="form-control" name="miasto" id="miasto" required placeholder="Wprowadz miasto"/>
								</div>
							</div>
						</div>

							<div class="form-group">
							<label for="notatki" class="cols-sm-2 control-label">Notatki</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-get-pocket fa-lg" aria-hidden="true"></i></span>
									<textarea [(ngModel)]="klienci.notatki" class="form-control" name="notatki" id="notatki" required placeholder="Wprowadz własne notatki"></textarea>
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

export class CrmKlienciEdytujComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {

UserId:number;
title:string;
errorMessage;
klienci;

  constructor(dialogService: DialogService, private crmService: CrmServiceService) { 
    super(dialogService);
  }

  confirm() {
		if(this.klienci.nazwa != null && this.klienci.ulica != null && this.klienci.kodPocztowy != null && this.klienci.miasto != null 
    && this.klienci.nazwa != "" && this.klienci.ulica != "" && this.klienci.kodPocztowy != "" && this.klienci.miasto != ""){
	    this.crmService.EditKleintToDb(this.UserId,this.klienci);
	    this.result = true;
			this.close();
		}
  }

  ngOnInit() {
    this.klienci = this.crmService.getKlientToEdit(this.UserId);
  }

}
