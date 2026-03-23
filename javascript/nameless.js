document.querySelector(".contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    // Getting the info
    const firstName = document.getElementById("first-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const isSriLankan = document.querySelector('input[name="Are you Sri Lankan?"]:checked');
    const services = document.querySelectorAll('input[name="Service Type[]"]:checked');

    // Error container
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    
    // Clear previous errors
    const existingErrors = document.querySelectorAll(".error-message");
    existingErrors.forEach(err => err.remove());

    // Validation checks
    let errors = [];
    
    // 1. compulsory fields 
    if (!firstName) errors.push("First name is required");
    if (!email) errors.push("Email is required");
    if (!message) errors.push("Message is required");
    
    // 2. Email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email && !emailRegex.test(email)) {
        errors.push("Invalid email format");
    }
    
    // 3. Radio buttons
    if (!isSriLankan) {
        errors.push("Please select nationality");
    }
    
    // 4. Checkboxes
    if (services.length === 0) {
        errors.push("Select at least one service");
    }

    // Show errors 
    if (errors.length > 0) {
        errorDiv.innerHTML = errors.join("<br>");
        errorDiv.style.color = "#FF8C00"; 
        document.querySelector(".contact-form").prepend(errorDiv);
    // or submit
    } else {
        event.target.submit();
    }
});