const ValidateForm = (formData) => {
    const errors = {};
    const { userName, userEmail, message } = formData;

    const validateEmail = (userEmail) => {
        return String(userEmail)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    if (!userName.value.trim()) {
        errors.userName = "Il nome è un campo obbligatorio.";
    } else if (userName.value.trim().length <= 3) {
        errors.userName = "Il nome deve essere almeno di 3 caratteri.";
    }

    if (!userEmail.value.trim()) {
        errors.userEmail = "L'email è un campo obbligatorio.";
    } else if (!validateEmail(userEmail.value)) {
        errors.userEmail = "L'email deve essere valida.";
    }

    if (!message.value.trim()) {
        errors.message = "Il messaggio è un campo obbligatorio.";
    }else if(message.value.trim().length <= 10){
        errors.message = 'Il messaggio deve essere almeno di 10 caratteri.'
    }

    return errors;
};

export default ValidateForm