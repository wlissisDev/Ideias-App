const pessoas = [
    {
        name: "Wlissis",
        street: "Rua 11",
        city: "Caucaia",
        state: "CE",
        country: "Brasil",
        telephone: "777",
        birthday: "1999"
    },

    {
        name: "Sterfani",
        street: "Rua 10",
        city: "Caucaia",
        state: "CE",
        country: "Brasil",
        telephone: "888",
        birthday: "1997"
    },
    
  ];

// var divElement = document.querySelector('#app').addEventListener('click', function(e){
//       e.target.classList.toggle('none');
// })
//   console.log(divElement);


var divElement = document.querySelector('.app');
var ulElement = document.createElement('ul');

divElement.append(ulElement);

for (let p of pessoas) {

    let liElement = document.createElement('li');
    liElement.innerHTML = `
    ${p.name}, 
    ${p.state}, 
    ${p.street}, 
    ${p.telephone}`;
    ulElement.append(liElement);
}