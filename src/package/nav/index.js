import Nav from './src/nav.vue';

Nav.install = function(Vue){
  Vue.component(Nav.name, Nav);
}

export default Nav;