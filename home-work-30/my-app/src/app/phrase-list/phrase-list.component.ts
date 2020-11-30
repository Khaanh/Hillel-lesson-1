import { Component, OnInit } from '@angular/core';
import { phrasesList as PHRASES} from '../core/data/phrasesList';
import { Phrases } from '../core/models/phrases';

@Component({
  selector: 'app-phrase-list',
  templateUrl: './phrase-list.component.html',
  styleUrls: ['./phrase-list.component.scss']
})
export class PhraseListComponent implements OnInit {
  phrasesList: Phrases[] = PHRASES.slice();
  newLanguage: string;
  newValue: string;

  constructor() {}

  ngOnInit(): void {
  }

  addPharas() {
    this.phrasesList.push({value: this.newValue, language: this.newLanguage})
  }

}
