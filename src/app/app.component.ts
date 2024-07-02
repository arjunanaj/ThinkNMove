import { Component } from '@angular/core';
import{ faPhoneAlt ,faCheck,faPhoneSquare,faMapLocationDot,faLocation} from '@fortawesome/free-solid-svg-icons';
import{ faWhatsapp ,faFacebookF,faGooglePlusG,faTwitter,faInstagram,faLinkedin,faGithub, faSquareGooglePlus, faGooglePlusSquare, faFacebookMessenger, faFacebook, faGithubAlt, faXTwitter, faLinkedinIn, faFacebookSquare, faSquareXTwitter, faGooglePlus} from '@fortawesome/free-brands-svg-icons';
import{ faEnvelope,faUser} from '@fortawesome/free-solid-svg-icons';
import { Consulation } from './consulation';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { ConsulationService } from './consulation.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Think N Move';
 call=faPhoneAlt 
 whatsup=faWhatsapp
 address=faLocation
 list=faCheck
 mail=faEnvelope
 user=faUser
 phone=faPhoneSquare
 location=faMapLocationDot
 fb=faFacebook
 twitter=faXTwitter
 insta=faInstagram
 linkedIn=faLinkedinIn
 git=faGithub
 loginning=false;
 success=faCheckCircle
 error=faExclamationCircle
 phoneNumber="7603882854"
 loading=false;
 consulation:Consulation=new Consulation();

 whatsapp: string = '7603882854'; // Replace with your phone number
 message: string = 'Hello Sir!'; // Replace with your pre-filled message
 whatsappLink: string;

 constructor(private consulationServ:ConsulationService){
  this.whatsappLink = `https://wa.me/${this.whatsapp}?text=${encodeURIComponent(this.message)}`;
 }

 makeCall() {
  if (this.phoneNumber) {
    window.location.href = `tel:${this.phoneNumber}`;
  } else {
    alert('Please enter a valid phone number');
  }
}

BookNow(){
  this.loading=true;
  this.consulationServ.sendConsulation(this.consulation).subscribe((data)=>{

     if(data.body=="Mail send Successfully"){
      this.loading=false;
      Swal.fire({
        icon:'success',
        iconColor:'green',
        title: 'Thank you ',
        text: ' we will reach you back soon...',
        width: '380px'  ,
         customClass: 'swal-height'
      });
     }
  },error=>{
    
     this.loginning=false

     if(error){
      Swal.fire({
        icon:'error',
          iconColor:'red',
        title: 'Something went wrong',
        text: 'Internal server issue  try again later',
        width: '380px'  ,
         customClass: 'swal-height'
      });
     }
      }).add(()=>{
        this.loading=false;
      })

}



}



