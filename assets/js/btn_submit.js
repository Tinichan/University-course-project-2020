$(function () {
	$("#PrivatCheck").on("change", function () {
		if ($(this).is(":checked")) $(".btn").attr("disabled", false);
		else $(".btn").attr("disabled", true);
	});
});