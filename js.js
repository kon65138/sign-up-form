const form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    let password = document.getElementById("password");
    let confPassword = document.getElementById("confPassword");
    let msg = document.getElementById("pMatch");
    
    if (password.length != 0) {
        if (password != confPassword) {
            e.preventDefault();
            msg.textContent = "Passwords do not match";
        }
    }
})
