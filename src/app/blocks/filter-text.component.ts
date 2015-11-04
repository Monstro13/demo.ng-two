import {Component, EventEmitter} from 'angular2/angular2';
import {FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'filter-text',
  outputs: ['changed'],
  template: `
    <form>
         Filter:
         <input type="text"
                [(ng-model)]="filter"
                (keyup)="filterChanged($event)" />
    </form>
  `,
  directives: [FORM_DIRECTIVES]
})
export class FilterTextComponent {
  public filter: any;
  public changed: EventEmitter;

  constructor() {
    this.changed = new EventEmitter();
  }

  filterChanged(event: any) {
    event.preventDefault();
    console.log(`Filter Changed: ${this.filter}`);
    this.changed.next(this.filter);
  }
}