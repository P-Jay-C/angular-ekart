import { NgClass, NgIf } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule, NgIf, NgClass],
  standalone: true,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchText: string = '';

constructor() {
}

// 1. Create an event 
@Output()
searchTextChanged = new EventEmitter<string>();

@ViewChild("searchInput")
searchInputElement: ElementRef;

onSearchTextChanged() {
  
}

  updateSearchText() {

    this.searchText = this.searchInputElement.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
}


}
