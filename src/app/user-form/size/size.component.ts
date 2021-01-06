import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SizeComponent),
    multi: true
  }]
})
export class SizeComponent implements ControlValueAccessor {

  OnChangefn = (_) => _;

  writeValue(obj: any): void {
    this.size = obj;
  }
  registerOnChange(fn: any): void {
    this.OnChangefn = fn;
  }
  registerOnTouched(fn: any): void {

  }
  setDisabledState?(isDisabled: boolean): void {

  }

  private _size: string;

  public get size(): string {
    return this._size;
  }
  public set size(v: string) {
    this._size = v;
  }

  setSize(size) {
    this.size = size
    this.OnChangefn(this.size)
  }



}
