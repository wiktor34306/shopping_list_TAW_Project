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
    return listDAO.deleteList(listId);
  }

  async function updateListTitle(id, newTitle) {
    const updatedList = await listDAO.updateListTitle(id, newTitle);
    if (updatedList) {
      return updatedList;
    }
  }

  return {
    query: query,
    get: get,
    createNewOrUpdate: createNewOrUpdate,
    deleteList: deleteList,
    updateListTitle: updateListTitle,
  };
}

export default {
  create: create,
};
