define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/dashboard/dashboardTemplate.hbs',
    //dirty hack for handlebars loading wait
    'handlebars',
    'libs/ginny/ginny'
], function ($, _, Backbone, dashboardTemplate) {

    var SomeBeansPageView = Backbone.View.extend({

        template:Handlebars.compile(dashboardTemplate),

        initialize:function (options) {
             _.bindAll(this, 'render', 'remove'); // fixes loss of context for 'this' within methods
            this.subviews = [];
        },

        render:function () {
            this.$el.html(this.template({title: this.titleFilter}));

            //ToDo: add sub views - projects list and project preview
            return this
        },

        remove:function (attributes) {
            if (!_.isEmpty(this.pagerView)) {
                this.pagerView.remove();
            }
            if (!_.isEmpty(this.subviews)) {
                for (var i = 0; i < this.subviews.length; i++) {
                    this.subviews[i].remove();
                }
            }
            this.$el.remove();
            Backbone.View.prototype.remove.call(this, attributes);
        }

    });

    return SomeBeansPageView;
});
