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

	state='load';

	dragValid=false;

	@Input('level') level:number;

	@Input('self') self:any;

	constructor() {}

	ngOnInit() {
		console.log(this.self);
	}

	loadChild() {
		if(this.state==='load') {
			let id = new Date().getTime();
			this.self.children.push({id:id,name:"name1",child:"url",children:[]});
			this.state='delete';
		}else {
			this.self.children=[];
			this.state='load';
		}
	}

	dragStart(e,id,valid) {
		if(valid) {
			console.log(e);
			console.log(id);
			console.log(valid);
			e.dataTransfer.setData("text", id);
			e.dataTransfer.setData("number", this.level);
			this.self.children=[];
		}
	}

	allowDrop(ev) {
		ev.preventDefault();
	}

	onDrop(e) {
		e.preventDefault();
		let level=e.dataTransfer.getData("number");
		let id=e.dataTransfer.getData("text");
		if( ((this.level+1).toString()===level.toString()) && id) {
			this.self.children.push({id:id,name:"name1",child:"url",children:[]});

		}
	}

}
