import business from "../business/business.container";

const productsEndpoint = (router) => {
    router.get("/api/products", async (request, response, next) => {
        try {
            let result = await business.getProductsManager().query();
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    router.get("/api/product/:id", async (request, response, next) => {
        try {
            const id = request.params.id;
            const result = await business.getProductsManager().get(id);
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    router.post("/api/product", async (request, response, next) => {
        try {
            const data = request.body;
            const result = await business.getProductsManager().createNewOrUpdate(data);
            response.status(201).send(result);
        } catch (error) {
            console.log(error);
        }
    });
};
export default productsEndpoint;