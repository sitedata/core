$(function () {
	$("#use_custom_cache_folder").bind("change", function (e) {
		if (e.target.checked) {
			$("#cache_folder_default").hide();
			$("#cache_folder_custom").show();
			$("#cache_folder_custom input").focus();
		} else {
			$("#cache_folder_default").show();
			$("#cache_folder_custom").hide();
		}
	});
});