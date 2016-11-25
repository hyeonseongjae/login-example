AuthPhone.$inject = ['$resource', 'appResources'];

export default function AuthPhone($resource, appResources) {
    return $resource(appResources.AUTH_PHONE, {}, {})
}