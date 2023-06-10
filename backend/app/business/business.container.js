import userManager from './user.manager';
import productsManager from './products.manager';


function getter(manager, request) {
 return function () {
   return manager.create(request, this);
 };
}

export default {
   getUserManager: getter(userManager),
   getProductsManager: getter(productsManager)
};