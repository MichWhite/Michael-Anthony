<template>
  
  <div class="navbar">
 <nav>


     
 <div class="jumbotron">
 <h1>MICHAEL ANTHONY</h1></div>
 <hr>
    <router-link v-for="routes in links" 
      v-bind:key="routes.id"
     :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>

  </div>
</template>


<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page:'/Home'
        },
        {
          id: 1,
          text: 'About',
          page:'/About'
        },
        {
          id: 2,
          text: 'Articles',
          page:'/Articles'
        },
        {
          id: 3,
          text: 'Contact',
          page:'/Contact'
        }
      ]
    }
  }
}
</script>

<style> 


h1{
	padding: 1px;
	  margin: 0 auto;
	  text-align: centers;
	  color: #2e86c1;
}
.navbar {
font-family: "Garamodn", serif;
text-align:center;
}

hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 0.5em 0;
    padding: 0; 
}


nav {
    background-color: #FFFFFF;
    overflow: hidden;
     position: fixed; 
    top: 0; 
    width: 100%;
    text-align:center;

}

nav a {
   // float: left;
    color: grey;
    text-align: center;
    padding: 1px 16px;
    text-decoration: none;
    font-size: 17px;
}

nav a:hover {
    color:  #2e86c1;
}

nav a.active {
    background-color: #4CAF50;
    color: white;
}
</style>