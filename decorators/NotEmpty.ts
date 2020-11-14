export default function NotEmpty() {
  // eslint-disable-next-line func-names
  return function (target: any, key: string): void {
    let value: string = target[key];
    const setter = (next: string) => {
      if (!next.length) {
        // eslint-disable-next-line no-console
        console.log(`\x1b[91mIncoming object validation Error:\x1b[39m roperty: "${key}" - should have length > 0`);
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