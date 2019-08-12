const storeObj = {
    "1": {
        name: 'heleo',
        dfsaf: 'fsafd',
        imgUrl: 'http://www.baidu.com/lgo'
    }
}


module.exports = {
    getStoreDetail(storeId) {
        return new Promise(function(resolve, reject){
            resolve(storeObj[storeId])
        });

        //return axios.get('/store/detail?store_id=' + storeId)

    }
}