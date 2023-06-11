document.getElementById("checkinForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    // Obtém os valores dos campos
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var checkinDate = document.getElementById("checkinDate").value;
  
    // Valida os campos
    if (name.trim() === "" || email.trim() === "" || checkinDate.trim() === "") {
      showMessage("Por favor, preencha todos os campos.");
    } else {
      showMessage("Check-in Validado Para \n " +  name + "!");
    }
    alert("Atualize a pagína para realizar outra validação de Check-in");
  });
  
  function showMessage(message) {
    document.getElementById("validationMessage").textContent = message;
  }
