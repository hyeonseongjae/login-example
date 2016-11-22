Notice.$inject = ['$resource', 'appResources'];

export default  function Notice($resource, appResources){

    return $resource(appResources.SEARCH_NOTICE + '/:id', {
        id: '@id'
    }, {
        update:{
            method: 'PUT'
        },
        post:{
            method: 'POST'
        },

        query:{
            isArray: false
        }
    })
}
