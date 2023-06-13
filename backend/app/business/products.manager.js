// import productsDAO from '../DAO/productsDAO';
// import { isValidObjectId } from 'mongoose';

// function create(context) {
//     async function query() {
//         let result = productsDAO.query();
//         if (result) {
//             return result;
//         }
//     }

//     async function get(id) {
//         let result = await productsDAO.get(id);
//         if (result) {
//             return result;
//         }
//     }

//     async function createNewOrUpdate(data) {
//         let result = await productsDAO.createNewOrUpdate(data);
//         if (result) {
//             return result;
//         }
//     }

//     async function deleteList(id) {
//         if (!isValidObjectId(id)) {
//             throw new Error('Invalid List ID');
//         }
//         return productsDAO.deleteList(id);
//     }

//     return {
//         query: query,
//         get: get,
//         createNewOrUpdate: createNewOrUpdate,
//         deleteList: deleteList,
//     };
// }

// export default {
//     create: create
// };

import productsDAO from '../DAO/productsDAO';
import { isValidObjectId } from 'mongoose';

function create(context) {
    async function query() {
        let result = await productsDAO.query();
        if (result) {
            return result;
        }
    }

    async function get(id) {
        console.log('z product.manager',id)
        let result = await productsDAO.get(id);
        if (result) {
            return result;
        }
    }

    async function createNewOrUpdate(data) {
        let result = await productsDAO.createNewOrUpdate(data);
        if (result) {
            return result;
        }
    }

    async function deleteProduct(id){
        console.log('z product.manager')
        let result = await productsDAO.deleteProduct(id);
        if(result) {
            return result;
        }
    }

    return {
        query: query,
        get: get,
        createNewOrUpdate: createNewOrUpdate,
        deleteProduct: deleteProduct
    };
}

export default {
    create: create
};

