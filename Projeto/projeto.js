/*Form*/


   
    const submit = document.getElementById("submit");

//criar um ouvinte quando o botão submit for acionado 
 

        function validate(e) {
            e.preventDefalt();

            const form = document.getElementById('nameError');
            let valid = true;
 

            if(!submitField.value) {
                const submit = document.getElementById("submit");
               submit.classList.add("visible");
                formField.classList.add("invalid");
                submit.setAttribute("aria-hidden", false);
                submit.setAttribute("aria-invalid, true");


            }

            return valid;
        }
        

    
   

























