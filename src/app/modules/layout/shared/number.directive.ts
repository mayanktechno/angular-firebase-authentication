import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumber]'
})
export class NumberDirective {

  count = 0;
  constructor() { }

  ngOnInit() { }


  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {


    if (e.keyCode === 190 && e.target['value'].split('.').length === 2) {
      return false;
    }


    if (
      [46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
      (e.keyCode === 65 && e.ctrlKey === true) || // Allow: Ctrl+A
      (e.keyCode === 67 && e.ctrlKey === true) || // Allow: Ctrl+C
      (e.keyCode === 86 && e.ctrlKey === true) || // Allow: Ctrl+V
      (e.keyCode === 88 && e.ctrlKey === true) || // Allow: Ctrl+X
      (e.keyCode === 65 && e.metaKey === true) || // Cmd+A (Mac)
      (e.keyCode === 67 && e.metaKey === true) || // Cmd+C (Mac)
      (e.keyCode === 86 && e.metaKey === true) || // Cmd+V (Mac)
      (e.keyCode === 88 && e.metaKey === true) || // Cmd+X (Mac)
      (e.keyCode >= 35 && e.keyCode <= 39)
    ) {
      return;
    }
    if (e.keyCode == 190) {
      return;

    }
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  }



}