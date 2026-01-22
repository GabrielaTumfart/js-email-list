axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
.then(response => {
    cosnt email = response.data.response;

    //prendo elemento del DOM
    document.getElementById("email").textContent = email;

});