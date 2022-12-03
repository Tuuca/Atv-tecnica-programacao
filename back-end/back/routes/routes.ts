import Express from "express";
import ClienteCon from "../controllers/clienteCon";

const router = Express.Router();

router.post("/cliente",
    ClienteCon.create);




export default router;