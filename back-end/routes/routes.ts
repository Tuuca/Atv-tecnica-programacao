import express from "express";
import ClienteControllers from "../controllers/ClienteControllers";
import ConsumoControllers from "../controllers/ConsumoControllers";
import ProdutosControllers from "../controllers/ProdutosControllers";


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


export default route;