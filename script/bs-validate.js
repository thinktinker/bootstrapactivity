// form validation (anonymous function)
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {

            // this sample code available from Bootstrap only prevents the form
            // from further event actions; it does not stop the toast's display
            // additional validations need to be performed on the user input
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated');
        }, false)
    });
})();
