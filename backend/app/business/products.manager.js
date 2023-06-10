import productsDAO from '../DAO/productsDAO';

function create(context) {
    async function query() {
        let result = productsDAO.query();
        if (result) {
            return result;
        }
    }

    async function get(id) {
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

    return {
        query: query,
        get: get,
        createNewOrUpdate: createNewOrUpdate,
    };
}

export default {
    create: create
};

