//ora recupero elemento ul dal DOM 
const lista = document.getElementById("lista-email");

//creo un ciclo per generare le 10 mail
for (let i=0; i < 10; i++) {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => {
        const email = response.data.response;

    });

    //creo una li per ogni email
    const li = document.createElement("li");
    li.textContent = email;
    

    //aggingo li alla lista usando append
    lista.appendChild("li");

    
    


}
/*axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
.then(response => {
    const email = response.data.response;

    //prendo elemento del DOM
    document.getElementById("email").textContent = email;

});
*/