export default function IsEmail() {
  return function (target: any, key: string): void {
    let value: string = target[key];
    const setter = (next: string) => {
      // eslint-disable-next-line no-useless-escape
      const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!regex.test(next)) {
        // eslint-disable-next-line no-console
        console.log(`Validation Error on property: "${key}" - recevied: "${next}" - expected: "example@email.com"`);
      } else {
        value = next;
      }
    };

    Object.defineProperty(target, key, {
      get: () => value,
      set: setter,
      enumerable: true,
    });
  };
}
