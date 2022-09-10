import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-lowvelocity',
  templateUrl: './lowvelocity.component.html',
  styleUrls: ['./lowvelocity.component.scss']
})
export class LowVelocityComponent implements OnInit {

  quote: string | undefined;
  isLoading = false;

  constructor() { }

  ngOnInit() {
    this.isLoading = false;
  }

}
