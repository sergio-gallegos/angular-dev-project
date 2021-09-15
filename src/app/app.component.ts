import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 'Textto de prueba',
  styleUrls: ['./app.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
