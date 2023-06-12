import userManager from './user.manager';
import productsManager from './products.manager';
import listManager from './list.manager';


function getter(manager, request) {
 return function () {
   return manager.create(request, this);
 };
}

export default {
   getUserManager: getter(userManager),
   getProductManager: getter(productsManager),
   getListManager: getter(listManager)
};