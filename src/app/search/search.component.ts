import { Output, Input, Component, OnInit } from '@angular/core';
import { SearchResultService } from '../searchResult.service';
import { FormControl } from '@angular/forms';
import { EventEmitter } from 'selenium-webdriver';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search = [];
  private inputControl: any;
  public inputValue: string;
  public test:string="2";

  constructor(private searchResultService: SearchResultService) { }
  public setValue() {
    this.searchResultService.myValue = this.test;
  }
  ngOnInit() {
    this.setValue();
    this.searchResultService.getInfo()
      .subscribe(search => console.log(search));
    this.inputControl = new FormControl();
    this.inputControl.valueChanges.subscribe(
      value => { this.inputValue = value });
  }
}
