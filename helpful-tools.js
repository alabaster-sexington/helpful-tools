(function($) {

/* TOOLS
-------------------------------------------------- */

var TOOLS = {

	appendArrays: function(params) {

		//check for any arrays
		for(var j = 0, paramsLength = params.length, result = []; j < paramsLength; j++) {
			if(params[j] instanceof Array) {
				result.push(params[j]);
			} else {
				var errorMessage = new Error();
				errorMessage.message = "One of the items in the array must be an array!";
				console.log(errorMessage.message);
			}
		}

		var currentItem,
			finalResult = [];

		for(var key = 0, resultLength = result.length; key < resultLength; key++) {
			for(var item = 0, itemLength = result[key].length; item < itemLength; item++) {
				finalResult.push(result[key].splice(item, 1)[0]);
			}
		}

		return finalResult;

		},

	//typeof isNaN is "number" - wtf
	//isNaN("20") is false - wtf

	trueNumber: function(number) {
		return (typeof number === "number" && !isNaN(number));
	},

	mobileTrigger: function(trigger, nav) {
		(trigger && nav) ? function() {
							trigger.on("click", function() {
								nav.slideToggle();
							});
						}()
						:
						false;

	}

};

/* jQuery Extend
-------------------------------------------------- */

$.fn.extend({

	addClasses = function() {
		var args = arguments,
		element = $(this);

		for(var i = 0, length = arguments.length; i < length; i++) {
			element.addClass(arguments[i]);
		}
		return element;
	},

	removeClasses = function() {
		var args = arguments,
			element = $(this);

		for(var i = 0, length = arguments.length; i < length; i++) {
			(element.hasClass(arguments[i])) ? element.removeClass(arguments[i]) 
											   : 
											   console.log(arguments[i] + " is not a class of " + element);
		}
	} //remove classes
});


})(jQuery);