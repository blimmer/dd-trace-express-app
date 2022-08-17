const app = require('../app')

describe('test', () => {
  for(let i=0; i < 10; i++) {
    it(`test ${i}`, async () => {
      expect(app).not.toBeUndefined();
    })
  }
})
