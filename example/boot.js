angular.module('d3CloudApp',[
  require('control-panel-for-angular').name,
  require('d3-cloud-for-angular').name,
  'angularFileUpload'
]).config(function(signatureApiProvider) {
  signatureApiProvider.hosts([
    {name: 'local', address: 'http://localhost'}
  ]);
});
