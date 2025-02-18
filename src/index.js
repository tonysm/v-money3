import Money3Component from './component.vue'
import Money3Directive from './directive'

const money = {
  install: (app) => {
    app.component('money3', Money3Component)
    app.directive('money3', Money3Directive)
  }
};

export default money

export {
  Money3Component,
  Money3Directive,
  // backwards compatibility
  Money3Component as Money3,
  Money3Directive as VMoney3,
  Money3Component as Money,
  Money3Directive as VMoney,
}
