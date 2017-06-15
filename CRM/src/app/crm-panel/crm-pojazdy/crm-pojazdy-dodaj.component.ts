import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import {CrmServiceService} from '../crm-service.service';

export interface ConfirmModel {
  title:string;
  message:string;
}

@Component({
  selector: 'sbc-crm-pojazdy-dodaj',
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
				<h5>Uzupełnij poniższe pola aby dodać pojazd</h5>
					<form class="" method="post" action="#">
						<div class="form-group">
							<label for="marka" class="cols-sm-2 control-label">Marka</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-car fa-lg" aria-hidden="true"></i></span>
									<input type="text" [(ngModel)]="cars.marka" class="form-control" name="marka" id="marka" required  placeholder="Wprowadz markę pojazdu"/>
								</div>
							</div>
						</div>

            <div class="form-group">
							<label for="model" class="cols-sm-2 control-label">Model</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-list fa-lg" aria-hidden="true"></i></span>
									<input type="text" [(ngModel)]="cars.model" class="form-control" name="model" id="model" required placeholder="Wprowadz model pojazdu"/>
								</div>
							</div>
						</div>

          	<div class="form-group">
							<label for="zData" class="cols-sm-2 control-label">Data zakupu</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-money fa-lg" aria-hidden="true"></i></span>
									<input type="date" [(ngModel)]="cars.zData" class="form-control dateParam" name="zData" id="zData" required placeholder="Wprowadz datę zakupu pojazdu"/>
								</div>
							</div>
						</div>

							<div class="form-group">
							<label for="pData" class="cols-sm-2 control-label">Data wykonania przeglądu</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-key fa-lg" aria-hidden="true"></i></span>
									<input type="date" [(ngModel)]="cars.pData" class="form-control dateParam" name="pData" id="pData" required placeholder="Wprowadz datę wykonanego przeglądu"/>
								</div>
							</div>
						</div>

							<div class="form-group">
							<label for="uData" class="cols-sm-2 control-label">Data zakupionego ubezpieczenia</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-shield  fa-lg" aria-hidden="true"></i></span>
									<input type="date" [(ngModel)]="cars.uData" class="form-control dateParam" name="uData" id="uData" required placeholder="Wprowadz datę aktualnego ubezpieczenia"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="kData" class="cols-sm-2 control-label">Ilość aktualnie przejechanych kilometrów</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-shield  fa-lg" aria-hidden="true"></i></span>
									<input type="number" [(ngModel)]="cars.kData" class="form-control dateParam" name="kData" id="kData" required placeholder="Wprowadz kilometry"/>
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
  `]
})
export class CrmPojazdyDodajComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
title: string;
message: string;

cars;

  constructor(dialogService: DialogService, private crmService: CrmServiceService) {
    super(dialogService);
    this.cars = [];
   }
  //Potwierdzenie dodania pojazdu i wysłanie danych do funkcji zajmującej się dodaniem pojazdu do bazy danych 
  confirm() {
    this.crmService.sendCarToDB(this.cars);
    this.result = true;
    this.close();
  }

  ngOnInit() {
  }

}
