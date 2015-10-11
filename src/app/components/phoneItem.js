import {Component, View, For} from 'angular2/angular2';

@Component({
    selector: 'phone-item',
    properties: {
        phone: 'phone'
    }
})

@View({
    templateUrl: 'app/components/phoneItem.html',
    directives: [For]
})

export class phoneItem {
    constructor() { }
}
