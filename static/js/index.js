//https://www.eclipse.org/paho/clients/js/

function enviarmsg() {
  console.log("Mensaje enviado");
  var texto = document.getElementById('enviarmensaje').value;
  message = new Paho.MQTT.Message(texto);
  message.destinationName = "jhoni191sh@gmail.com/t1";
  client.send(message);
  document.getElementById('enviarmensaje').value = '';


// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "jhoni191sh@gmail.com",
    password: "Milystefy12",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("jhoni191sh@gmail.com/t2");
    message = new Paho.MQTT.Message("hola saludos a todos");
    message.destinationName = "jhoni191sh@gmail.com/t2";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  /* called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	  document.getElementById("sensor").innerHTML=message.payloadString;
  }*/
  
  
  
