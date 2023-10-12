import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error-handle',
  templateUrl: './error-handle.component.html',
  styleUrls: ['./error-handle.component.scss']
})
export class ErrorHandleComponent {

  @Input() error: any;

  @Output() close_error = new EventEmitter<void>()

 

onClose(){
  console.log('clicked');
  this.close_error.emit()
  
}

}
