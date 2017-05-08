import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import {CrmServiceService} from '../crm-service.service';

export interface ConfirmModel {
  title:string;
  message:string;
}

@Component({
  selector: 'sbc-crm-zlecenia-dodaj',
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
					<form class="" method="post" action="#">
						<div class="form-group">
							<label for="nazwa" class="cols-sm-2 control-label">Nazwa Klienta</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-building fa-lg" aria-hidden="true"></i></span>
									<select class="form-control" required [(ngModel)]="orders.nazwa" name="klient" id="klient"> <!-- <== changed -->
                    <option value="" selected="selected" disabled>Wybierz Klienta</option>
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
  `]
})
export class CrmZleceniaDodajComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {

title: string;
message: string;
klients;
orders;

  constructor(dialogService: DialogService, private crmService: CrmServiceService) { 
    super(dialogService);
    this.orders = [];
  }

//Wysyłanie danych zlecenia po zatwierdzeniu formularza przez użytkownika
  confirm() {
    this.crmService.sendOrderToDB(this.orders);
    this.result = true;
    this.close();
  }

  ngOnInit() {
    //Pobieranie klientów z bazy danych, przypisanie do zmiennej lokalnej w celu użycia danych w formularzu.
   this.crmService.subscribeToGetKleints().subscribe((klients)=>{
   this.klients = klients;
   });
  }

  //Pobieranie listy klientów po załadowaniu komponentu
   ngAfterContentInit(){
    if( this.klients == "" || this.klients == null || this.klients == undefined){
    this.crmService.getKlientFromDb();
    }
   }

}
