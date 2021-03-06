import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface SliderData {

   images: String[];
   text: String[];
   slideNumbers: number;
   slideInterval: number;

}

export interface IMessage {
  name?: string,
  email?: string,
  topic?: string,
  message?: string
}


@Injectable()
export class MainPageServiceService {

private emailUrl = './assets/email.php';

sliderData:SliderData = {
  images: ['./assets/mainPage/sliderImg3.jpg' , './assets/mainPage/sliderImg2.jpg', './assets/mainPage/sliderImg1.jpg'],
  text: ['Sprawna organizacja, prosta obsługa i mnóstwo zadowolonych klientów, polecających nasze usługi. Cenimy sobie zdanie naszych starch jak i nowych osób korzystających z naszych usług...',
   'Szeroki zakres usług i pomoc to dwa aspekty, które możesz oczekiwać od naszej firmy. Sprawny kontakt i szybkie odpowiedzi na zadanie pytania, czy problemy sprawia, że nasi klienci są zadowoleni...',
   'Nasza firma, oferuje szeroki zakres usług ułatwiających pracę i zarządzanie klientami. Dzięki Bandalight możesz w prosty sposób zarządzać pracownikami czy też wystawiać faktury VAT.'],
  slideNumbers: 3,
  slideInterval: 6500
};

getSliderImages(){
    return this.sliderData;
}



constructor(private http: Http) { }

//Funkcja wysylajaca potrzebne dane po protokole http do pliku php odpowiadajacego za wysylke mailingu
 sendEmail(message: IMessage): Observable<IMessage> | any {
    return this.http.post(this.emailUrl, message)
      .map(response => {
        return response;
      })
      .catch(error => {
        return Observable.throw(error)
      })
  }


}