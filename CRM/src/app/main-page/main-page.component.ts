import { MainPageServiceService, SliderData, IMessage } from './mainPageService.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'sbc-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  closeResult: string;

  sliderDate:SliderData = {
    images: [],
    text: [],
    slideNumbers: 0,
    slideInterval: 0
  };
  slideId = 0;

  mail: IMessage = {};
  mailStatus = "";
  mailConfirm;

  constructor(private mainService:MainPageServiceService) {
    this.sliderDate = this.mainService.getSliderImages();
  }

  ngOnInit() {
  
  }


sendEmail(message: IMessage) {
   if(message !== undefined && message !== null){
    this.mainService.sendEmail(message).subscribe(res => {


      this.mailStatus = 'Wiadomość została pomyślnie wysłana!';
      this.mailConfirm = true;
    }, error => {
      this.mailStatus = 'Wiadomość nie została pomyślnie wysłana!';
      this.mailConfirm = false;
    })
   }
  }
  
isSended(){
  return this.mailConfirm === true;
}

}
