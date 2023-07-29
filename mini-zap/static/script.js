var socket = io("192.168.0.110:5000");
socket.on("connect", function(){
    console.log("Usuário conectou");
});

socket.on("message", function(data){
    //console.log("Disparou uma mensagem")
    $(".feed").append($("<p>").text(data));

});

$("#botao").on("click", function(){
    //console.log("Clicou no botão")
    socket.send($(".user-text").val() + ": " + $(".message-text").val());
    $(".message-text").val("");
});

