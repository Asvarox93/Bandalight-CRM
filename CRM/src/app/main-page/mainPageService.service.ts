import { Injectable } from '@angular/core';


export interface SliderData {

   images: String[];
   text: String[];
   slideNumbers: number;
   slideInterval: number;

}

@Injectable()

export class MainPageServiceService {

sliderData:SliderData = {
  images: ['http://lorempixel.com/900/500?r=1' , 'http://lorempixel.com/900/500?r=2', 'http://lorempixel.com/900/500?r=3'],
  text: ['Testowa wiadomosc' , 'Ta juz nie jest testowa:)', 'A jak tutaj dojde to cud.'],
  slideNumbers: 3,
  slideInterval: 1500
};

getSliderImages(){
    return this.sliderData;
}



constructor() { }

}