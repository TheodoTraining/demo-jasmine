(function (window, $) {

	window.Placeholder = function (input, text) {
		this.$input = $(input);

		this.initialize(text);
	};

	window.Placeholder.prototype = {
		initialize: function (text) {
			this.$input.val($(text).text());
		}
	};

})(this, jQuery)