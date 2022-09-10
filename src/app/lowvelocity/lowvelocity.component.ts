import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-lowvelocity',
  templateUrl: './lowvelocity.component.html',
  styleUrls: ['./lowvelocity.component.scss']
})
export class LowVelocityComponent implements OnInit {

  isLoading = false;
  fileName = '';

  constructor() { }

  ngOnInit() {
    this.isLoading = false;
  }

  onFileSelected(event: any) {

    if (event != null) {
      const file:File = event.target.files[0];
  
      if (file) {
  
          this.fileName = file.name;
  
          const formData = new FormData();
  
          formData.append("thumbnail", file);
  
      }
    }
}
}
