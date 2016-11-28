Pass.$inject = ['$resource', 'appResources'];

export default function Pass($resource, appResources) {

    return $resource(appResources.PASS + '/:id', {
        id: '@id'
    }, {
        query: {
            isArray: false
        }
    })


}

