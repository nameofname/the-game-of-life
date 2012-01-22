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

});


function dialogue(arg, message) {
  $('#dialogue_bg').show(); 
  $('#dialogue').show(); 
  $('#dialogue .dialogue_message').text(message); 
  // hide all of the dialogue inner boxes
  $('#dialogue_save_pattern').css({'top':'-150px'}); 
  $('#dialogue_login').css({'top':'-150px'}); 
  $('#dialogue_new_user').css({'top':'-150px'}); 
  $('#dialogue_my_patterns').css({'top':'-150px'}); 
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





