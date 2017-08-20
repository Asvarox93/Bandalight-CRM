import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import {CrmServiceService} from '../crm-service.service';

export interface ConfirmModel {
  title:string;
  message:string;
}

@Component({
  selector: 'sbc-crm-produkty-dodaj',
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
				<h5>Uzupełnij poniższe pola aby dodać produkt</h5>
					<div class="alert-danger mt-2 mb-2" *ngIf="errorMessage">{{errorMessage}}</div>
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
									<input type="number" step="1" [(ngModel)]="products.vat" class="form-control" name="vat" id="vat" required placeholder="Wprowadz podatek vat"/>
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
	.main-center{
		margin: 0 auto;
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
export class CrmProduktyDodajComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
title: string;
message: string;
errorMessage;
products;

  constructor(dialogService: DialogService, private crmService: CrmServiceService) {
    super(dialogService);
    this.products = [];
   }
  //Potwierdzenie dodania produktu i wysłanie danych do funkcji zajmującej się dodaniem produktu do bazy danych 
  confirm() {
	 this.errorMessage = "";
   var nazwaTowaruValidation = new RegExp("^[0-9A-ząśćżźóęńł]{3,20}$");
   if(this.products.name != null && this.products.type != null && this.products.netto != null 
    && this.products.name !="" && this.products.type != "" && this.products.netto != "" ){
			if(this.products.vat == undefined){
				this.products.vat = 0;
			}
			if(!nazwaTowaruValidation.test(this.products.name)){
				this.errorMessage += "Nazwa produktu jest niepoprawna. Maksymalnie od 3 do 15 znaków!\n"
			}
			if(this.products.quantity < 1 || this.products.quantity > 1000000 || this.products.quantity == undefined){
				this.errorMessage += "Stan magazynowy nie może być mniejszy od 1!\n";
			}
			if(this.products.netto < 0 ||  this.products.netto > 1000000){
				this.errorMessage += "Wartość netto nie może być mniejsze od zera i większe od miliona!\n";
			}
			if(this.products.vat < 0 || this.products.vat > 100){
				this.errorMessage += "Wartość podatku vat nie może być mniejsze od zera i większe od stu!\n";
			}
			
			
			if(this.errorMessage == ""){
		    this.products.brutto = (parseFloat(this.products.netto)*(1+(parseFloat(this.products.vat)/100))).toFixed(2);
		    this.crmService.sendProductToDB(this.products);
		    this.result = true;
				this.close();
		};
		}else{
			this.errorMessage += "Wszystkie dane muszą zostać wprowadzone!\n";
		}
  }

  ngOnInit() {
  }

}
