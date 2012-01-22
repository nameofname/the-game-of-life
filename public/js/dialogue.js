$(document).ready(function(){

  var logged_in = false; 

  // saving patterns
  $('#save_link').on('click', function(){
    if (!logged_in) {
      dialogue('new_user', 'to save your pattern, you must first provide credentials so that you can recall your saved patterns later. Your information will not be used for any other purposes. '); 
    }
    else { 
      dialogue('save');
    }
  });

  // recalling saved patterns
  $('#patterns_link').on('click', function(){
    if (logged_in) {
      dialogue('save');
    }
    else { 
      dialogue('login', 'you must first provide your email and password to retreive patterns.  if you do not yet have a login, create one, and save your first pattern!'); 
    }
  });

  $('#new_user_link').on('click', function(){
    dialogue('new_user', ''); 
  });

  $('.dialogue .dialogue_close').on('click', function(){
    hide_dialogue(); 
  });

  // use ajaxform plugin to submit all forms via ajax. 
  $('#form_new_user, #form_login, #form_save_pattern').ajaxForm(); 

  $('#form_new_user').on('submit', function(e){
    //$(this).ajaxSubmit(); 
    e.preventDefault(); 
    var queryString = $(this).formSerialize(); 
    $.post('/new_user', queryString); 
  }); 
  //$('#form_login').ajaxForm(); 
  //$('#form_save_pattern').ajaxForm(); 

// END DOCUMENT.READY
});


function dialogue(arg, message) {
  var dialogue_top = -250; 
  $('#dialogue_bg').show(); 
  $('#dialogue').show(); 
  $('#dialogue .dialogue_message').text(message); 
  // hide all of the dialogue inner boxes
  $('#dialogue_save_pattern').css({'top': dialogue_top}); 
  $('#dialogue_login').css({'top': dialogue_top}); 
  $('#dialogue_new_user').css({'top': dialogue_top}); 
  $('#dialogue_my_patterns').css({'top': dialogue_top}); 
  if (arg == 'save') {
    $('#dialogue_save_pattern').css({'top':'0px'}); 
  } else if (arg == 'new_user') {
    $('#dialogue_new_user').css({'top':'0px'}); 
  } else if (arg == 'login') {
    $('#dialogue_login').css({'top':'0px'}); 
  } else if (arg == 'my_patterns') {
    $('#dialogue_my_patterns').css({'top':'0px'}); 
  }
}

function hide_dialogue() {
  $('#dialogue_bg').hide(); 
  $('#dialogue').hide(); 
}

function login() {
  // functionality for logging in. 
}





