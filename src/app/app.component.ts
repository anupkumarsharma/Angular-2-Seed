import { Component } from '@angular/core';
// let img = require('./image.jpg');


@Component({
  selector: 'my-app',
  template: '<h1>Hello {{name}}</h1>   <div> <a href="/"><img src="../images/image.jpg"></a></div>',
})
export class AppComponent { name = 'Angular'; }



