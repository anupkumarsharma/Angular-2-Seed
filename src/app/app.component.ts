import { Component } from '@angular/core';

import { GlobalService } from '../globals/globalService';

@Component({
  providers: [GlobalService],
  selector: 'my-app',
  template: '<h1>Hello {{name}}</h1> {{globals}} <div> <a href="/"><img src="../images/image.jpg"></a></div>',

})
export class AppComponent {
  public name: string = 'Angular';
  public globals = GlobalService;
}
