<template>
  <div class="navbar">
 <nav>

 <div class="jumbotron">
 <h1>MICHAEL ANTHONY</h1></div>

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
	  margin: 0 auto;
	  text-align: left;
}
.navbar {
font-family: "Garamodn", serif;
margin-left: 10%;
margin-right: 10%
}


nav {
    background-color: #FFFFFF;
    overflow: hidden;
     position: fixed; 
    top: 0; 
    width: 100%;

}

nav a {
    float: left;
    color: #0000000;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

nav a:hover {
    background-color: #ddd;
    color: black;
}

nav a.active {
    background-color: #4CAF50;
    color: white;
}
</style>