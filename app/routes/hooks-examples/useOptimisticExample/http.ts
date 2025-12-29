export function mockWait<T>(value: T, duration: number) {
  return new Promise<T>((resolve) => {
    setTimeout(() => resolve(value), duration);
  });
}
