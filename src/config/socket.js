export const socket = new WebSocket("ws://localhost:8080/test");

export const sendMessage = (message) => {
    socket.send(message)
}