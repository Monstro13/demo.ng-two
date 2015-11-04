import {PhonesComponent} from './phones/phones.component';
import {PhoneDetailComponent} from './phone-detail/phone-detail.component';

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
