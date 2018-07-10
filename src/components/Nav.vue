<template>
  <div>
    <nav>
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
          text: 'Contact',
          page:'/Contact'
        }
      ]
    }
  }
}
</script>

<style> 
nav {
    background-color: #322F71;
    overflow: hidden;
     position: fixed; 
    top: 0; 
    width: 100%;
}

nav a {
    float: left;
    color: #f2f2f2;
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