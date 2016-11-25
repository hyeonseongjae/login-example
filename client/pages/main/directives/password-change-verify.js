export default function passwordChangeVerify() {
    return {
        require: "ngModel",
        scope: {
            passwordChangeVerify: '='
        },
        link: function(scope, element, attrs, ctrl) {
            scope.$watch(function() {
                var combined;

                if (scope.passwordChangeVerify) {
                    combined = scope.passwordChangeVerify + '_' + ctrl.$viewValue;
                }

                return combined;
            }, function(value) {
                if (value) {
                    ctrl.$parsers.unshift(function(viewValue) {

                        var origin = scope.passwordChangeVerify;
                        console.log(viewValue+"  "+origin);
                        if (origin !== viewValue) {
                            ctrl.$setValidity("passwordVerify", false);
                            return undefined;
                        } else {
                            ctrl.$setValidity("passwordVerify", true);
                            return viewValue;
                        }
                    });
                }
            });
        }
    };
};