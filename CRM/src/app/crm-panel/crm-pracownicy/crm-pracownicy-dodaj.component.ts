import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import {CrmServiceService} from '../crm-service.service';

export interface ConfirmModel {
  title:string;
  message:string;
}

@Component({
  selector: 'sbc-crm-pracownicy-dodaj',
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
				<h5>Uzupełnij poniższe pola aby dodać pracownika</h5>
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
  styles: []
})
export class CrmPracownicyDodajComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
title: string;
message: string;

workers;

  constructor(dialogService: DialogService, private crmService: CrmServiceService) {
    super(dialogService);
    this.workers = [];
   }
  //Potwierdzenie dodania pracownika i wysłanie danych do funkcji zajmującej się dodaniem pracownika do bazy danych 
  confirm() {
    this.crmService.sendWorkerToDB(this.workers);
    this.result = true;
    this.close();
  }

  ngOnInit() {
  }

}
