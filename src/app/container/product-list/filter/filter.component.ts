import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  


  @Input() all: number = 0;
  @Input() inStock: number = 0;
  @Input() outOfStock: number = 0;

  @Output() selectedFilterRadioButtonChanged = new EventEmitter<String>();

  selectedFilterRadioButton: string = 'all';

  onSelectedFilterRadioButtonChanged(selectedFilter: string) {
    this.selectedFilterRadioButton = selectedFilter;
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }

}
