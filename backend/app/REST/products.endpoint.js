import business from "../business/business.container";
import { isValidObjectId } from "mongoose";
import { body } from 'express-validator';
import { v4 as uuidv4 } from 'uuid';

const productsEndpoint = (router) => {
  router.get("/api/products", async (request, response, next) => {
    try {
      let result = await business.getProductsManager().query();
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
      response.status(500).send("An error occurred while fetching products");
    }
  });

  router.get("/api/product/:id", async (request, response, next) => {
    try {
      const id = request.params.id;
      const result = await business.getProductsManager().get(id);
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
      response.status(500).send("An error occurred while fetching the product");
    }
  });

  router.post("/api/product", async (request, response, next) => {
    try {
      const data = request.body;
      const id = uuidv4(); // Generowanie unikalnego identyfikatora
      const newData = Object.assign({}, data, { id });
      const result = await business.getProductsManager().createNewOrUpdate(newData);
      response.status(201).send(result);
    } catch (error) {
      console.log(error);
      response.status(500).send("An error occurred while creating/updating the product");
    }
  });
  

  router.delete('/api/product/:listId', async (request, response, next) => {
    try {
      const listId = request.params.listId;

      await business.getProductsManager().deleteList(listId);

      response.status(200).send('Product deleted successfully');
    } catch (error) {
      console.log(error);
      response.status(500).send('An error occurred while deleting the product');
    }
  });
};

export default productsEndpoint;
