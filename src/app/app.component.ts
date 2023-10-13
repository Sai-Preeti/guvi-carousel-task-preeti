import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carousel';
  source=[
    "https://images.unsplash.com/photo-1685297965194-5eb9b8d51a05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    "https://images.unsplash.com/photo-1696395160399-ca8f4884e7ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    "https://images.unsplash.com/photo-1696332331308-8a064129a487?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://plus.unsplash.com/premium_photo-1676571232331-787a2c679aee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1905&q=80",
    "https://images.unsplash.com/photo-1696491299641-4682b7ef54b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
  ]
  no:number=0;
  nextImage():void
  {
    this.no=(this.no+1)%5;
  }
 numbers=[0,1,2,3,4]

  prevImage():void
  {
    if(this.no==0)
    this.no=4;
  else
  this.no=this.no-1;
  }

  getImage(idx:number):void
  {
    this.no=idx;
  }
  
  constructor(){
    setInterval(():void=>{
      this.no=(this.no+1)%5;
    },7000);
  }
}
