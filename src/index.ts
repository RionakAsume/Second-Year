import server from "./server";

server.listen(process.env.PORT!, () =>  console.log(`Servidor escuchando`));
