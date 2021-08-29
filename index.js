function accordianActivity(){
    let accordians = document.getElementsByClassName('content-box');
    for(let i = 0;i<accordians.length;i++){
        accordians[i].addEventListener('click',function(){
            for (var j = 0; j < accordians.length; j++) {
                accordians[j].classList.remove("active");
            }
            this.classList.toggle('active');
        })
    }
}

function carouselActivity(){
    var counter = 1;
    setInterval(function(){
        document.getElementById('radio'+counter).checked = true;
        counter++;
        if(counter > 4){
            counter = 1;
        }
    },5000)
}

function footerActivity(){
    window.addEventListener('scroll',function(event){
        let scroll = this.scrollY;
        if(scroll <= 582){
            document.getElementsByClassName('footer-mobile')[0].style.display = 'none';
            document.getElementsByClassName('footer-desktop')[0].style.display = 'none';
        }else{
            document.getElementsByClassName('footer-mobile')[0].style.display = 'block';
            document.getElementsByClassName('footer-desktop')[0].style.display = 'block';
        }
    })
}

function submitClick(){
    let name = document.getElementById('fname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let work_exp = document.getElementById('wrk-exp-select').value;
    let org = document.getElementById('org').value;
    var formDetails;
    formDetails = { 
        "name":name,
        "email":email,
        "phone":phone,
        "work_exp":work_exp,
        "org":org
    }
    if(validateFields(formDetails)){
        localStorage.setItem('form-details',JSON.stringify(formDetails))
    }
}

function validateFields(formDetails){
    document.getElementById('error-message').innerHTML = '';

    if(formDetails.name.length <= 3){
         document.getElementById('error-message').innerHTML += '<span>** Enter a valid full name. Name should be more than 2 letters atleast.</span>'
        return false
    }

    if(formDetails.email === ''){
        document.getElementById('error-message').innerHTML += '<span>** Enter a valid email.</span>';
        return false
    }else if(!isEmail(formDetails.email)){
        document.getElementById('error-message').innerHTML += '<span>** Enter a valid email.</span>';
        return false
    }
    
    if(formDetails.phone === ''){
        document.getElementById('error-message').innerHTML += '<span>** Enter a phone number.</span>';
        return false
    }else if(isNaN(formDetails.phone)){
        document.getElementById('error-message').innerHTML += '<span>** Please enter a phone number with digits between 0-9.</span>';
        return false
    }else if(formDetails.phone.length != 10){
        document.getElementById('error-message').innerHTML += '<span>** Please enter a 10 digit phone number.</span>';
        return false
    }

    if(formDetails.work_exp === 'Work Experience'){
        document.getElementById('error-message').innerHTML += '<span>** Please select a work experience.</span>';
        return false
    }

    if(formDetails.org === ''){
        document.getElementById('error-message').innerHTML += '<span>** Please enter a valid organization name.</span>';
        return false
    }

    if(document.getElementById('auth-checkbox-mobile').checked !== true && document.getElementById('auth-checkbox-desktop').checked !== true){
        document.getElementById('error-message').innerHTML += '<span>** Please give the authorization to apply.</span>';
        return false
    }
    return true;
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

window.addEventListener('load',function(){
    accordianActivity();
    carouselActivity();
    footerActivity();

    let name = document.getElementById('fname');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let work_exp = document.getElementById('wrk-exp-select');
    let org = document.getElementById('org');
    let formDetails;

    if(localStorage.getItem('form-details')){
        formDetails = JSON.parse(localStorage.getItem('form-details'));
        name.value = formDetails['name'];
        email.value = formDetails['email'];
        phone.value = formDetails['phone'];
        work_exp.value = formDetails['work_exp'];
        org.value = formDetails['org'];
    }
})

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  
}

setInterval(function(){
    document.getElementsByClassName('next')[0].click()
},5000)
