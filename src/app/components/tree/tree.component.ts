import { Component, OnInit, Input } from '@angular/core';
import {NodeComponent} from './node';

@Component({
	moduleId: module.id,
	selector: 'app-tree',
	templateUrl: 'tree.component.html',
	styleUrls: ['tree.component.css'],
	directives:[NodeComponent]
})
export class TreeComponent implements OnInit {

	@Input('data') data:any[];

	constructor() {}

	ngOnInit(){
		console.log(this.data);
	}

}
