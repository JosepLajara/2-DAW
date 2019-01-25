import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
 @Input() avatars: string[] = [];
  index: number = 0;
  constructor() { }

  ngOnInit() {
    setInterval( ()=>{
    this.index = (this.index+1)%this.avatars.length;
  } , 2000);
}
}
