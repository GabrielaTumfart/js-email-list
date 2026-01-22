//ora recupero elemento ul dal DOM 
cosnt lisra = document.getElementById("lista-email");

//creo un ciclo per generare le 10 mail
for (let i=0; i < 10; i++) {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => {
        cosnt email = response.data.response;

    });


}
/*axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
.then(response => {
    const email = response.data.response;

    //prendo elemento del DOM
    document.getElementById("email").textContent = email;

});
*/