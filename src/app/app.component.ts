import { Component, OnInit } from '@angular/core';
import{ faPhoneAlt ,faCheck,faPhoneSquare,faMapLocationDot,faLocation,faStar} from '@fortawesome/free-solid-svg-icons';
import{ faWhatsapp ,faInstagram, faFacebookF} from '@fortawesome/free-brands-svg-icons';
import{ faEnvelope,faUser} from '@fortawesome/free-solid-svg-icons';
import { Consulation } from './consulation';
import { ConsulationService } from './consulation.service';
import * as AOS from 'aos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

   ngOnInit() {
AOS.init({
  duration:1200,
  easing:'linear',
  once:true,
  disable: 'mobile'
 
  
})
}
  title = 'Think N Move';
 call=faPhoneAlt 
 whatsup=faWhatsapp
 address=faLocation
 list=faCheck
 mail=faEnvelope
 user=faUser
 phone=faPhoneSquare
 location=faMapLocationDot
 fb=faFacebookF
insta=faInstagram
star=faStar
 loginning=false;
 phoneNumber="7603882854"
 loading=false;
 consulation:Consulation=new Consulation();
 message: string ='Hello Sir!'; 
 fblink:string="https://www.facebook.com/thinknmove7?mibextid=ZbWKwL";
 instalink:string="https://www.instagram.com/thinknmove7?utm_source=qr&igsh=MWIzNHptbGlxYXJy";
 whatsappLink:string = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;

 constructor(private consulationServ:ConsulationService){
  
 }

 makeCall() {
  if (this.phoneNumber) {
    window.location.href =`tel:${this.phoneNumber}`;
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
        text: ' We will reach you back soon...',
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
        text: ' Some internal issue try again later',
        width: '380px'  ,
         customClass: 'swal-height'
      });
     }
      }).add(()=>{
        this.loading=false;
      })

}



}



