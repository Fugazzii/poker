import { ACTION, SocketBody } from "./Common";
import { Server } from "./Server";

const server = new Server();

server.listen();

// const socket0 = new WebSocket("ws://localhost:3001/");
// const socket = new WebSocket("ws://localhost:3001/");

// socket.addEventListener("open", event => {
//     create({        
//         action: ACTION.NEW_PLAYER,
//         args: {
//             username: "ilia",
//             money: 1000
//         }
//     });

//     create({
//         action: ACTION.CREATE_BOARD,
//         args: {
//             admin: "ilia"
//         }
//     });

//     create({
//         action: ACTION.JOIN_BOARD,
//         args: {
//             playerUsername: "ilia",
//             boardId: "some_board_id"
//         }
//     })
// });

// socket.addEventListener("message", event => {
//     console.log(`Received from server: ${event.data}`);
// });

// function create(socketBody: SocketBody) {
//     const request = JSON.stringify(socketBody);

//     socket.send(request);
// }
