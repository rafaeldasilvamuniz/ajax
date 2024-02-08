document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btn-perfil').addEventListener('click', function(){
        //AJAX - Asynchronous Javascript and XML
        try {
          const xhttp = new XMLHttpRequest();
          const endpoint = `https://github.com/rafaeldasilvamuniz`;
          xhttp.open('GET', endpoint);
          xhttp.send();
        } catch (error) {
            console.error("A URL não abre!");
        }
    })
  })