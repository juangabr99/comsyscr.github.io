const formulario = document.getElementById("formulario");

const nombre = document.getElementById("txtNombre");
const regnombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

const apellido = document.getElementById("txtApellido");
const regapellido = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

const email = document.getElementById("txtemail");
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

const asunto = document.getElementById("txtasunto");

const mensaje = document.getElementById("txtmensaje");

const alertnombre = document.getElementById("alertnombre");
const alertapelli = document.getElementById("alertapelli");
const alertemail = document.getElementById("alertemail");
const alertasunto = document.getElementById("alertasunto");
const alertmensaje = document.getElementById("alertmensaje");

const alertSuccess = document.getElementById("alertSuccess");

const pintarMensajeExito = () => {
    const nombre = document.getElementById("txtNombre").value;
    const apellido = document.getElementById("txtApellido").value;
    const correo = document.getElementById("txtemail").value;
    const asunto = document.getElementById("txtasunto").value;
    const mensaje = document.getElementById("txtmensaje").value;

    alert("Nombre: "+ nombre +"\nApellido: "+apellido+"\nEmail: "+correo+"\nAsunto: "+asunto+"\nMensaje: \n"+mensaje);
    alertSuccess.classList.remove("d-none");
    window.location.href=`mailto:juangabr20@gmail.com?subject=${asunto}&body=Nombre%3A%20${nombre}%0AApellido%3A%20${apellido}%0AEmail%3A%20${correo}%0AMensaje%3A%20${mensaje}`;
    alertSuccess.textContent = "Mensaje enviado con éxito";
};

const pintarMensajeError = (errores) => {
    errores.forEach((item) => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
    });
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    alertSuccess.classList.add("d-none");
    const errores = [];

    //validar nombre
    function validarnombre(){
        if (!regnombre.test(nombre.value)) {
            nombre.classList.add("is-invalid");
    
            errores.push({
                tipo: alertnombre,
                msg: "Nombre: Formato no válido, solo letras",
            });
        }
        else if (nombre.value.length < 5){
            nombre.classList.add("is-invalid");
    
            errores.push({
                tipo: alertnombre,
                msg: "Nombre: Debe ingresar minimo 5 caracteres"
            })
        }
        else if (nombre.value == "" || nombre.value.charAt(0) == " "){
            nombre.classList.add("is-invalid");
    
            errores.push({
                tipo: alertnombre,
                msg: "Nombre:No debe dejar espacios en blanco"
            })
        }
        else {
            nombre.classList.remove("is-invalid");
            nombre.classList.add("is-valid");
            alertnombre.classList.add("d-none");
        }
    };

    //validar apellido
    function validarappellido(){
        if (!regapellido.test(apellido.value)) {
            apellido.classList.add("is-invalid");
    
            errores.push({
                tipo: alertapelli,
                msg: "Apellido: Formato no válido, solo letras",
            });
        }
        else if (apellido.value.length < 5){
            apellido.classList.add("is-invalid");
    
            errores.push({
                tipo: alertapelli,
                msg: "Apellido: Debe ingresar minimo 5 caracteres"
            })
        }
        else if (apellido.value == "" || apellido.value.charAt(0) == " "){
            apellido.classList.add("is-invalid");
    
            errores.push({
                tipo: alertapelli,
                msg: "Apellido: No debe dejar espacios en blanco"
            })
        }
        else {
            apellido.classList.remove("is-invalid");
            apellido.classList.add("is-valid");
            alertapelli.classList.add("d-none");

            lastname = apellido;
        }
    };

    function validartxtemail(){
        if (!emailRegex.test(email.value)) {
            email.classList.add("is-invalid");
    
            errores.push({
                tipo: alertemail,
                msg: "Formato no válido",
            });
        }
        else if (email.value == "" || email.value.charAt(0) == " "){
            email.classList.add("is-invalid");
    
            errores.push({
                tipo: alertemail,
                msg: "No debe dejar espacios en blanco"
            })
        }
        else {
            email.classList.remove("is-invalid");
            email.classList.add("is-valid");
            alertemail.classList.add("d-none");
        }
    };

    function validarasunto(){
        if(asunto.value == "" || asunto.value.charAt(0) == " "){
            asunto.classList.add("is-invalid");
    
            errores.push({
                tipo: alertasunto,
                msg: "No debe dejar espacios en blanco"
            })
        }
        else{
            asunto.classList.remove("is-invalid");
            asunto.classList.add("is-valid");
            alertasunto.classList.add("d-none");
        }
    }

    function validarmensaje(){
        if(mensaje.value == "" || mensaje.value.charAt(0) == " "){
            mensaje.classList.add("is-invalid");
    
            errores.push({
                tipo: alertmensaje,
                msg: "No debe dejar espacios en blanco"
            })
        }
        else{
            mensaje.classList.remove("is-invalid");
            mensaje.classList.add("is-valid");
            alertmensaje.classList.add("d-none");
        }
    }

    validarnombre();
    validarappellido();
    validartxtemail();
    validarasunto();
    validarmensaje();

    if (errores.length !== 0) {
        pintarMensajeError(errores);
        return;
    };

    console.log("Formulario enviado con éxito");
    pintarMensajeExito();
});