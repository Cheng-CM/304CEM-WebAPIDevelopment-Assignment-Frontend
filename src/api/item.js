import Vue from 'vue';
var url = 'https://backend304cem7363.herokuapp.com';
class ItemAPI {

    findItemById = (param) => Vue.axios.get( url + '/public/item/id/' + param);

    findItemByCreated = (param) => Vue.axios.get(url + '/public/Item/Created/' + param);

    create = (params, jwt) => Vue.axios.post(
        url + '/private/Item',
        params, {
            headers: {
                "x-access-token": jwt
            }
        }
    );


    updateById = (id, params, jwt) => Vue.axios.put(
        url + '/private/Item/Id/' + id,
        params, {
            headers: {
                "x-access-token": jwt
            }
        }
    );

    deletebyId = (id, jwt) => Vue.axios.delete(
        url + '/private/Item/Id/' + id, {
            headers: {
                "x-access-token": jwt
            }
        }
    );
}

export default new ItemAPI();