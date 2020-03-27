//tslint:disable: no-any
import { chartHeight } from '../../../../contants';
import { getCanvasGradient } from '../getCanvasGradient';

const gradient = {
  addColorStop: jest.fn(),
};
const ctx: any = {
  createLinearGradient: jest.fn(() => gradient),
};

const stopColors = [
  { offset: 123, color: 'red' },
  { offset: 123, color: 'red' },
];

describe('getCanvasGradient', () => {
  /**
   * Утилита создает градиет для переданного канвас контекста и добавляет в него переданные точки
   * */
  it('Градиент создается из переданного ctx', () => {
    getCanvasGradient(ctx, stopColors);

    expect(ctx.createLinearGradient).toHaveBeenCalledWith(0, 0, 0, chartHeight);
  });

  it('В созданный градиент добавляются stopColors', () => {
    getCanvasGradient(ctx, stopColors);

    expect(gradient.addColorStop).toHaveBeenNthCalledWith(1, stopColors[0].offset, stopColors[0].color);
    expect(gradient.addColorStop).toHaveBeenNthCalledWith(2, stopColors[1].offset, stopColors[1].color);
  });
});
