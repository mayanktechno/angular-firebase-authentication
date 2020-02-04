import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gridimage',
  templateUrl: './gridimage.component.html',
  styleUrls: ['./gridimage.component.css']
})
export class GridimageComponent implements OnInit {

  @Input() imageData;
  // @Input() link;
  @Input() heading;
  @Input() headTitle;

  
  constructor() { }

  ngOnInit() {
    
  }

}
