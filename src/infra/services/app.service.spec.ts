import { AppService } from './app.service';

describe('testing app service', () => {
  let appService: AppService;

  beforeEach(() => {
    appService = new AppService();
  });

  describe('get hello', () => {
    it("should return 'Hello World!'", () => {
      expect(appService.getHello()).toBe('Hello World!');
    });
  });
});
