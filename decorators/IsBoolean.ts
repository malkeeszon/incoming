export default function IsBoolean() {
  // eslint-disable-next-line func-names
  return function (target: any, key: string): void {
    let value: string = target[key];
    const setter = (next: string) => {
      if (next !== 'true' && next !== 'false') {
        // eslint-disable-next-line no-console
        console.log(`\x1b[91mIncoming object validation Error\x1b[39m property: "${key}" - should be Boolean`);
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
