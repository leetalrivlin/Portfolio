function openCanvas(){
    document.querySelector('.offcanvas-btn').classList.toggle('offcanvas-btn-open');
    document.querySelector('.offcanvas-aside').classList.toggle('offcanvas-aside-open');    
}

$('#submit-form').submit(function( event ) {
    event.preventDefault();
    console.log('Mail send!');
    var userEmail = $('#inputEmail').value();
    console.log('userEmail',userEmail);
    var userSubj = $('#inputSubject').value();
    var userTxt = $('#textarea').value();
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${userEmail}&su=${userSubj}&body=${userTxt}`)
  });