$('li:contains("@done"), h1:contains("@done"), h2:contains("@done"), h3:contains("@done"), h4:contains("@done"), h5:contains("@done"), h5:contains("@done")').each(function() {
  $(this).addClass('completed_task');
});
