import { Component, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-displayer',
  template:
  `
    <app-navigator></app-navigator>
    <router-outlet (activate)="getTitle($event)"></router-outlet>
  `
})
export class DisplayerComponent {

  @Output() titleEvent = new EventEmitter<string>();

  getTitle(elementRef:any) {
    elementRef.titleEvent.subscribe((event: string) => {
        this.titleEvent.emit(event);
    })
  }
}
