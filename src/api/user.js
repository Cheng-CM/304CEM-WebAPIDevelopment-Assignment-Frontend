/* eslint-disable */
import Vue from 'vue';
var url = 'https://backend304cem7363.herokuapp.com';
class AccountAPI {

    login = (params) => Vue.axios.post( 'https://backend304cem7363.herokuapp.com/public/login', params);

    register = (params) => Vue.axios.post( 'https://backend304cem7363.herokuapp.com/public/register', params);

    getUserInfo = (userId) => Vue.axios.get( 'https://backend304cem7363.herokuapp.com/public/User/Id/' + userId);

    getUserInfoByName = (name) => Vue.axios.get( 'https://backend304cem7363.herokuapp.com/public/User/Id/' + name);

    getCookies = () => Vue.axios.get( 'https://backend304cem7363.herokuapp.com/public/cookies/');

    destoryCookies = (params) => Vue.axios.delete( 'https://backend304cem7363.herokuapp.com/public/cookies', params);
}

export default new AccountAPI();