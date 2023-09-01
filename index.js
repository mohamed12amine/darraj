document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting normally

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Create an object to store the form data
    var formData = {
        name: name,
        email: email,
        message: message
    };

    // You can now use the formData object to send data to your server using AJAX or other methods
    // For demonstration purposes, I'll just log the data to the console
    var message= " Merci beaucoup "+ name + " pour votre message";
    
    document.getElementById("notification").style.opacity = "1";
    var messageElement = notification.querySelector(".message");
    messageElement.textContent = message;

    // You can replace the console.log() with your actual data submission logic
});

document.getElementById("closeNotification").addEventListener("click", function() {
    
    document.getElementById("notification").style.opacity = "0";
});
