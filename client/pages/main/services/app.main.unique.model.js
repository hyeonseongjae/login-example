Unique.$inject = ['$resource', 'appResources'];

export default function Unique($resource, appResources) {

    return $resource(appResources.UNIQUE_CHECK + '/:id', {
        id: '@id'
    }, {
        query: {
            isArray: false
        }
    })


}

