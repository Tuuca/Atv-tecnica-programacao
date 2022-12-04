import express from "express";
import ClienteControllers from "../controllers/ClienteControllers";
import ConsumoControllers from "../controllers/ConsumoControllers";
import ProdutosControllers from "../controllers/ProdutosControllers";
import ListagemControllers from "../controllers/ListagemControllers";


const route = express.Router();

// ----------------- CLIENTES -----------------

route.get(
"/cliente/getbycpf/:cpf",
 ClienteControllers.getByCpf);


route.post(
    "/cliente",
    ClienteControllers.create
  );

route.delete(
    "/clienteDelete/:cpf",
    ClienteControllers.delete
)
route.post (
    "/clienteUpdate",
    ClienteControllers.update
)
// ----------------- CONSUMO -----------------

route.post(
  "/consumo",
  ConsumoControllers.create

);

route.delete(
    "/consumo/:id",
    ConsumoControllers.delete
)

route.get(
    "/consumo/getById/:id",
    ConsumoControllers.getById);

// ----------------- PRODUTOS -----------------

route.post(
  "/produto",
  ProdutosControllers.create
);

route.delete(
    "/produtoDelete/:nome",
    ProdutosControllers.delete
)

route.get(
    "/produto/getByNome/:nome",
    ProdutosControllers.getByNome);

route.post(
    "/produtoUpdate",
    ProdutosControllers.update
)

// ----------------- LISTAGEM -----------------

route.get(
    "/listagemCliente",
    ListagemControllers.listagemCliente
)

route.get(
    "/listagemProduto",
    ListagemControllers.listagemProduto
)

route.get(
    "/listagem9",
    ListagemControllers.listagem9
)

route.get(
    "/listagem10",
    ListagemControllers.listagem10
)

route.get(
    "/listagem11",
    ListagemControllers.listagem11
)

route.get(
    "/listagem12",
    ListagemControllers.listagem12
)

route.get(
    "/listagem13",
    ListagemControllers.listagem13
)

route.get(
    "/listagem14",
    ListagemControllers.listagem14
)


export default route;