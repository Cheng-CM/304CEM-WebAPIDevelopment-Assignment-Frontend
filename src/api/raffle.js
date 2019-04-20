import Vue from 'vue';
class RaffleAPI {
    findActive = () => Vue.axios.get('http://localhost:3000/public/Raffle/active');

    create = (params, jwt) => Vue.axios.post(
        'http://localhost:3000/private/Raffle',
        params, {
            headers: {
                "x-access-token": jwt
            }
        }
    );

}

export default new RaffleAPI();