import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
sideBar:any[]=[];
  constructor() {  

  }
public createNavBarContent(){
  this.sideBar=[
{
  id:1,
  name:"PERSONAL DETAILS"
},
{
  id:2,
  name:"EMPLOYER DETAILS"
},
{
  id:3,
  name:"COURSE SELECTION"
},
{
  id:4,
  name:"PAYMENT DETAILS"
},
{
  id:5,
  name:"EXAMINATION DETAILS"
},
{
  id:6,
  name:"COURSE MATERIAL"
},
  ];
}
  ngOnInit(): void {
    this.createNavBarContent();
    console.log(this.sideBar);
  }

}
