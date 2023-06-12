import listDAO from "../DAO/listDAO";

function create(context) {
    async function query() {
        let result = await listDAO.query();
        if (result) {
            return result;
        }
    }

    async function get(id) {
        let result = await listDAO.get(id);
        if (result) {
            return result;
        }
    }

    async function createNewOrUpdate(data) {
        let result = await listDAO.createNewOrUpdate(data);
        if (result) {
            return result;
        }
    }

    async function deleteList(listId) {
        // if (!isValidObjectId(id)) {
        //     throw new Error('Nieprawidłowy identyfikator listy');
        // }
        return listDAO.deleteList(listId);
    }

    return {
        query: query,
        get: get,
        createNewOrUpdate: createNewOrUpdate,
        deleteList: deleteList,
    };
}

export default {
    create: create
};

