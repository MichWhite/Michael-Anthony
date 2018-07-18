<template>
  <div id="container">
  
  

  <v-container elevation-20>

<h2>Contact Me</h2> 
              <hr>
    <v-layout>
  
        <v-flex sm8>
      
  <p>
  I do not disclose his rates to the public. I have a fixed fee for psychic medium readings and for exorcisms, excluding mileage expenses. I can answer any queries and questions you might have on me or what I do. My preferred method of contact is via phone call or text message. Reach out to me and I will reply as soon as possible. Please feel free to contact me. (sometimes your email may go to Spam so if I do not reply please call or text me instead, Thank You)
  </p>


   <form> 
   Full Name:
    <input style="border-style: solid; margin-left: 7%; margin-right:7%" type="text" id="name" name="name" >
 
 Email Address:   

 <input  style="border-style: solid; margin-left: 7%; margin-right:7%" type="email" id="email" name="email">
   
<v-flex sm12>
   Message
  
<p style="white-space: pre-line; ">{{ message }}</p>
<textarea style="border-style: solid; width: 100%;" v-model="message"></textarea>
 </v-flex>
 </form>
   <div>
        <v-btn onclick="sendMail()" type="submit" color="lightblue">Send Email</v-btn>
</div>



  <v-layout>
  <v-flex sm12>
    <input type="text" name="Message">
  </v-flex>
  </v-layout>
  </v-flex>


  <v-flex xsm4 class="contact-info">

  <v-layout>
  <v-flex sm12>
 Facebook


 <br>

<a target="_blank" href="https://www.facebook.com/michael.anthony.1848">
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
  <a href="mailto:mlan@live.ie?Subject=Work" target="_top">mlan@live.ie</a> 

  </v-flex>
</v-layout>

</v-flex>
 </v-layout>
</v-container>
 <br>

  </div>
</template>
<script>
export default {
  name: 'Contact' //this is the name of the component
}


</script>

<style>

</style>