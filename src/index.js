import adsign from './admin/sign.vue'
import adperiod from './admin/period.vue'
import admain from './admin/main.vue'
import stumain from './student/stumain.vue'
import Home from './components/Home.vue'
import login from './components/login.vue'
import stulist from './components/stulist.vue'
import roomlist from './components/roomlist.vue'
import marklist from './admin/marklist.vue'
import Header from './components/Header.vue'
import page01 from './components/page01.vue'
import page02 from './components/page02.vue'
import page01A from './components/page01/page01-A.vue'
import page01B from './components/page01/page01-b.vue'
import pageEnd from './components/page01/B/end.vue'
import axios from 'axios'
axios.defaults.baseURL = 'http://projectmirai.top';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const routes = [
  { path: '/sign', name: 'adsign', component: adsign },
  { path: '/period', name: 'adperiod', component: adperiod },
  { path: '/admin', name: 'admain', component: admain,
    children: [
      { path: 'stu', name: 'stu', component: stulist},
      { path: 'mark', name: 'marklist', component: marklist},
      { path: 'room', name: 'roomlist', component: roomlist}
    ]
  },
  { path: '/', name: 'login', component: login },
  { path: '/student', name: 'stumain', component: stumain },
  { path: '/test', name: 'home', components: {
    default: Home,
    'header-top': Header
  } },
  //{ path: '/time', name: 'time', components: {default: time, 'header-top': Header} },
  { path: '/page01', components: {
    default: page01,
    'header-top': Header
  }, children: [
    { path: 'page01-a', name: 'page01A', component: page01A },
    { path: 'page01-b', name: 'page01B', component: page01B,
      children: [
        { path: 'end', name: 'pageEnd', component: pageEnd }
      ]
    }
  ] },
  { path: '/page02', name: 'page02', component: page02 },
  { path: '/redirect-me', redirect: { name: 'home' } },
  { path: '*', redirect: '/' }
];

