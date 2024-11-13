function sendmail(){
    let parms={
    name:document.getElementById('name').value,
    email:document.getElementById('email').value,
    subject:document.getElementById('subject').value,
    message:document.getElementById('message').value,
}
   emailjs.send("service_whpapgr","template_ek4cieo",parms).then(alert("Email Sent!!"))
.catch(function(error){
    alert("Error in sending email!!")
})
}