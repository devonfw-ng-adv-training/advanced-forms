import {Component, forwardRef, Input, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MatSelect} from '@angular/material';
import {Genre} from '@book/genre';

@Component({
  selector: 'app-customized-select-box',
  templateUrl: './customized-select-box.component.html',
  styleUrls: ['./customized-select-box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomizedSelectBoxComponent),
      multi: true
    }
  ]
})
export class CustomizedSelectBoxComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder: string;
  @Input() options: Genre[] = [];

  @ViewChild(MatSelect) matSelect: MatSelect;

  selected: any;
  private propagateChange = (val: any) => {};

  constructor() {
  }


  ngOnInit(): void {
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this.matSelect.value = obj;
    this.setSelectedIfGenreDefined();
  }

  onSelectionChange() {
    this.setSelectedIfGenreDefined();
    this.propagateChange(this.matSelect.value);
  }

  private setSelectedIfGenreDefined() {
    const genre = this.findGenreById(this.matSelect.value);
    if (genre) {
      this.selected = genre.name;
    }
  }

  private findGenreById(id: number): Genre {
    return this.options.find(genre => genre.id === id);
  }
}
