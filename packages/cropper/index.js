import fileUpload from './file-upload/example';

/* istanbul ignore next */
fileUpload.install = function install(Vue) {
  Vue.component(fileUpload.name, fileUpload);
};

export default fileUpload;
