
app.TemplateView = Backbone.View.extend({

	el: '#main_content',

	initialize: function (template_data) {
		var template_name = template_data['template_name']

		this.template = _.template($('#' + template_name).html());
	},

	render: function (options){
		var options = options || {};

		var rendered = this.template();
        
        this.$el.html( rendered );

	},

});
