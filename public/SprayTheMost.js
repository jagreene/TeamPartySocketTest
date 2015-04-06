var socket=io();

// $('form').submit(function(){
// 	socket.emit('chat message',$('#m').val());
// 	$('#m').val('');
// 	return false;
// });
// socket.on('chat message', function(msg){
// 	$('#messages').append($('<li>').text(msg));
// });

function init() {
    var stage = new createjs.Stage("demoCanvas");
    var drawing = false;
    
	createjs.Ticker.addEventListener("tick", stage);
    createjs.Ticker.setFPS(60);

    stage.on('stagemousemove', function(event){
    	console.log(event.stageX, event.stageY,socket.id);
    	if(drawing){
	    	socket.emit('game message',{title:'spraythemost',position:{x:event.stageX,y:event.stageY}});
	    }
    });

    stage.on('stagemousedown',function(event){
    	drawing = true;
    });
    stage.on('stagemouseup',function(event){
    	drawing = false;
    });


    this.document.onkeydown = move;
    function move(event) {
	    switch(event.keyCode) {
	        case 37:
	            circle.x -= 10;
	            break;
	        case 39:
	            circle.x += 10;
	            break;
	        case 38:
	            circle.y -= 10;
	            break;
	        case 40:
	            circle.y += 10;
	            break;
	    }
	}
}s