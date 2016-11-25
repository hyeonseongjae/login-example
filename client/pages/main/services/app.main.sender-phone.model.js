SenderPhone.$inject = ['$resource', 'appResources'];

export default function SenderPhone($resource, appResources) {
    return $resource(appResources.SENDER_PHONE, {}, {})
}