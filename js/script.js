const submitButton = document.getElementById("submit-button");
    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("success-message");
    const passwordInput = document.getElementById("password");

    
    const validPasswords = ["2009", "1234", "5678"];

    submitButton.addEventListener("click", () => {
        const enteredPassword = passwordInput.value;
        if (enteredPassword === "") {
            errorMessage.innerText = "Kod alanı boş bırakılamaz.";
            errorMessage.style.display = "block";
            setTimeout(() => {
                errorMessage.style.display = "none";
            }, 3000);
        } else if (validPasswords.includes(enteredPassword)) {
            successMessage.innerText = "Kod doğru, yönlendiriliyorsunuz.";
            successMessage.style.display = "block";
            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 3000); 
        } else {
            errorMessage.innerText = "Kod hatalı veya süresi geçmiş.";
            errorMessage.style.display = "block";
            setTimeout(() => {
                errorMessage.style.display = "none";
            }, 3000);
        }
    });