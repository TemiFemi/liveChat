const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io')
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origi: "http://localhost:3000",
        method: ["Get", "Post"],
    },
});

io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on('disconnect', () => {
        console.log("User Disconnected", socket.id)
    })
})



server.listen(3001, () => {
    console.log("server running")
})