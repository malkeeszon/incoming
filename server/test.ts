function makePropertyMapper<T>(prototype: any, key: string, mapper: (value: any) => T) {
  const values = new Map<any, T>();
  Object.defineProperty(prototype, key, {
    set(firstValue: any) {
      Object.defineProperty(this, key, {
        get() {
          return values.get(this);
        },
        set(value: any) {
          values.set(this, mapper(value));
        },
        enumerable: true,
      });
      this[key] = firstValue;
    },
    enumerable: true,
    configurable: true,
  });
}

function exampleDecorator(multiplier: number) {
  return function (target: any, key: string) {
    makePropertyMapper(target, key, (value: number) => value * multiplier);
  };
}

class Example {
  @exampleDecorator(3)
  myNumber: number;

  @exampleDecorator(3)
  withInitializer: number;

  constructor(withInitializer: number) {
    this.withInitializer = withInitializer;
  }
}

const example = new Example(2);

console.log(example); // 9
console.log(Object.values(example)); // true
