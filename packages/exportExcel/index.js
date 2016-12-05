import exportExcel from './exportExcel';

/* istanbul ignore next */
exportExcel.install = function(Vue) {
  Vue.component(exportExcel.name, exportExcel);
};

export default exportExcel;
