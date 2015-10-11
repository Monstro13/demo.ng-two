import {Component, View, bootstrap, For} from 'angular2/angular2';
import {phoneService} from 'app/services/phone.service';
import {Inject} from 'angular2/di';

import {phoneItem} from 'app/components/phoneItem';

@Component({
    selector: 'app',
    injectables: [phoneService]
})
@View({
    templateUrl: 'app/main.html',
    directives: [For, phoneItem]
})

class App {
    constructor(phone: phoneService) {
        this.phoneService = phone;
        this.activate(this.phoneService);
    }

    activate(phoneService) {
        this.phones = phoneService.all();
        this.backUp = this.phones;
    }

    filter(pattern) {
        if (pattern.length)
            this.phones = this.backUp.filter((item) => {
                return ~item.id.indexOf(pattern) || ~item.snippet.indexOf(pattern);
            });
        else this.phones = this.backUp;
    }

    openPhone(id) {
        this.phone = this.phoneService.byId(id);
    }

    getBack() {
        this.phone = null;
    }
}

bootstrap(App);
