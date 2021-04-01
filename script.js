document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {

   let number = document.getElementById('number').value;
   
   const xhr = new XMLHttpRequest();
   xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`);

   xhr.onload = function() {
      if(this.status === 200) {
         const response = JSON.parse(this.responseText);
         let output = '';

         if(response.type === 'success') {
            response.value.forEach(joke=>{
               output += `
                  <li class="mb-3">"${joke.joke}"</li>
               `
            })
         } else {
            output = 'Something went wrong!';
         }

         document.querySelector('.jokes').innerHTML = output;
      }
   }

   xhr.send();

   e.preventDefault();
}