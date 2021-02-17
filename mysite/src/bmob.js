import Bmob from "hydrogen-js-sdk";
import Vue from 'vue';

Bmob.initialize("1cf6f31035bc6896", "123456");
Vue.prototype.Bmob = Bmob
Bmob.debug(true)
