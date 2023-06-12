import listEndpoint from './list.endpoint';
import productsEndpoint from './products.endpoint';
import userEndpoint from './user.endpoint';
const routes = function (router) {
    userEndpoint(router);
    productsEndpoint(router);
    listEndpoint(router);
};

export default routes;
