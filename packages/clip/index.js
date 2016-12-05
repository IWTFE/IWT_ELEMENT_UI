import Clip from './src/main';

/* istanbul ignore next */
Clip.install = function(Vue) {
  Vue.component(Clip.name, Clip);
};

export default Clip;
