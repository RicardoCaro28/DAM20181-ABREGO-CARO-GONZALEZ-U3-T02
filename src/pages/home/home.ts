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


send(){
    console.log(this.card);
    this.stripe.createCardToken(this.card)
    .then(token =>{ //console.log(token.id)
    this.text=token.id;
    console.log("este es el token"+this.text);
    })
    .catch(error => console.error(error));
  }

  
}




