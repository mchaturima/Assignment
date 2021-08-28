function accordianActivity(){
    let accordians = document.getElementsByClassName('content-box');
    for(let i = 0;i<accordians.length;i++){
        accordians[i].addEventListener('click',function(){
            for (var j = 0; j < accordians.length; j++) {
                accordians[j].classList.remove("active")
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
    console.log('calling-------------------------------------------------------------------------')
    let name = document.getElementById('fname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let work_exp = document.getElementById('work_exp').value;
    let org = document.getElementById('org').value;
    let formDetails;
    formDetails = { 
        "name":name,
        "email":email,
        "phone":phone,
        "work_exp":work_exp,
        "org":org
    }
    console.log(validateFields(formDetails));
    if(validateFields(formDetails)){
        localStorage.setItem('form-details',JSON.stringify(formDetails))
    }
}

function validateFields(formDetails){
    document.getElementById('error-message').innerHTML = '';

    if(formDetails.name.length <= 3){
         document.getElementById('error-message').innerHTML += '<span>** Enter a valid full name. Name should be more than 2 letters</span>'
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
        document.getElementById('error-message').innerHTML += '<span>** Please enter only numbers.</span>';
        return false
    }else if(formDetails.phone.length != 10){
        document.getElementById('error-message').innerHTML += '<span>** Please enter 10 digits number.</span>';
        return false
    }

    if(formDetails.work_exp === ''){
        document.getElementById('error-message').innerHTML += '<span>** Please enter work experience in years.</span>';
        return false
    }else if(isNaN(formDetails.work_exp)){
        document.getElementById('error-message').innerHTML += '<span>** Enter experience in numbers only.</span>';
        return false
    }else if(!(/^[1-9]\d*$/.test(formDetails.work_exp))){
        console.log('entered')
        document.getElementById('error-message').innerHTML += '<span>** Enter number of years. Decimal points not accepted.</span>';
        return false
    }

    if(formDetails.org.length <= 3){
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
    let work_exp = document.getElementById('work_exp');
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
