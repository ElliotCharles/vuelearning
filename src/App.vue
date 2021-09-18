<template>
  <div> 
    <router-view/>
    <global-nav v-show="$store.state.isShow"></global-nav>
  </div>
</template>
<script>
import GlobalNav from "@/components/nav/GlobalNav"


export default {
  components:{

    GlobalNav,
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
</style>
