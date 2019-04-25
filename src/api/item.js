import Vue from 'vue';

class ItemAPI {
    findItemById = (param) => Vue.axios.get('https://backend304cem7363.herokuapp.com/public/item/id/' + param);

    findItemByCreated = (param) => Vue.axios.get('https://backend304cem7363.herokuapp.com/public/Item/Created/' + param);

    create = (params, jwt) => Vue.axios.post(
        'https://backend304cem7363.herokuapp.com/private/Item',
        params, {
            headers: {
                "x-access-token": jwt
            }
        }
    );


    updateById = (id, params, jwt) => Vue.axios.put(
        'https://backend304cem7363.herokuapp.com/private/Item/Id/' + id,
        params, {
            headers: {
                "x-access-token": jwt
            }
        }
    );

    deletebyId = (id, jwt) => Vue.axios.delete(
        'https://backend304cem7363.herokuapp.com/private/Item/Id/' + id, {
            headers: {
                "x-access-token": jwt
            }
        }
    );
}

export default new ItemAPI();