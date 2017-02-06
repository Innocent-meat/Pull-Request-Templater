$( document ).ready(function()
{
	$('#template').bind('input propertychange', function()
	{
		updateBookmark();
	});

	updateBookmark();
});

function updateBookmark()
{
	var bookmark = $('#bookmark');

	var templateText = $('#template').val().replace(/\r?\n/g, '\\n'); // Preserve the line formatting

	if (templateText && templateText != "")
	{
		var href = "javascript:(function(){ var textarea = document.getElementById('pull_request_body'); textarea.value = '" + templateText + "'; })();";

		bookmark.attr('href', href);

		bookmark.css('opacity', '1');
	}
	else
	{
		bookmark.attr('href', null);

		bookmark.css('opacity', '0.5');
	}
}
