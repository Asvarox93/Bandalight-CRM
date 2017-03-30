import { MainPageServiceService, SliderData } from './mainPageService.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';


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
  }

  
  slideId = 0;

  constructor(private mainService:MainPageServiceService) {
    this.sliderDate = this.mainService.getSliderImages();
    
     
   }
  ngOnInit() {
    
  }









  

}
