import { SupportModule } from './support.module';

describe('SupportModule', () => {
  let supportModule: SupportModule;

  beforeEach(() => {
    supportModule = new SupportModule();
  });

  it('should create an instance', () => {
    expect(supportModule).toBeTruthy();
  });
});
