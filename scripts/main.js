jQuery.fn.centerElement = function() {
	this.css("position", "absolute");
	this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
	return this;
};

(function($, f) {
	$("#me").centerElement();

	$("#brand").animate({opacity: "1"}, 500, "swing", function() {
		$("h1, h4").animate({opacity: "1"}, 300, "swing", function() {
			$("#tip").animate({opacity: "0.1"}, 300, "swing");
			$("#description").slideDown("slow");
		});
	});
})(window.jQuery, false);
