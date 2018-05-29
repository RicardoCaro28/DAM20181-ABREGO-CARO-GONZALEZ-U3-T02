import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Stripe } from '@ionic-native/stripe';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  card: any = {
    number: '',
    expMonth: '',
    expYear: '',
    cvc: ''
  };

  text:string="";

  constructor(public navCtrl: NavController, public stripe: Stripe) {
    this.stripe.setPublishableKey('pk_test_006zCNEHDQQF6cqecQft5RfN');
  }

  ionViewDidLoad(){
    this.stripe.setPublishableKey('pk_test_006zCNEHDQQF6cqecQft5RfN');
  }

  
}




