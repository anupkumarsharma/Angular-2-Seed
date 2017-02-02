import { Injectable } from '@angular/core';
@Injectable()
export class GlobalService {
  public configurationService: string;
  public buildType: string;

  constructor() {
    this.configurationService = process.env.APP_CONFIG;
    this.buildType = process.env.Build_Type;
  }
}
