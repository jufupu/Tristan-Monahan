<template>
  <div>
    <header-bar></header-bar>
    <home></home>
    <b-container>
    <b-row class="mt-5">
      <router-view/>
    </b-row>
    </b-container>
    
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import Home from "@/components/Home.vue";

export default {
  
  components: {
    HeaderBar,
    Home,
  },
};
</script>


