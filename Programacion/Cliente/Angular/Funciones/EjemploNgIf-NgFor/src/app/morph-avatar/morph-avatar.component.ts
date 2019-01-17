import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'morph-avatar',
  templateUrl: './morph-avatar.component.html',
  styleUrls: ['./morph-avatar.component.css']
})
export class MorphAvatarComponent implements OnInit {

  @Input() avatars : string[] = [];
  index : number = 0;

  constructor() { }

  ngOnInit() {
    setInterval( ()=>{
      console.log('Hola');
      this.index = (this.index+1)%this.avatars.length;
    } , 5000);
  }

}
