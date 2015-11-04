import {Component, CORE_DIRECTIVES, OnInit} from 'angular2/angular2';
import {RouteParams, Router} from 'angular2/router';
import {ExtendPhone} from '../core/phone';
import {PhoneService} from '../core/phone.service';
import {Routes} from '../route.config';
import {CheckFlagPipe} from '../blocks/check-flag.pipe';

@Component({
  selector: 'phone-detail',
  templateUrl: './app/phone-detail/phone-detail.component.html',
  styleUrls: ['./assets/custom.style.css'],
  directives: [CORE_DIRECTIVES],
  pipes: [CheckFlagPipe]
})
export class PhoneDetailComponent implements OnInit {
  phone: ExtendPhone;

  constructor(private _phoneService: PhoneService,
    private _routeParams: RouteParams, private _router: Router) { }

  gotoPhones() {
    this._router.navigateByUrl(`${Routes.phones.as.toLowerCase()}`);
  }

  onInit() {
    if (!this.phone) {
      let id = this._routeParams.get('id');
      this._phoneService.getPhone(id).then(phone => this.phone = phone);
    }
  }
}
