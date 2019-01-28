import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'EstudioCliente';
  buttonText: string = 'Save';
  isDisabled: boolean = false;
  name : string = "";
  position : string = "";

  saveEvent(){
    if (this.buttonText === 'Save'){
      this.buttonText = 'Edit';
      this.isDisabled = true;
    }else{
      this.buttonText = 'Save';
        this.isDisabled = false;
    }
  }

  showInfo(){
    alert("Nombre: "+this.name+" Trabajo: "+this.position);
  }

  resetInfo(){
    this.name="";
    this.position="";
  }
}
