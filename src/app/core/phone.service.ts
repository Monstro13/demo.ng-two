import {Http} from 'angular2/http';
import {Phone, ExtendPhone} from './phone';
import {Injectable} from 'angular2/angular2';

@Injectable()
export class PhoneService {
	constructor(private _http: Http) { }

	getPhones(): Promise<Phone[]> {
		let promise = this._http.get('assets/phones/phones.json')
			.map((response: any) => response.json()).toPromise()
			.then((phones: Phone[]) => {
				return phones;
			})
			.then((_: any) => _, (e: any) => this._fetchFailed(e));
		return promise;
	}

	private _fetchFailed(error: any) {
		console.error(error);
		return Promise.reject(error);
	}

	getPhone(id: string): Promise<ExtendPhone> {
		let promise = this._http.get(`assets/phones/${id}.json`)
			.map((response: any) => response.json()).toPromise()
			.then((phone: ExtendPhone) => {
				return phone;
			})
			.then((_: any) => _, (e: any) => this._fetchFailed(e));
		return promise;
	}
}
