Report.$inject = ['$resource', 'appResources'];

export default  function Report($resource, appResources){

    return $resource(appResources.SEARCH_REPORT + '/:id', {
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
