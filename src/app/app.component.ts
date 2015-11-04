import {Component} from 'angular2/angular2';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes, APP_ROUTES} from './route.config';

@Component({
  selector: 'app',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
  constructor(private _router: Router) {
    _router.navigate([`/${Routes.phones.as}`]);
  }
}
