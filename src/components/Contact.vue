<template>
  <div id="container">
  
  

  <v-container>
  <h1>Contact Me</h1> 

    <v-layout>

        <v-flex sm8>
      
  <p>
  I do not disclose his rates to the public. I have a fixed fee for psychic medium readings and for exorcisms, excluding mileage expenses. I can answer any queries and questions you might have on me or what I do. My preferred method of contact is via phone call or text message. Reach out to me and I will reply as soon as possible. Please feel free to contact me.
  </p>
   <form> 
   Full Name
    <input type="text" id="name" name="name" >
 
 Email Address   <input type="email" id="email" name="email">
   
   Message <textarea rows="5"></textarea>
</form>
<button type="submit" class="btn btn-primary" onclick="sendMail()">Button Text</button>


  <v-layout>
  <v-flex sm12>
    <input type="text" name="Message">
  </v-flex>
  </v-layout>
  </v-flex>


  <v-flex xsm4>

  <v-layout>
  <v-flex sm12>
 Facebook
 <br>

<a href="https://www.facebook.com/michael.anthony.1848">
  <img src="../assets/facebook-logo.png"  alt="Facebook" style="width:42px;height:42px;border:0;">
</a>

<br>


  </v-flex>
</v-layout>

 <v-layout>
  <v-flex sm12>
  <br>
Phone Number
<br>
  <a href="tel:+353857366102">+353 85-7366102</a> 

  </v-flex>
</v-layout>

 <v-layout>
  <v-flex sm12>
  <br>
Email Address
<br>
  <a href="mlan@live.ie">mlan@live.ie</a> 

  </v-flex>
</v-layout>

</v-flex>
 </v-layout>
</v-container>

  </div>
</template>
<script>
export default {
  name: 'Contact' //this is the name of the component
}

function sendMail() {
    var name = $('#contact #name').val();
    var email = $('#contact #email').val();
    var message = $('#contact textarea').val();
    window.location.href = 'mailto:mich.white@hotmail.com?subject=The subject - ' + name + ' (' + email + ')' + '&body=' + message;
};
</script>

