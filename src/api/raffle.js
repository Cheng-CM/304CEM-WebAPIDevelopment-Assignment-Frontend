import Vue from 'vue';
var url = 'https://backend304cem7363.herokuapp.com';
class RaffleAPI {

    findActive = () => Vue.axios.get( 'https://backend304cem7363.herokuapp.com/public/Raffle/active');
    findAll = () => Vue.axios.get(  'https://backend304cem7363.herokuapp.com/public/Raffle/all');
    findRaffleById = (param) => Vue.axios.get(  'https://backend304cem7363.herokuapp.com/public/Raffle/Id/' + param);



    findJoined = (params, jwt) => Vue.axios.get(
        'https://backend304cem7363.herokuapp.com/private/joined/' +
        params, {
            headers: {
                "x-access-token": jwt
            }
        }
    );


    findCreatedBy = (params) => Vue.axios.get(
         'https://backend304cem7363.herokuapp.com/public/Raffle/CreatedBy/' +
        params
    );


    create = (params, jwt) => Vue.axios.post(
      'https://backend304cem7363.herokuapp.com/private/Raffle',
        params, {
            headers: {
                "x-access-token": jwt
            }
        }
    );


    updateById = (id, params, jwt) => Vue.axios.put(
        'https://backend304cem7363.herokuapp.com/private/Raffle/Id/' + id,
        params, {
            headers: {
                "x-access-token": jwt
            }
        }
    );


    updateStatus = (id, status, jwt) => Vue.axios.put(
        'https://backend304cem7363.herokuapp.com/private/Raffle/Id/' + id + "/status/" +
        status, id, {
            headers: {
                "x-access-token": jwt
            }
        }
    );

    join = (id, user, jwt) => Vue.axios.put(
        'https://backend304cem7363.herokuapp.com/private/Join/' + id + "/u/" +
        user, id, {
            headers: {
                "x-access-token": jwt
            }
        }
    );

    deletebyId = (id, jwt) => Vue.axios.delete(
        'https://backend304cem7363.herokuapp.com/private/Raffle/Id/' + id, {
            headers: {
                "x-access-token": jwt
            }
        }
    );

}

export default new RaffleAPI();