import { Server } from "./Server";

const server = new Server();

server.listen();

// const socket0 = new WebSocket("ws://localhost:3001/");
const socket = new WebSocket("ws://localhost:3001/");

socket.addEventListener("open", event => {
    socket.send("Hello");
});

socket.addEventListener("message", event => {
    console.log(`Received from server: ${event.data}`);
});


