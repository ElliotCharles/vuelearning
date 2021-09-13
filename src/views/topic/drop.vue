<template>
  <div>
    <van-dropdown-menu>
        <van-dropdown-item v-model="value1" disabled :options="option1" title="综合"/>
        <van-dropdown-item v-model="value2" :options="option2" title="价格"/>
        <van-dropdown-item v-model="value3" :options="option3" title="分类"/>
    </van-dropdown-menu>
  </div>
</template>

<script>
import Vue from 'vue';
import { DropdownMenu, DropdownItem } from 'vant';

Vue.use(DropdownMenu);
Vue.use(DropdownItem);
export default {
    data() {
    return {
      value1: 0,
      value2: 'a',
      value3: 'a',
      option1: [
        
      ],
      option2: [
        { text: '价格由高到低', value: 'a' },
        { text: '价格由低到高', value: 'b' },
      ],
      option3: [
        { text: '分类', value: 'a' },
      ],
    };
  },
}
</script>

<style>

</style>