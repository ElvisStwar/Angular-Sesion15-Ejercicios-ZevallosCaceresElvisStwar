import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  titulo:string="Data Binding Interpolation";
  parrafo:string="";
  num=0;
  boton="Mostrar"

  mostrar(){
    this.num= this.num+1
    if(this.num%2!=0){
      this.parrafo="Event Binding es el mecanismo de data binding mediante el cual trabajan con los eventos que se encuentran en el DOM.";
      this.boton="Ocultar";
    }else{
      this.parrafo=""
      this.boton="Mostrar";
    }
  }

  parrafo2:string="El two-way data binding en Angular nos permite modificar el valor de una propiedad de forma bidireccional, de forma que cuando nosotros modificamos el valor de una propiedad en la vista el valor también se actualiza en el modelo de datos.";
}
