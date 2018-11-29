import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PasswordDemoPage } from '../password-demo/password-demo';

/**
 * Generated class for the CompanyDemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company-demo',
  templateUrl: 'company-demo.html',
})
export class CompanyDemoPage {
    cmp_name:string;
    flag:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyDemoPage');
  }

  user_info = [{
    "user_name" : "Jason",
    "company_name" : "xyz",
    "u_password" : "123"
},
{
  "user_name" : "Ank",
  "company_name" : "ABC",
  "u_password" : "456"
}];
  demo1()
  { 

    for(let i in this.user_info)
    {
    console.log("i= "+this.user_info[i].user_name);
    if(this.user_info[i].company_name===this.cmp_name)
    {
      this.flag=true;
      break;

    }
    }
    console.log(this.cmp_name);
    if(this.flag)
    this.navCtrl.push(PasswordDemoPage);
    else
    alert("Invalid username ")
    
  
  }

}
