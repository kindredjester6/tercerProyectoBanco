document.addEventListener('DOMContentLoaded', () => {
    console.log("hi!")
    const form = document.getElementById('contact-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = {
        usuario: form.uname.value,
        password: form.psw.value
      };
      
      fetch('http://localhost:3000/api/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        
        console.log(data)
        if (data.success) {
          alert('Formulario enviado exitosamente');
          window.location.href = 'pages/mostrarTF.html';//'chrome://dino';
        } else {
          alert('Hubo un problema al enviar el formulario');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema al enviar el formulario');
      });
    });
  });
  