define([
    'jquery',
    'underscore',
    'backbone',
    'libs/ginny/ginny'
], function($, _, Backbone){

    var ProjectModel = Backbone.Model.extend({
        id: "",
        url : '/api/project',

        methodToURL: {
            'read': "",
            'create': "/api/project",
            'update': "/api/project",
            'delete': ""
        },

        initialize: function (options) {
            this.methodToURL['read'] = this.url + "/" + this.id + ".json";
            this.methodToURL['delete'] = this.url + "/" + this.id + ".json";
        },

        sync: function(method, model, options) {
            options = options || {};
            options.url = model.methodToURL[method.toLowerCase()];

            return Backbone.sync(method, model, options);
        }
    });

    return ProjectModel;
});
