/* eslint-disable */
import Vue from 'vue';
var url = 'https://backend304cem7363.herokuapp.com';
class AccountAPI {

    login = (params) => Vue.axios.post( url + '/public/login', params);

    register = (params) => Vue.axios.post( url + '/public/register', params);

    getUserInfo = (userId) => Vue.axios.get( url + '/public/User/Id/' + userId);

    getUserInfoByName = (name) => Vue.axios.get( url + '/public/User/Id/' + name);

    getCookies = () => Vue.axios.get( url + '/public/cookies/');

    destoryCookies = (params) => Vue.axios.delete( url + '/public/cookies', params);
}

export default new AccountAPI();