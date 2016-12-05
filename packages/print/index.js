import Print from './src/main';

/* istanbul ignore next */
Print.install = function(Vue) {
  Vue.component(Print.name, Print);
};

export default Print;
