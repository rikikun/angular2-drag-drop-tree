import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[drag-drop]'
})
export class DragDrop {

  constructor(private el:ElementRef) {
  	this.el.nativeElement.attributes.draggable=true;
  	console.log(this.el);
  	console.log('dragDrop');
  }

 //  	@HostListener('mouseenter',['$event']) onmouseenter(event) {
	// 	console.log('mouseenter');
	// 	console.log(event);
	// }

	// @HostListener('mouseup',['$event']) onmouseup(event) {
	// 	console.log(event)
	// }

	// @HostListener('dragstart',['$event']) ondragstart(event) {
	// 	console.log(event.target.getAttribute('data-x'));
	// 	console.log(event.target.dx);
	// 	console.log(event.target.dy);
	// 	console.log('dragStart');
	// 	console.log(event);
	// }

	// @HostListener('drag',['$event']) ondrag(event) {
	// 	// console.log(event);
	// }

	// @HostListener('dragend',['$event']) ondragend(event) {
	// 	console.log('dragend');
	// 	console.log(event);
	// }

	// @HostListener('dragenter') ondragenter() {
	// 	console.log('dragenter');
	// }

	@HostListener('drop',['$event']) ondrop(e) {
		console.log('drop');
		console.log(e);
	}

}
