import { Component } from '@angular/core';
import {TreeComponent} from './components/tree';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[TreeComponent]
})
export class AppComponent {
  title = 'app works!';

  items=[
  	{id:"id",name:"name1",child:"url",children:[{id:"id",name:"name2"},{id:"id",name:"name2"}]},
  	{id:"id",name:"name2",child:"url",children:[{id:"id",name:"name2"},{id:"id",name:"name2"}]},
  	{id:"id",name:"name3"},
  	{id:"id",name:"name4",child:"url",children:[]},
  ];

  changeNode() {
  	console.log('change');
  }
}
