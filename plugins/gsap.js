import Vue from 'vue';
import gsap from 'gsap';

gsap.registerPlugin(TextPlugin)

Vue.prototype.$gsap = gsap;