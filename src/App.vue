<template>
  <div> 
    <router-view/>
    <global-nav></global-nav>
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

</style>
