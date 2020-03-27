//tslint:disable: no-any
import { getGradientEstimatedPrice, getGradientOfferPrice } from '../getChartLineGradient';
import { getCanvasGradient } from '../getCanvasGradient';

jest.mock('../getCanvasGradient');

describe('getChartLineGradient', () => {
  afterEach(jest.clearAllMocks);

  it('getGradientEstimatedPrice', () => {
    const ctx: any = 'someCtx';
    getGradientEstimatedPrice(ctx);

    expect(getCanvasGradient).toHaveBeenCalledWith(ctx, [
      { offset: 0.5, color: 'rgba(4, 104, 255, 0.24)' },
      { offset: 1, color: 'rgba(4, 104, 255, 0)' },
    ]);
  });

  it('getGradientOfferPrice', () => {
    const ctx: any = 'someCtx';
    getGradientOfferPrice(ctx);

    expect(getCanvasGradient).toHaveBeenCalledWith(ctx, [
      { offset: 0.5, color: 'rgba(255, 31, 52, 0.24)' },
      { offset: 1, color: 'rgba(255, 31, 52, 0)' },
    ]);
  });
});
