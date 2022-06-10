const express = require("express");
const app = express();
const port = 3000;
const userRoute = require("./src/routes/userRoute");
const indexRoute = require("./src/routes/indexRoute")

//Configura o conteudo estático para acesso externo
app.use(express.static(__dirname + "/public"));
//Configura o template engine
app.set("view engine", "ejs");
//Configura o caminho para os views
app.set("views", __dirname + "/src/views");
//são chamadas  através do postman, para funcionar devem ser vinculadas ao app
app.use(express.json());
app.use(indexRoute);
//rodar a aplicação; USAR tal parametro no app, nesse caso, configurar um pacote de rotas, pacote de usuário.
app.use("/user", userRoute);

app.listen(port, () => {
  console.log("Estamos rodando na porta: " + port);
});
