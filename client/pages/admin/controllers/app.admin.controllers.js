MainCtrl.$inject = ['$scope', '$translate', '$location'];


class Hwarang {
    constructor(age) {
        this.age = age;
    }
    getAge() {
        return this.age;
    }
    print() {
        console.log(this.getAge());
    }
    print2() {
        console.log(this.getAge());
    }
}

export default function MainCtrl($scope, $location) {
    // staticLoader.get('route1.json', function (status, data) {
    //     $scope.contents = data;
    // });
    var hwarang = new Hwarang(1000);
    hwarang.print();
    hwarang.print2();
}
