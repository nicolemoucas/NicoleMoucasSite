import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts = [
    {id:1, name:'21 cosas en 22 años', fecha:new Date('2023-02-21'), autor: 'Nicole Moucas', tiempoLectura: '11', imagen: '/assets/Nicole1.jpg'},
    {id:2, name:'22 cosas en 22 años', fecha:new Date('2023-02-22'), autor: 'Nicole Moucas', tiempoLectura: '12', imagen: '/assets/Nicole1.jpg'},
    {id:3, name:'23 cosas en 22 años', fecha:new Date('2023-02-23'), autor: 'Nicole Moucas', tiempoLectura: '13', imagen: '/assets/Nicole1.jpg'},
    {id:4, name:'24 cosas en 22 años', fecha:new Date('2023-02-24'), autor: 'Nicole Moucas', tiempoLectura: '14', imagen: '/assets/Nicole1.jpg'},
    {id:5, name:'25 cosas en 22 años', fecha:new Date('2023-02-25'), autor: 'Nicole Moucas', tiempoLectura: '15', imagen: '/assets/Nicole1.jpg'},
  ];
  today = new Date();
}
