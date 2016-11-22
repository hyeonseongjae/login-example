UserService.$inject = ['$resource', 'appResources'];

export default function UserService($resource, appResources) {

    return $resource(appResources.USER_INFO + '/:id', {
        id: '@id'
    }, {
        query: {
            isArray: false
        }
    })


}

