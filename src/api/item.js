import Vue from 'vue';
class ItemAPI {

    findItemById = (param) => Vue.axios.get('http://localhost:3000/public/item/id/' + param);

    findItemByCreated = (param) => Vue.axios.get('http://localhost:3000/public/Item/Created/' + param);

    create = (params, jwt) => Vue.axios.post(
        'http://localhost:3000/private/Item',
        params, {
            headers: {
                "x-access-token": jwt
            }
        }
    );


    updateById = (id, params, jwt) => Vue.axios.put(
        'http://localhost:3000/private/Item/Id/' + id,
        params, {
            headers: {
                "x-access-token": jwt
            }
        }
    );

    deletebyId = (id, jwt) => Vue.axios.delete(
        'http://localhost:3000/private/Item/Id/' + id, {
            headers: {
                "x-access-token": jwt
            }
        }
    );
}

export default new ItemAPI();