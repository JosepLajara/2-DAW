import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'ProyectoApp';
  buttonText: string = 'Save';
  isDisabled: boolean = false;
  name: string = '';
  position: string = '';
  urls = ['https://api.adorable.io/avatars/285/1.png',
  'https://api.adorable.io/avatars/285/2.png',
  'https://api.adorable.io/avatars/285/3.png',
  'https://api.adorable.io/avatars/285/4.png']

  saveEvent(){
    if (this.buttonText === 'Save') {
      this.buttonText = 'Edit';
      this.isDisabled=true;
    }else{
      this.buttonText = 'Save';
      this.isDisabled=false;
    }
  }

  showInformation(){
    alert(this.name+' '+this.position);
  }

  resetInformation(){
    this.name='';
    this.position='';
  }

}