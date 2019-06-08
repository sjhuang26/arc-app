export function createUiStore() {
  return {
    foobar: 1,
    increase() {
      ++this.foobar;
    }
  };
}
