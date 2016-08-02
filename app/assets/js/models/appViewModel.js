'use strict';

/* global define:true*/
define(['jquery',
    'knockout',
    '../../../assets/js/models/connectionViewModel.js',
    'knockout.validation'
    ], function ($, ko, ConnectionViewModel) {
  return function () {
    var self = this;

    // Configure knockout validation plugin
    // To decorate form-group elements, use the validationElement binding
    ko.validation.configure({
      decorateElement: true,
      errorElementClass: 'has-error',
      errorMessageClass: 'help-block',
      errorsAsTitle: false
    });

    // Example observable
    self.status = ko.observable('active');

 
    // Socket IO example observables
    self.message = ko.observable('').extend({
      required: true,
      minLength: 3
    });
    self.messageReceived = ko.observable('');
    

    self.offices = ko.observableArray([]);

    $.get('http://beertap.iqmetrix.com/Offices', function (data, status) {
        self.offices.push('iQ Head Quarters');
    });

    // Keeping connection status in model
    self.connection = new ConnectionViewModel();
  };
});
