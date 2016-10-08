$(document).ready(function(){
  $('.paper-pane-link').blur(function(){$('.rule-wrap').show('slow');})
          .focus(function(){$('.rule-wrap').hide('slow');});
});
