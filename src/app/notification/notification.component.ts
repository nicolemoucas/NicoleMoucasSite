import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template:   `<div class="alert alert-success" [ngClass]="{fadeOut: displayNotification}"> <!--[hidden]="displayNotification"-->
                <p>🍪 This website uses cookies to provide better user experience.🍪</p>
                <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
              </div>`, 
/* Not a great practice to mix html with TypeScript code
** Errors will not be shown until compile time
** If this expands over 3 lines use templateUrl instead
*/
  styles: ["div{margin: 10px 0px; padding: 10px 20px; text-align:center;}", 
          "p{font-size: 14px; }",
          ".close{float: right; margin-top: -48px;}",
          ".fadeOut {opacity: 0; transition: visibility 0s 2s, opacity 2s linear; visibility: hidden;} "
        ]
})
export class NotificationComponent {
  displayNotification: boolean = false;

  closeNotification(){
    this.displayNotification = true;
  }
}
