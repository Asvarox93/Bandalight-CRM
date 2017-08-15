import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'sbc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    startScrollWindows = false;
    constructor(private router: Router) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            if(this.startScrollWindows != false && this.router.url === "/" || this.router.url === "/oferta" || this.router.url === "/pomoc" || this.router.url === "/kontakt"){
            var timerIterval = setInterval(function() {
                    window.scrollBy(0, 10);

                    if( window.pageYOffset >= 600 )
                     clearInterval(timerIterval);
                }, 13);
            }else{
                this.startScrollWindows = true;
            }            
           
        });
        
    }
}


