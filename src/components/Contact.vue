
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


<div id="contact-form" class="contact-form">
  <div class="separator"></div>

  <div v-if="isSending" class="loading">Sendig...</div>

  <form class="form" action="mailto:mlan@live.ie" method="post" enctype="text/plain">
    <input v-model='name' placeholder="Name" type="text" autocomplete="off">
    <input v-model="email" placeholder="E-mail" type="email" autocomplete="off">
    <textarea v-model="message" rows="4" placeholder="Message"></textarea>
       <v-dialog
        v-model="dialog"
        width="500"
      >

        <button class="button"
          slot="activator"
          dark>

          SEND

        </button>
  
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
           Thank You For Your Email
          </v-card-title>
  
          <v-card-text>
          I will reply as soon as I can.
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="primary"
              flat
              @click="dialog = false"
            >
            Ok
           </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </form>
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

<style>

.contact-form {
  font-family: 16px;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
}

.contact-form .separator {
  border-bottom: solid 1px #ccc;
  margin-bottom: 15px;
}

.contact-form .form {
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.contact-form_title {
  color: #333;
  text-align: left;
  font-size: 28px;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
  border: solid 1px #e8e8e8;
  font-family: 'Roboto', sans-serif;
  padding: 10px 7px;
  margin-bottom: 15px;
  outline: none;
}

.contact-form textarea {
  resize: none;
}

.contact-form .button {
  background: #2e86c1;
  border: solid 1px black;
  color: white;
  cursor: pointer;
  padding: 10px 50px;
  text-align: center;
  text-transform: uppercase;
}

.contact-form .button:hover {
  background: blue;
  border: solid 1px black;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea,
.contact-form .button {
  font-size: 15px;
  border-radius: 3px
}
</style>


<script>
export default {
  name: 'Contact',
data(){
    return {
      dialog: false
    }
  


}
}
</script>
