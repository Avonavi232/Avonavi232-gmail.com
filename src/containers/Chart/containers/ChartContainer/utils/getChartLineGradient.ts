import { getCanvasGradient } from './getCanvasGradient';

export const getGradientEstimatedPrice = (ctx: CanvasRenderingContext2D) =>
  getCanvasGradient(ctx, [
    { offset: 0.5, color: 'rgba(4, 104, 255, 0.24)' },
    { offset: 1, color: 'rgba(4, 104, 255, 0)' },
  ]);

export const getGradientOfferPrice = (ctx: CanvasRenderingContext2D) =>
  getCanvasGradient(ctx, [
    { offset: 0.5, color: 'rgba(255, 31, 52, 0.24)' },
    { offset: 1, color: 'rgba(255, 31, 52, 0)' },
  ]);
