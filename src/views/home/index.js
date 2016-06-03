module.exports = {
  template: require('./index.html'),
  replace: true,
  data: function () {
    return {
      msg: 'This is page Home.',
      leftName: 'Thanakorn',
      rightName: 'Kitsawat'
    }
  },
  components: {
    'app-header': require('../../components/header'),
    'app-pane': require('../../components/pane')
  }
}
