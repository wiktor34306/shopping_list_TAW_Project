import business from "../business/business.container";
import { isValidObjectId } from "mongoose";
import { body } from 'express-validator';
import { v4 as uuidv4 } from 'uuid';

const listEndpoint = (router) => {
  router.get("/api/lists", async (request, response, next) => {
    try {
      let result = await business.getListManager().query();
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
      response.status(500).send("Wystąpił błąd podczas pobierania produktów");
    }
  });

  router.get("/api/list/:id", async (request, response, next) => {
    try {
      const id = request.params.id;
      const result = await business.getListManager().get(id);
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
      response.status(500).send("Wystąpił błąd podczas pobierania produktu");
    }
  });

  router.post("/api/list", async (request, response, next) => {
    try {
      const data = request.body;
      const result = await business.getListManager().createNewOrUpdate(data);
      response.status(201).send(result);
    } catch (error) {
      console.log(error);
      response.status(500).send("Wystąpił błąd podczas tworzenia/aktualizacji produktu");
    }
  });
  
  router.delete('/api/list/:id', async (request, response, next) => {
    try {
      const id = request.params.id;
  
      if (!id) {
        return response.status(400).send('Nieprawidłowy identyfikator listy');
      }
  
      const result = await business.getListManager().deleteList(id)
  
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
      response.status(500).send('Wystąpił błąd podczas usuwania listy');
    }
  });

  // edycja 
  router.put('/api/list/:id', async (request, response, next) => {
    try {
      const id = request.params.id;
      const { titleOfList } = request.body;
  
      if (!id) {
        return response.status(400).send('Nieprawidłowy identyfikator listy');
      }
  
      if (!titleOfList) {
        return response.status(400).send('Nieprawidłowa nazwa listy');
      }
  
      const updatedList = await business.getListManager().updateListTitle(id, titleOfList);
  
      if (!updatedList) {
        return response.status(404).send('Nie znaleziono listy');
      }
  
      response.status(200).send(updatedList);
    } catch (error) {
      console.log(error);
      response.status(500).send('Wystąpił błąd podczas aktualizowania nazwy listy');
    }
  });
  
  

}
export default listEndpoint;
