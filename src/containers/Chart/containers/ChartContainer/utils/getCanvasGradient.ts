import { chartHeight } from '../../../contants';

export const getCanvasGradient = (
  ctx: CanvasRenderingContext2D,
  stopColors: Array<{ offset: number; color: string }>,
) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, chartHeight);

  stopColors.forEach(({ offset, color }) => gradient.addColorStop(offset, color));

  return gradient;
};
