import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyDemoPage } from './company-demo';

@NgModule({
  declarations: [
    CompanyDemoPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyDemoPage),
  ],
})
export class CompanyDemoPageModule {}
