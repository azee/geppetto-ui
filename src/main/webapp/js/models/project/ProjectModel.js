define([
    'jquery',
    'underscore',
    'backbone',
    'libs/ginny/ginny'
], function($, _, Backbone){

    var ProjectModel = Backbone.Model.extend({
        id: "",
        url : 'mockdata/someBeanData.json',

        methodToURL: {
            'read': "",
            'create': "/api/project",
            'update': "/api/project",
            'delete': ""
        },

        initialize: function (options) {
            if (options != null) {
                this.id = options.id;
                this.methodToURL['read'] = this.url + "/" + this.id;
                this.methodToURL['delete'] = this.url + "/" + this.id;
            }
        },

        sync: function(method, model, options) {
            options = options || {};
            options.url = model.methodToURL[method.toLowerCase()];

            return Backbone.sync(method, model, options);
        }
    });

    return ProjectModel;
});