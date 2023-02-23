import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  ngOnInit(): void{
  }
  slogan: string = 'A little more than you need to know about me.'
  source: string = "/assets/Nicole1.jpg";
  
  getSlogan(){
    return 'A little more than you need to know about me.'
  }
}
