import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js';
import { AppModule } from './app/app.module';
import './app/app.scss';

// tslint:disable-next-line:no-var-requires
const config =  process.env.APP_CONFIG; // require('APP_CONFIG');
// tslint:disable-next-line:no-console
console.log(config);
console.log(process.env);
// onst server_api_key = APP_CONFIG.api_key;

if (process.env.ENV === 'build') {
  // tslint:disable-next-line:no-console
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
