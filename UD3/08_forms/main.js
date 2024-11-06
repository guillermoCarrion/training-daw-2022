window.onload = function() {
    const opciones = document.getElementById('opciones');
    const submitButton = document.getElementById('submit');
    const preguntaSi = document.getElementById('pregunta_si');
    const checkboxCondiciones = document.getElementById('condiciones');
    const checkboxPrivacidad = document.getElementById('privacidad');
    const nameField = document.main_form.name;
    const surnameField = document.main_form.surname;
    const descriptionField = document.main_form.description;

    opciones.disabled = true;
    submitButton.disabled = true;

    preguntaSi.onchange = function() {
        opciones.disabled = !preguntaSi.checked;
    };

    checkboxCondiciones.onchange = checkboxPrivacidad.onchange = function() {
        submitButton.disabled = !(checkboxCondiciones.checked && checkboxPrivacidad.checked);
    };

    submitButton.onclick = function(e) {
        e.preventDefault();

        if (!nameField.value.trim()) {
            return alert("Introduce el nombre");
        }
        if (!surnameField.value.trim()) {
            return alert("Introduce el apellido");
        }
        if (descriptionField.value.length > 80) {
            return alert("Menos de 80 caracteres");
        }

        alert("Formulario enviado");
    };
};
