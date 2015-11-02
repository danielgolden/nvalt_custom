$('li:contains("@done"), h1:contains("@done"), h2:contains("@done"), h3:contains("@done"), h4:contains("@done"), h5:contains("@done"), h5:contains("@done")').each(function() {
	$(this).addClass('completed_task');
});

$('p:contains("@note")').each(function() {
	$(this).addClass('note');
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

$('li:contains("@waiting")')

$('li:contains("@waiting")').html(function(_, html) {
   return html.replace(/(@waiting)/g, '<span class="status status-waiting">Waiting</span>');
});

$('li:contains("@unstarted")').html(function(_, html) {
   return html.replace(/(@unstarted)/g, '<span class="status status-unstarted">Unstarted</span>');
});

$('li:contains("@inprogress")').html(function(_, html) {
   return html.replace(/(@inprogress)/g, '<span class="status status-in-progress">In Progress</span>');
});