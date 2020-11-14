var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function makePropertyMapper(prototype, key, mapper) {
    var values = new Map();
    Object.defineProperty(prototype, key, {
        set: function (firstValue) {
            Object.defineProperty(this, key, {
                get: function () {
                    return values.get(this);
                },
                set: function (value) {
                    values.set(this, mapper(value));
                },
                enumerable: true
            });
            this[key] = firstValue;
        },
        enumerable: true,
        configurable: true
    });
}
function exampleDecorator(multiplier) {
    return function (target, key) {
        makePropertyMapper(target, key, function (value) { return value * multiplier; });
    };
}
var Example = /** @class */ (function () {
    function Example(withInitializer) {
        this.withInitializer = withInitializer;
    }
    __decorate([
        exampleDecorator(3)
    ], Example.prototype, "myNumber");
    __decorate([
        exampleDecorator(3)
    ], Example.prototype, "withInitializer");
    return Example;
}());
var example = new Example(2);
console.log(example); // 9
console.log(Object.values(example)); // true
