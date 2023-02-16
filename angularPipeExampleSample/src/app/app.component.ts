import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Build In and Custom Pipe';

  employees:any[]=[
    {Id:1001,Name:'Arup',Gender:'Male',MaritialStatus:'Married'},
    {Id:1002,Name:'Shima',Gender:'Female',MaritialStatus:'Married'},
    {Id:1003,Name:'Leela',Gender:'Female',MaritialStatus:'Married'},
    {Id:1004,Name:'Joseph',Gender:'Male',MaritialStatus:'Unmarried'},
    {Id:1005,Name:'Anjali',Gender:'Female',MaritialStatus:'Unmarried'}
  ];
}
