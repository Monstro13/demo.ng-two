import {PhonesComponent} from './components/phones/phones.component';
import {PhoneDetailComponent} from './components/phone-detail/phone-detail.component';

export var Routes = {
	phones: {
		path: '/phones',
		as: 'Phones',
		component: PhonesComponent
	},
	detail: {
		path: '/detail/:id',
		as: 'Detail',
		component: PhoneDetailComponent
	}
};

export const APP_ROUTES = [
	this.Routes.detail,
	this.Routes.phones
];
