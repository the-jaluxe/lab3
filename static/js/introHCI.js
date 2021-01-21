'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
  initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  $('#testjs').click(function (e) {
    $('.jumbotron h1').text('Javascript is connected');
    $('.jumbotron p').toggleClass('active');
    $('#testjs').text('Connecting...');
  });

  // Add any additional listeners here
  // example: $("#div-id").click(functionToCall);
  $('a.thumbnail').click(projectClick);
}

function projectClick(e) {
  // prevent the page from reloading
  console.log('Project clicked');
  e.preventDefault();
  // In an event handler, $(this) refers to
  // the object that triggered the event
  $(this).css('background-color', 'green');
  var containingProject = $(this).closest('.project');
  var description = $(containingProject).find('.project-description');
  if (description.length == 0) {
    $(containingProject).append(
      "<div class='project-description'><p>Description of the project.</p></div>"
    );
  } else {
    $('.project-description').hide();
  }
}
