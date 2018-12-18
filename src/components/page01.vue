<template>
  <div>
    <vuetable ref="vuetable"
              api-url="https://vuetable.ratiw.net/api/users"
              :fields="['name', 'email', 'birthdate']"
    ></vuetable>
    <h2 class="text-center">{{title}}</h2>
    <ul class="nav nav-pills justify-content-end">
      <li class="nav-item" v-for="item in links">
        <router-link :to="item.route" class="nav-link" active-class="active">
          {{ item.text }}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  import Vuetable from 'vuetable-2'
export default {
  name: 'page01',
  data () {
    return {
      title: '这里是第一个页面',
      links: [
        {
          text: '圆白菜',
          route: '/page01/page01-a'
        },
        {
          text: '长白菜',
          route: '/page01/page01-b'
        }
      ]
    }
  },
  components: {
    Vuetable
  }
}
</script>
