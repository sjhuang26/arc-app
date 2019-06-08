export function createServerStore() {
  return {
    tutors: {
      invalidated: true,
      data: [],
      update(data) {
        console.log('update');
        this.invalidated = false;
        this.data = data;
      },
      invalidate() {
        this.invalidated = true;
      }
    }
  };
}
