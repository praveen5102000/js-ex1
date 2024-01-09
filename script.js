// var carousel=document.querySelector("img");
// var img=["img/bi1.png","img/bik4.png","img/c1.png","img/bi2.png","img/bik1.webp","img/c1.png","img/bi3.png"]
// var num=7;


// function next(){
//     num++;
//    console.log("step1");
//    console.log( "num=",num);
//     if(num>=img.length){
//         num=0;
//        console.log("step2");
//        console.log("num",num);
//        carousel.src=img[num]
//         console.log("num",num);  
//     }
//     else{
//        console.log("step3");
//        carousel.src=img[num]
//         console.log("num",num);

//     }
                    
// };
// function back(){
//     num--;
//     if(num<0){
//         num=img.length-1;
//         carousel.src=img[num]
//             }
//             else{
//               carousel.src=img[num]
//             }

// };



function validateForm(event) {
    event.preventDefault(); 
  
   
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  
   
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
      alert('All fields must be filled out');
      return false;
    }
  
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email address');
      return false;
    }
  
  
    if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      return false;
    }
  
    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return false;
    }
  
    alert('Registration successful!');
  }
  



  function openNav() {
    document.getElementById("myOffCanvas").style.width = "250px";
    document.querySelector('.main-content').style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById("myOffCanvas").style.width = "0";
    document.querySelector('.main-content').style.marginLeft= "0";
  }




