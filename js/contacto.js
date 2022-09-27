//Envio Formulario Contacto

emailjs.init("ZcZfklNfcSRElXPMK");
const btn = document.getElementById("button-contacto");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = 'Enviando...';
  const serviceID = "default_service";
  const templateID = "template_en4kcjd";

  emailjs.sendForm(serviceID, templateID, this)
  .then(() => {
      Swal.fire({
        
        icon: "success",
        title: "Se envió el mensaje",
        timer: 2500,
        showConfirmButton: false,
      });

      window.location = "contacto.html";
    },
    (err) => {
      btn.value = "ENVIAR";
      alert(JSON.stringify(err));
    }
  );
});
