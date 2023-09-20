import { ACTION } from "./Common";
import { Server } from "./Server";

const server = new Server();

server.listen();

// const socket0 = new WebSocket("ws://localhost:3001/");
const socket = new WebSocket("ws://localhost:3001/");

socket.addEventListener("open", event => {
    
    const socketBody = {
        action: ACTION.NEW_PLAYER,
        args: {
            money: 1000
        }
    };
    
    const request = JSON.stringify(socketBody);

    socket.send(request);
});

socket.addEventListener("message", event => {
    console.log(`Received from server: ${event.data}`);
});


