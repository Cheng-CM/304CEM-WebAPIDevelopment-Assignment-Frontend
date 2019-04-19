import Vue from 'vue';
class ItemAPI {
    findItemById = (param) => Vue.axios.get('http://localhost:3000/public/item/id/' + param);

}

export default new ItemAPI();