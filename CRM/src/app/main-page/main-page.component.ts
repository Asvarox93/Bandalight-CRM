import { MainPageServiceService, SliderData } from './mainPageService.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import {Http} from "@angular/http";

@Component({
  selector: 'sbc-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  sliderDate:SliderData = {
    images: [],
    text: [],
    slideNumbers: 0,
    slideInterval: 0
  };
  slideId = 0;

  mail;
  http : Http;
  endpoint : string;

  constructor(private mainService:MainPageServiceService, http : Http) {
    this.sliderDate = this.mainService.getSliderImages();
    this.mail = [];
    this.http = http;
  }

  ngOnInit() {
  //  this.endpoint = "/sendEmail.php"
  }


sendEmail(){



   let postVars = {
      email : this.mail.email,
      name : this.mail.name,
      message : this.mail.message,
      topic: this.mail.topic
    };

    //You may also want to check the response. But again, let's keep it simple.
    this.http.post(this.endpoint, postVars)
        .subscribe(
            response => console.log(response),
            response => console.log(response)
        )
  }  

}
