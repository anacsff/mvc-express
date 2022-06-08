const express = require("express");
const app = express();
const port = 3000;
const userRoute = require("./src/routes/userRoute");

//rodar a aplicação; USAR tal parametro no app, nesse caso, configurar um pacote de rotas, pacote de usuário.
//são chamadas  através do postman, para funcionar devem ser vinculadas ao app
app.use(express.json());
app.use(userRoute);

app.listen(port, () => {
  console.log("Estamos rodando na porta: " + port);
});
