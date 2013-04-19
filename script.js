$('li:contains("@done"), h1:contains("@done"), h2:contains("@done"), h3:contains("@done"), h4:contains("@done"), h5:contains("@done"), h5:contains("@done")').each(function() {
  $(this).addClass('completed_task');
});

$('.doctitle').click(function() {
	if($('.completed_tasks_hidden').length > 0) {
		$(this).removeClass('completed_tasks_hidden');
		$('.completed_task').show();
	} else {
		$(this).addClass('completed_tasks_hidden');
		$('.completed_task').hide();
	}
});