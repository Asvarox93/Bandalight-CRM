import { Component, OnInit } from '@angular/core';
import { MapTypeStyle } from 'angular2-google-maps/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MainPageServiceService, IMessage } from '../main-page/mainPageService.service';

@Component({
  selector: 'sbc-kontakt-page',
  templateUrl: './kontakt-page.component.html',
  styleUrls: ['./kontakt-page.component.scss']
})
export class KontaktPageComponent implements OnInit {
  
  lat: number = 50.04132;
  lng: number = 21.99901;

  zoom: number = 12;
  draggable : boolean = false;
  styl: MapTypeStyle[]=[
    {
        "featureType": "landscape",
        "stylers": [
            {
                "hue": "#FFBB00"
            },
            {
                "saturation": 43.400000000000006
            },
            {
                "lightness": 37.599999999999994
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "hue": "#FFC200"
            },
            {
                "saturation": -61.8
            },
            {
                "lightness": 45.599999999999994
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "hue": "#FF0300"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 51.19999999999999
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "hue": "#FF0300"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 52
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "hue": "#0078FF"
            },
            {
                "saturation": -13.200000000000003
            },
            {
                "lightness": 2.4000000000000057
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "hue": "#00FF6A"
            },
            {
                "saturation": -1.0989010989011234
            },
            {
                "lightness": 11.200000000000017
            },
            {
                "gamma": 1
            }
        ]
    }
  ];

  mail: IMessage = {};
  mailStatus = "";
  mailConfirm;

  constructor(private mainService:MainPageServiceService) { }

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

  ngOnInit() {
  }

}
