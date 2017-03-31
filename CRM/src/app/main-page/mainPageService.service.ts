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
  images: ['../../../assets/mainPage/sliderImg3.jpg' , '../../../assets/mainPage/sliderImg2.jpg', '../../../assets/mainPage/sliderImg1.jpg'],
  text: ['Sprawna organizacja, prosta obsługa i mnóstwo zadowolonych klientów, polecających nasze usługi. Cenimy sobie zdanie naszych starch jak i nowych osób korzystających z naszych usług...',
   'Szeroki zakres usług i pomoc to dwa aspekty, które możesz oczekiwać od naszej firmy. Sprawny kontakt i szybkie odpowiedzi na zadanie pytania, czy problemy sprawia, że nasi klienci są zadowoleni...',
   'Nasza firma, oferuje szeroki zakres usług ułatwiających pracę i zarządzanie klientami. Dzięki Bandalight możesz w prosty sposób zarządzać pracownikami czy też płacić faktury VAT.'],
  slideNumbers: 3,
  slideInterval: 6500
};

getSliderImages(){
    return this.sliderData;
}



constructor() { }

}