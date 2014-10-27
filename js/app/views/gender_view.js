
app.GenderView = Backbone.View.extend({

	el: '#main_content',

	template: _.template($('#gender').html()),

	initialize: function () {

	},

	render: function (){
		var rendered = this.template();

        this.$el.html( rendered );
	}

});
