export const socket = new WebSocket("ws://localhost:8081/ServerBuscaminas/test");

export const sendMessage = (message) => {
    socket.send(message)
}