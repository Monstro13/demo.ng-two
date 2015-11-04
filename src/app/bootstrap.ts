import {bootstrap} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {FilterService} from './blocks/filter.service';
import {PhoneService} from './core/phone.service';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	FilterService,
	PhoneService
]).then(
	success => console.log(`Bootstrap success`),
	error => console.log(error)
);
