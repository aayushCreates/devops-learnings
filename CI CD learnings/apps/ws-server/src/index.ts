import WebSocket, { WebSocketServer } from 'ws';
import { prisma } from '@repo/db'

const wsServer = new WebSocketServer({
    port: 5051
});

wsServer.on("connection", (socket: WebSocket)=> {
    const newUser = prisma.user.crate({
        data: {
            name: Math.random().toString(),
            email: Math.random().toString(),
            password: Math.random().toString()
        }
    });

    socket.send("Hi Web socker server is running...");
});

wsServer.close();