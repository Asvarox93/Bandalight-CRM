import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import {CrmServiceService} from '../crm-service.service';

export interface ConfirmModel {
  UserId:number;
  title:string;
}

@Component({
  selector: 'sbc-crm-produkty-edytuj',
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
				<h5>Uzupełnij poniższe pola aby edytować produkt</h5>
					<form class="" method="post" action="#">
						<div class="form-group">
							<label for="Nazwa" class="cols-sm-2 control-label">Nazwa</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-product-hunt fa" aria-hidden="true"></i></span>
									<input type="text" [(ngModel)]="products.name" class="form-control" name="name" id="name" required  placeholder="Wprowadz nazwe produktu"/>
								</div>
							</div>
						</div>

            <div class="form-group">
							<label for="nazwisko" class="cols-sm-2 control-label">Typ</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-info-circle fa-lg" aria-hidden="true"></i></span>
									<select class="form-control" required [(ngModel)]="products.type" name="product" id="product"> <!-- <== changed -->
                    <option value="" selected="selected" disabled>Wybierz typ</option>
                    <option value="produkt">Produkt</option>
                    <option value="usługa">Usługa</option>                    
                  </select>
                  </div>
							</div>
						</div>

          	<div class="form-group">
							<label for="quantity" class="cols-sm-2 control-label">Stan magazynowy</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-list-ol fa-lg" aria-hidden="true"></i></span>
									<input type="number" step="1" [(ngModel)]="products.quantity" class="form-control" name="quantity" id="quantity" required placeholder="Wprowadz ilość"/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="netto" class="cols-sm-2 control-label">netto</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-money fa" aria-hidden="true"></i></span>
									<input type="number" step="0.01" [(ngModel)]="products.netto" class="form-control" name="netto" id="netto" required placeholder="Wprowadz kwotę netto"/>
								</div>
							</div>
						</div>

            	<div class="form-group">
							<label for="vat" class="cols-sm-2 control-label">vat</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-money fa" aria-hidden="true"></i></span>
									<input type="number" step="0.01" [(ngModel)]="products.vat" class="form-control" name="vat" id="vat" required placeholder="Wprowadz podatek vat"/>
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
export class CrmProduktyEdytujComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {

UserId:number;
title:string;

products;

  constructor(dialogService: DialogService, private crmService: CrmServiceService) { 
    super(dialogService);
  }

//Wysyła zmienione dane do funkji edytującej aktualne dane użytkownika z podanymi.
  confirm() {
    this.products.brutto = (parseFloat(this.products.netto)*(1+parseFloat(this.products.vat))).toFixed(2);
    this.crmService.editProductsToDb(this.UserId,this.products);
    this.result = true;
    this.close();
  }

  ngOnInit() {
    this.products = this.crmService.getProductToEdit(this.UserId);
  }

}