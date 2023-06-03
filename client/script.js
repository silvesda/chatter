document.getElementById('send1').addEventListener('click', function() {
  var message = document.getElementById('message1').value;
  var messages = document.getElementById('chatMessages');
  messages.innerHTML += '<div class="message1"><img src="img/profile.png" alt=":D"><p>' + message + '</p></div>';
  document.getElementById('message1').value = '';
});
