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

        parse: function(data){
            if (data === undefined || data.experiments === undefined || data.experiments.length === 0){
                return data;
            }
            data.experiments.forEach(function(item){
                if (item.simulationRuns !== undefined && item.simulationRuns.length > 0){
                    item.status = item.simulationRuns[item.simulationRuns.length - 1].status;
                }
            });
            return data;
        },

        sync: function(method, model, options) {
            options = options || {};
            options.url = model.methodToURL[method.toLowerCase()];

            return Backbone.sync(method, model, options);
        }
    });

    return ProjectModel;
});
