import { Component, OnInit, Input } from '@angular/core';
import {DragDrop} from '../../../directive/drag-drop.directive';

@Component({
	moduleId: module.id,
	selector: 'app-node',
	templateUrl: 'node.component.html',
	styleUrls: ['node.component.css'],
	directives:[NodeComponent,DragDrop]
})
export class NodeComponent implements OnInit {

	@Input('self') self:any;

	state='load';

	constructor() {}

	ngOnInit() {
		console.log(this.self);
	}

	loadChild() {
		if(this.state==='load') {
			this.self.children.push({id:"id",name:"name1",child:"url",children:[]});
			this.state='delete';
		}else {
			this.self.children=[];
			this.state='load';
		}
	}

}
