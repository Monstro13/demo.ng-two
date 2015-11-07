import {Component, CORE_DIRECTIVES, OnInit} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Phone} from '../../core/phone';
import {PhoneDetailComponent} from '../phone-detail/phone-detail.component';
import {PhoneService} from '../../core/phone.service';
import {FilterService} from '../../blocks/filter.service';
import {FilterTextComponent} from '../../blocks/filter-text.component';
import {Routes} from '../../route.config';

@Component({
  selector: 'phones',
  templateUrl: './app/components/phones/phones.component.html',
  directives: [PhoneDetailComponent, CORE_DIRECTIVES, FilterTextComponent],
  styleUrls: ['./app/components/phones/phones.component.css']
})
export class PhonesComponent implements OnInit {
  public phones: Phone[];
  public filteredPhones = this.phones;
  public selectedPhone: Phone;
  public filterText = '';

  constructor(private _filterService: FilterService,
    private _phoneService: PhoneService, private _router: Router) { }

  getPhones() {
    this.selectedPhone = undefined;
    this.phones = [];
    this._phoneService.getPhones()
      .then(phones =>
        this.phones = this.filteredPhones = phones
      );

    return this.phones;
  }

  getSelectedClass(phone: Phone) {
    return { 'selected': phone === this.selectedPhone };
  }

  goDetail() {
    this._router.navigateByUrl(`${Routes.detail.as.toLowerCase()}/${this.selectedPhone.id}`);
  }

  onInit() { return this.phones = this.getPhones(); }

  onSelect(phone: Phone) { this.selectedPhone = phone; }

  filterChanged(searchText: string) {
    this.filteredPhones = this._filterService.filter(searchText, ['id', 'name'], this.phones);
  }
}
