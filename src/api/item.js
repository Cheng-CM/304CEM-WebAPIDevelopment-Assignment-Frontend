import Vue from 'vue';
class ItemAPI {
    findItemById = (param) => Vue.axios.get('http://localhost:3000/public/item/id/' + param);

    findItemByCreated = (param) => Vue.axios.get('http://localhost:3000/public/Item/Created/' + param);

}

export default new ItemAPI();