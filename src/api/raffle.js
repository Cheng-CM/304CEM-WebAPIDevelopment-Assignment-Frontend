import Vue from 'vue';
class RaffleAPI {

    findActive = () => Vue.axios.get('http://localhost:3000/public/Raffle/active');
    findAll = () => Vue.axios.get('http://localhost:3000/public/Raffle/all');
    findRaffleById = (param) => Vue.axios.get('http://localhost:3000/public/Raffle/Id/' + param);



    findJoined = (params, jwt) => Vue.axios.get(
        'http://localhost:3000/private/joined/' +
        params, {
            headers: {
                "x-access-token": jwt
            }
        }
    );


    findCreatedBy = (params, jwt) => Vue.axios.get(
        'http://localhost:3000/private/CreatedBy/' +
        params, {
            headers: {
                "x-access-token": jwt
            }
        }
    );


    create = (params, jwt) => Vue.axios.post(
        'http://localhost:3000/private/Raffle',
        params, {
            headers: {
                "x-access-token": jwt
            }
        }
    );


    updateById = (id, params, jwt) => Vue.axios.put(
        'http://localhost:3000/private/Raffle/Id/' + id,
        params, {
            headers: {
                "x-access-token": jwt
            }
        }
    );


    updateStatus = (id, status, jwt) => Vue.axios.put(
        'http://localhost:3000/private/Raffle/Id/' + id + "/status/" +
        status, {
            headers: {
                "x-access-token": jwt
            }
        }
    );

    join = (id, user, jwt) => Vue.axios.put(
        'http://localhost:3000/private/Raffle/Id/' + id + "/u/" +
        user, {
            headers: {
                "x-access-token": jwt
            }
        }
    );

    deletebyId = (id, jwt) => Vue.axios.delete(
        'http://localhost:3000/private/Raffle/Id/' + id, {
            headers: {
                "x-access-token": jwt
            }
        }
    );

}

export default new RaffleAPI();