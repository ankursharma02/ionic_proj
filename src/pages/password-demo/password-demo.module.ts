import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasswordDemoPage } from './password-demo';

@NgModule({
  declarations: [
    PasswordDemoPage,
  ],
  imports: [
    IonicPageModule.forChild(PasswordDemoPage),
  ],
})
export class PasswordDemoPageModule {}
