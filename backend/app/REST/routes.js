import userEndpoint from './user.endpoint';
const routes = function (router) {
    userEndpoint(router);
};

export default routes;
