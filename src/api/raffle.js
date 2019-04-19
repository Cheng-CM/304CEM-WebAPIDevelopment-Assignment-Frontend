import Vue from 'vue';
class RaffleAPI {
    findActive = () => Vue.axios.get('http://localhost:3000/public/Raffle/active');

}

export default new RaffleAPI();