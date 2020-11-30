import { Component, OnInit } from '@angular/core';
import { countries as CNTR } from '../core/data/countries';
import { Country } from '../core/models/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  countries: Country[] = CNTR.slice();
  currentCountry: string;
  currentCapital: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.countries);
  }

  addCountry() {
    this.countries.push({ name: this.currentCountry, capital: this.currentCapital})
  }


}
