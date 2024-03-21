const box = document.querySelector('.box');
const login = document.querySelector('.login');
const register = document.querySelector('.registration');
const logBtn = document.getElementById("log")
const closeIcon = document.querySelector('.close');

register.addEventListener('click',()=>{
    box.classList.add('active');
});

login.addEventListener('click',()=>{
    box.classList.remove('active');
});

logBtn.addEventListener('click',()=>{
    box.classList.add('active-popup');
});

closeIcon.addEventListener('click',()=>{
    box.classList.remove('active-popup');
});

function validate() {
    var mail = document.getElementById('email').value;
    console.log(mail);
    var password = document.getElementById('pass').value;
    console.log(password)

  
    
    if(mail=="admin@gmail.com" && password=="1234"){
      window.location= "Admin.html";
    }
    else if(mail == "123@gmail.com" && password == "7598"){
      window.location = "product.html";
    }
}

// Sign up - Register

const rpwd = document.getElementById('rpass');
const eyecon = document.getElementById('eye');
const reqList = document.querySelectorAll(".requirements li");
const passPop = document.querySelector('.content');

function togglePassPop(){
  passPop.classList.toggle('content');
}

rpwd.addEventListener("focus", togglePassPop); 
rpwd.addEventListener("blur", togglePassPop);  

const reqs = [
  { regex: /.{8,}/, index: 0 }, // Minimum of 8 characters
  { regex: /[0-9]/, index: 1 }, // At least one number
  { regex: /[a-zA-Z]/, index: 2 }, // At least one letter
  { regex: /[^A-Za-z0-9]/, index: 3 }, // At least one special character
]

rpwd.addEventListener("keyup", (e) => {
  reqs.forEach(item => {
      // Check if the password matches the requirement regex
      const isValid = item.regex.test(e.target.value);
      const requirementItem = reqList[item.index];
      // Updating class and icon of requirement item if requirement matched or not
      if (isValid) {
          requirementItem.classList.add("valid");
          requirementItem.firstElementChild.className = "fa-regular fa-circle-check";
      } else {
          requirementItem.classList.remove("valid");
          requirementItem.firstElementChild.className = "fa-regular fa-circle-xmark";
      }
  });
});

eyecon.addEventListener("click", () => {
  // Toggle the password input type between "password" and "text"
  rpwd.type = rpwd.type === "password" ? "text" : "password";
 // Update the eye icon class based on the password input type
  eyecon.className = 'fa-solid fa-eye${rpwd.type === "password" ? "" : "-slash"}';
});