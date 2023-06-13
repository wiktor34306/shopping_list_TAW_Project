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
  
      await business.getListManager().deleteList(id);
  
      response.status(200).send('Lista została pomyślnie usunięta');
    } catch (error) {
      console.log(error);
      response.status(500).send('Wystąpił błąd podczas usuwania listy');
    }
  });

  // edycja 
// router.put('/api/task/:id', async (request, response, next) => {
//   try {
//     const id = request.params.id;
//     const data = request.body;

//     if (!id) {
//       return response.status(400).send('Invalid task ID');
//     }

//     const updatedData = Object.assign({ id }, data);
//     const result = await business.getTaskManager().createNewOrUpdate(updatedData);

//     response.status(200).send(result);
//   } catch (error) {
//     console.log(error);
//     response.status(500).send('An error occurred while updating the task');
//   }
// });
}
export default listEndpoint;
