// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require lodash
//= require angular
//= require angular-resource
//= require angular-animate
//= require angular-sanitize
//= require angular-bootstrap
//= require angular-xeditable
//= require angular-toastr
//= require bootstrap-sass/assets/javascripts/bootstrap-sprockets

//= require ./app/core/core.module
//= require ./app/core/lodash.module
//= require ./app/lists/lists.module
//= require ./app/nodes/nodes.module
//= require ./app/arcs/arcs.module
//= require ./app/algorithms/algorithms.module
//= require_tree ./app/core/
//= require_tree ./app/lists/
//= require_tree ./app/arcs/
//= require_tree ./app/algorithms/

//= require ./app/app.module
//= require_tree ./app/components/

//= require_tree .
