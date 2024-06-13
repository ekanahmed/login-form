const validUsername = "ekaanahmed";
const validPassword = "123456";


let attempts = 3;

while (attempts > 0) {

  let username = prompt("Enter your username:");
  let password = prompt("Enter your password:");


  if (username === validUsername && password === validPassword) {
    alert("Sign up successful!");
    break;
  } else {
    attempts--; 
    if (attempts > 0) {
      alert("Incorrect username or password. You have ${attempts} more tries left.");
    } else {
      alert("Incorrect username or password. No more tries left.");
    }
  }
}

if (attempts === 0) {
  
  alert("Sign up failed. Please try again later.");
}