//Impirtar o módulo express 
const app = require('express')();
//importar o http e atribuindo a constante dp express e criando um servidor
const http = require('http').createServer(app);
//Importar o socket.io e colocando o http como parametro
const io = require('socket.io')(http);
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
//Rota para página inicial 
io.on('connection', (socket) => {
  
  console.log('Usuário conectado');
  //Evento para quando o usuario enviar uma mensagem via socket.io
  socket.on('chat message', (data) => io.emit('chat message', data));
   //Evento para quando o usuario desconectar
  socket.on('disconnect', () => console.log('Usuário desconectado'));
});
//Iniciar o servidor na porta 3000
http.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000 - Link http://localhost:3000`);
});
