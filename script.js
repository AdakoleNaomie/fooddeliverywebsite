// const cuisines =  document.querySelectorAll(".cuisine")

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         entry.target.classList.toggle("show", entry.isIntersecting)
//     })

//     console.log(entries)
// })
// cuisines.forEach(cuisine => {
//     observer.observe(cuisines[0])
// })


document.getElementById("registrationform").addEventListener ("submit", function(event){
    event.preventDefault();
    //get form values
    
    const name=
    document.getElementById("name").value;
    const email=
    document.getElementById("email").value;
    const password=
    document.getElementById("password").value;
    const confirmpassword=
    document.getElementById("confirmpassword").value;
    const messageDiv=
    document.getElementById("message");
    
    
    //validate form fields
    if (!name ||!email ||!password||!confirmpassword) {
        messageDiv.innerHTML=
        "<p style='color';red;'>please fill in all fields.</p>";
        return;
    
    }
    //validate email format
    const emailPattern= /^[a-zA-Z0-9._-]+@[a-zA=Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!emailPattern.test(email)){
        messageDiv.innerHTML=
         "<p style='color:red;'>please enter a valid email address.</p>";
         return;
    }
    // check if passwords match
    if (password !==
        confirmpassword) {
            messageDiv.innerHTML=
            "<p style='color:red;'>passwords do not match.</p>";
            return;
        }
      //if all validations pass
      messageDiv.innerHTML=
      "<p style='color:green;'>registration successful</p>";
    
      //here you can add further logic, like submitting the form data to a server.
      });
      

