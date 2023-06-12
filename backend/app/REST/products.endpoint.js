import business from "../business/business.container";
import { isValidObjectId } from "mongoose";
import { body } from 'express-validator';
import { v4 as uuidv4 } from 'uuid';

const productsEndpoint = (router) => {
  router.get("/api/products", async (request, response, next) => {
    try {
      let result = await business.getProductManager().query();
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
      response.status(500).send("Wystąpił błąd podczas pobierania produktów");
    }
  });

  router.get("/api/product/:id", async (request, response, next) => {
    try {
      const id = request.params.id;
      const result = await business.getProductManager().get(id);
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
      response.status(500).send("Wystąpił błąd podczas pobierania produktu");
    }
  });

  router.post("/api/product", async (request, response, next) => {
    try {
      const data = request.body;
      const result = await business.getProductManager().createNewOrUpdate(data);
      response.status(201).send(result);
    } catch (error) {
      console.log(error);
      response.status(500).send("Wystąpił błąd podczas tworzenia/aktualizacji produktu");
    }
  });
  
};

export default productsEndpoint;
