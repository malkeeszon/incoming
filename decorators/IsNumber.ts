export default function IsNumber() {
  // eslint-disable-next-line func-names
  return function (target: any, key: string): void {
    let value: string = target[key];
    const setter = (next: string) => {
      if (typeof next !== 'number') {
        // eslint-disable-next-line no-console
        console.log(`\x1b[91mIncoming object validation Error\x1b[39m on property: "${key}" - should be of type Number`);
      } else {
        value = next;
      }
    };
    Object.defineProperty(target, key, {
      get: () => value,
      set: setter,
    });
  };
}
