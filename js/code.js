
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.continuous = true;


  recognition.onresult = function(event) {
    const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
    document.getElementById('comando').innerHTML = transcript;

    if (transcript.includes('abrir youtube')) {
      var mensaje = new SpeechSynthesisUtterance("Abriendo YouTube");
      window.speechSynthesis.speak(mensaje);
      window.open('https://www.youtube.com','_black');
    } 
    
    else if (transcript.includes('abrir facebook')) {
      var mensaje = new SpeechSynthesisUtterance("Abriendo Facebook");
      window.speechSynthesis.speak(mensaje);
      window.open('https://www.facebook.com','_black');
    } 
    
    else if (transcript.includes('abrir instagram')) {
      var mensaje = new SpeechSynthesisUtterance("Abriendo Instagram");
      window.speechSynthesis.speak(mensaje);
      window.open('https://www.instagram.com','_black');
    } 
    
    else if (transcript.includes('ver anime')) {
      var mensaje = new SpeechSynthesisUtterance("Dirijiendo a anime");
      window.speechSynthesis.speak(mensaje);
      window.open('https://www.animeflv.net/','_black');
    } 
    
    else if (transcript.includes('aula universitaria')) {
      var mensaje = new SpeechSynthesisUtterance("Abriendo Aula Universitaria");
      window.speechSynthesis.speak(mensaje);
      window.open('https://upaulavirtual.upacifico.edu.ec/login/index.php','_black');
    } 
    
    else if (transcript.includes('correo universitario')) {
      var mensaje = new SpeechSynthesisUtterance("Abriendo correo universitario");
      window.speechSynthesis.speak(mensaje);
      window.open('https://outlook.office.com/mail/','_black');
    } 
    
    else if (transcript.includes('abrir mi correo')) {
      var mensaje = new SpeechSynthesisUtterance("Abriendo correo personal");
      window.speechSynthesis.speak(mensaje);
      window.open('https://outlook.live.com/mail/0/','_black');
    } 
    
    else if (transcript.includes('hola')) {
      var mensaje = new SpeechSynthesisUtterance("Saludos, Edison");
      mensaje.onend = function() {
        window.speechSynthesis.cancel(); // Detiene la síntesis de voz
      };
      window.speechSynthesis.speak(mensaje);    
    } 
    
    else if (transcript.includes('lista de comandos')) {
      var mensaje = new SpeechSynthesisUtterance("Mostrando lista actual");
      mensaje.onend = function() {
        window.speechSynthesis.cancel(); // Detiene la síntesis de voz
        document.getElementById('respuestasCuadro').innerHTML = "comandos disponibles:<br><br>-abrir youtube<br>-abrir facebook<br>-abrir instagram<br>-ver anime<br>-aula de universidad<br>-correo universitario<br>-abrir mi correo<br>-modo oscuro<br>-modo claro";
      };
      window.speechSynthesis.speak(mensaje);
    } 
    
    else if (transcript.includes('cómo estás')) {
      var mensaje = new SpeechSynthesisUtterance("Yo estoy genial, ¿y tu?");
      mensaje.onend = function() {
        window.speechSynthesis.cancel(); // Detiene la síntesis de voz
      };
      window.speechSynthesis.speak(mensaje);
      document.getElementById('comando').innerHTML="Yo estoy genial ¿y tu?";
    } 
    
    else if (transcript.includes('bien')) {
      var mensaje = new SpeechSynthesisUtterance("Que bueno!, me alegro");
      mensaje.onend = function() {
        window.speechSynthesis.cancel(); // Detiene la síntesis de voz
      };
      window.speechSynthesis.speak(mensaje);
      document.getElementById('comando').innerHTML="Que bueno!, me alegro";
    } 
    
    else if (transcript.includes('quién es tu creador')) {
      var mensaje = new SpeechSynthesisUtterance("Mi creador es Edison");
      window.speechSynthesis.speak(mensaje);
      document.getElementById('comando').innerHTML="Fui creado por Edison :)";
    }     
   
    else if (transcript.includes('modo oscuro')) {
          var mensaje = new SpeechSynthesisUtterance("cambiando tema");
          window.speechSynthesis.speak(mensaje);
          const darkModeButton = document.getElementById('dark-mode-button');
          const body = document.body;
          body.classList.add('dark-mode');
          } else if (transcript.includes('modo claro')) {
            var mensaje = new SpeechSynthesisUtterance("cambiando tema");
             window.speechSynthesis.speak(mensaje);
          const darkModeButton = document.getElementById('dark-mode-button');
          const body = document.body;
          body.classList.remove('dark-mode');
    }
    
    
    else if (transcript.includes('adiós')) {
      var mensaje = new SpeechSynthesisUtterance("hasta luego, cuidate");
      window.speechSynthesis.speak(mensaje);
      document.getElementById('comando').innerHTML="hasta luego, cuidate";
    }

    else if (transcript.includes('reproduce mix de terror')) {
      var mensaje = new SpeechSynthesisUtterance("Reproduciendo mix de terror");
      window.speechSynthesis.speak(mensaje);
      window.open('https://www.youtube.com/watch?v=kr_yIfu4neg&list=PLfsaCGkLW0n6f8_RS79gTM3eSOQ5Vk1-N','_black');
    } 

    else if (transcript.includes('reproduce mix romántico')) {
      var mensaje = new SpeechSynthesisUtterance("Reproduciendo mix romantico");
      window.speechSynthesis.speak(mensaje);
      window.open('https://www.youtube.com/watch?v=zi8IzhiBRV8&list=PLttk0gwvQz3GPmwNbQIs-51a_0TzDUNTf','_black');
    } 

    else if (transcript.includes('reproduce mix de porta')) {
      var mensaje = new SpeechSynthesisUtterance("Reproduciendo mix de porta");
      window.speechSynthesis.speak(mensaje);
      window.open('https://www.youtube.com/watch?v=6MwSUD2doDY&list=PL0A4D481E4E7CC254&index=1','_black');
    } 

    else if (transcript.includes('reproduce música')) {
      var mensaje = new SpeechSynthesisUtterance("Reproduciendo musica");
      window.speechSynthesis.speak(mensaje);
      window.open('https://www.youtube.com/watch?v=bY_C0Ep3hbA&list=RDbY_C0Ep3hbA&start_radio=1', '_black');
    } 

    else if (transcript.includes('cómo te llamas')) {
      var mensaje = new SpeechSynthesisUtterance("Soy un proyecto de prueba al que llamaron, Zeta, y fui creado por Edison");
      mensaje.onend = function() {
        window.speechSynthesis.cancel(); // Detiene la síntesis de voz
      };
      window.speechSynthesis.speak(mensaje);    
    } 

    else if (transcript.includes('abre una nueva pestaña')) {
      var mensaje = new SpeechSynthesisUtterance("abriendo nueva pestaña");
      window.speechSynthesis.speak(mensaje);
      window.open('https://www.google.com/', '_black');
    } 

    else if (transcript.includes('mi cumpleaños')) {
      var mensaje = new SpeechSynthesisUtterance("Tu cumpleaños es el 7 de enero del 2005");
      mensaje.onend = function() {
        window.speechSynthesis.cancel(); // Detiene la síntesis de voz
      };
      window.speechSynthesis.speak(mensaje);    
    } 
    

    else if (transcript.includes('tu fecha de creación')) {
      var mensaje = new SpeechSynthesisUtterance("Fui creado el 6 de mayo del 2023 por Edison");
      window.speechSynthesis.speak(mensaje);
      document.getElementById('comando').innerHTML="Fui creado el 6 de mayo del 2023 por Edison";
    }

    else if (transcript.includes('buscar información')) {
      const searchTerm = transcript.replace('buscar información', '').trim();
    
      if (searchTerm !== '') {
        var mensaje = new SpeechSynthesisUtterance(`Buscando información ${searchTerm}`);
        window.speechSynthesis.speak(mensaje);
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
        window.open(searchUrl, '_blank');
      } else {
        var mensaje = new SpeechSynthesisUtterance("No has proporcionado un término de búsqueda válido");
        window.speechSynthesis.speak(mensaje);
      }
    }
    
    
    else if (transcript.includes('resolver')) {
      const problem = transcript.replace('resolver', '').trim();
    
      if (problem !== '') {
        try {
          const result = eval(problem);
          var mensaje = new SpeechSynthesisUtterance(`El resultado de ${problem} es ${result}`);
          window.speechSynthesis.speak(mensaje);
        } catch (error) {
          var mensaje = new SpeechSynthesisUtterance("Ha ocurrido un error al resolver el problema");
          window.speechSynthesis.speak(mensaje);
        }
      } else {
        var mensaje = new SpeechSynthesisUtterance("No has proporcionado un problema matemático válido");
        window.speechSynthesis.speak(mensaje);
      }
    }
    

    else if (transcript.includes('pon')) {
      const searchTerm = transcript.replace('pon', '').trim();
    
      if (searchTerm !== '') {
        var mensaje = new SpeechSynthesisUtterance(`resultados de ${searchTerm}`);
        window.speechSynthesis.speak(mensaje);
        const searchUrl = `https://www.youtube.com/search?q=${encodeURIComponent(searchTerm)}`;
        window.open(searchUrl, '_blank');
      } else {
        var mensaje = new SpeechSynthesisUtterance("No has proporcionado un término de búsqueda válido");
        window.speechSynthesis.speak(mensaje);
      }
    }

    else if (transcript.includes('quitar lista')) {
      var mensaje = new SpeechSynthesisUtterance("Quitando lista");
      mensaje.onend = function() {
        window.speechSynthesis.cancel(); // Detiene la síntesis de voz
        document.getElementById('respuestasCuadro').innerHTML = " ";
      };
      window.speechSynthesis.speak(mensaje);
    } 

    else if (transcript.includes('horario del martes')) {
      var mensaje = new SpeechSynthesisUtterance("Los martes tienes calculo aplicado de 8 de la mañana a 11 de la mañana, luego comportamiento de 11 de la mañana a 1 de la tarde en el aulda 11");
      window.speechSynthesis.speak(mensaje);
      
    }

    else if (transcript.includes('horario del miércoles')) {
      var mensaje = new SpeechSynthesisUtterance("Los miercoles tienes clases de fundamentos de la programacion, de 9 de la mañana a 12 de la tarde en el laboratorio 1, luego tienes analisis de casos de 6 de la tarde a 8 de la noche por teams");
      window.speechSynthesis.speak(mensaje);
      
    }

    else if (transcript.includes('horario del jueves')) {
      var mensaje = new SpeechSynthesisUtterance("Los jueves tienes clases de contabilidad gerencial de 9 de la mañana a 12 de la tarde en el laboratorio 1, luego comportamiento organizado de 12 de la tarde a 2 de la tarde en el aula 11");
      window.speechSynthesis.speak(mensaje);
      
    }

    else if (transcript.includes('qué hora es')) {
      var now = new Date();
      var hours = now.getHours();
      var period = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12; 
      var minutes = now.getMinutes();
      var time = hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + period;
      var mensaje = new SpeechSynthesisUtterance('La hora actual es ' + time);
      window.speechSynthesis.speak(mensaje);
    }
    
    
    else if (transcript.includes('qué fecha es hoy')) {
      var now = new Date();
      var options = { year: 'numeric', month: 'long', day: 'numeric' };
      var fecha = now.toLocaleDateString('es-ES', options);
      var mensaje = new SpeechSynthesisUtterance('La fecha actual es ' + fecha);
      window.speechSynthesis.speak(mensaje);
    }
    
    else if (transcript.includes('activar cámara')) {
      var mensaje = new SpeechSynthesisUtterance("Activando camara");
      

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(function(stream) {
            var videoElement = document.getElementById('video');
            videoElement.srcObject = stream;
          })
          .catch(function(error) {
            console.error('Error al acceder a la cámara:', error);
          });
      } else {
        console.error('El navegador no admite la API de MediaDevices');
      }
      window.speechSynthesis.speak(mensaje);
    }

    else if (transcript.includes('quitar cámara')) {
      var mensaje = new SpeechSynthesisUtterance("Quitando cámara");
    
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(function(stream) {
            var videoElement = document.getElementById('video');
            videoElement.srcObject = stream;
    
            var videoTrack = stream.getVideoTracks()[0];
            videoTrack.stop();
            videoElement.srcObject = null;
          })
          .catch(function(error) {
            console.error('Error al acceder a la cámara:', error);
          });
      } else {
        console.error('El navegador no admite la API de MediaDevices');
      }
    
      window.speechSynthesis.speak(mensaje);
    }
    
    else if (transcript.includes('apágate')) {
      var mensaje = new SpeechSynthesisUtterance("apagando, hasta luego");
      window.speechSynthesis.speak(mensaje);
      location.reload();
    }


    else if (transcript.includes('ingresar texto')) {
      var mensaje = new SpeechSynthesisUtterance("activando cuadro");
    
      function mostrarInput() {
        var input = document.getElementById("miInput");
        input.style.display = "block";
        window.speechSynthesis.speak(mensaje);
      }
    
      mostrarInput(); // Llamada a la función para activar el cuadro de texto
    }

    else if (transcript.includes('quitar cuadro')) {
      var mensaje = new SpeechSynthesisUtterance("desactivando");
    
      function mostrarInput() {
        var input = document.getElementById("miInput");
        input.style.display = "none";
        window.speechSynthesis.speak(mensaje);
      }
    
      mostrarInput(); // Llamada a la función para activar el cuadro de texto
    }

    else if (transcript.includes('muestra mi facebook')) {
      var mensaje = new SpeechSynthesisUtterance("ok, este es tu facebook");
      window.speechSynthesis.speak(mensaje);
      document.getElementById('face').src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fvictor.blaz.1%2Fposts%2F473611391458724%3A473611391458724&show_text=true&width=500";
    }

    else if (transcript.includes('quita mi perfil')) {
      var mensaje = new SpeechSynthesisUtterance("ok, ya lo quito");
      window.speechSynthesis.speak(mensaje);
      document.getElementById('face').src=" ";
    }
    
    else if (transcript.includes('proyecto uno')) {
      var mensaje = new SpeechSynthesisUtterance("Ben 10");
      window.speechSynthesis.speak(mensaje);
      window.open('file:///C:/Users/Ediso/OneDrive/Escritorio/Video/index.html','_black');
    } 

    else if (transcript.includes('proyecto 1')) {
      var mensaje = new SpeechSynthesisUtterance("Ben 10");
      window.speechSynthesis.speak(mensaje);
      window.open('file:///C:/Users/Ediso/OneDrive/Escritorio/Video/index.html','_black');
    }

    else if (transcript.includes('pausa')) {
      var mensaje = new SpeechSynthesisUtterance("Pausando");
      window.speechSynthesis.speak(mensaje);
      document.getElementById('reproducir').src=" ";
    }

    else{
      //var mensaje = new SpeechSynthesisUtterance("perdon, no cuento con esa orden");
      //window.speechSynthesis.speak(mensaje);
      alert("comando no registrado")
    }



};






const startButton = document.getElementById('start-button');

  startButton.addEventListener('click', function() {
    recognition.start();
  });
} else {
  alert('El comando de voz no esta disponible.');
}

const darkModeButton = document.getElementById('dark-mode-button');
const body = document.body;

darkModeButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});






document.getElementById('getFriendsButton').addEventListener('click', function() {
  var accessToken = document.getElementById('accessTokenInput').value;
  
  if (accessToken) {
    axios.get('https://graph.facebook.com/v13.0/me/friends', {
      params: {
        access_token: accessToken
      }
    })
    .then(response => {
      var friends = response.data.data;
      var friendsList = document.getElementById('friendsList');
      friendsList.innerHTML = '';

      friends.forEach(friend => {
        var friendItem = document.createElement('li');
        friendItem.textContent = friend.name;
        friendsList.appendChild(friendItem);
      });
    })
    .catch(error => {
      console.error('Error al obtener la lista de amigos:', error);
    });
  } else {
    console.log('Ingresa un token de acceso válido');
  }
});


