//tslint:disable: no-any
import {
  yAxisTicksCb,
  tooltipTitleCb,
  tooltipLabelCb,
  afterTickToLabelConversion,
  verticalGridLineColorCb,
  mergeDataWithBaseDataset,
} from '../chartConfiguration';

describe('chartConfiguration', () => {
  afterEach(jest.clearAllMocks);

  describe('yAxisTicksCb', () => {
    /**
     * Коллбэк преобразует подписи по оси Y из переданных value в читаемые цены
     * */
    it('если value = 0 (нулевая подпись) - вернется пустая строка, чтоб подпись не отображалась', () => {
      const value = 0;
      const res = yAxisTicksCb(value);

      expect(res).toBe('');
    });

    it('если value > 0 вернется форматированная цена с знаком рубля в конце', () => {
      const value = 4500000;
      const res = yAxisTicksCb(value);

      expect(res).toBe('4 500 000 ₽');
    });
  });

  describe('tooltipTitleCb', () => {
    /**
     * Коллбэк формирует заголовок тултипа, который появляется при наведении на точку графика
     * Из полученного таймштампа должен сформироваться заголовок вида "dd mm yyyy"
     * */
    it('Возвращает заголовок тултипа, сформированный из переданной даты', () => {
      const date = '2020-3-27';
      const tooltipItems = [{ label: date }];
      const res = tooltipTitleCb(tooltipItems);
      const expected = '27 мар 2020';

      expect(res).toBe(expected);
    });

    it('Если непредвиденная ошибка, код не упадет', () => {
      expect(tooltipTitleCb).not.toThrowError();
      // @ts-ignore
      expect(tooltipTitleCb()).toBe('');
    });
  });

  describe('tooltipLabelCb', () => {
    /**
     * Коллбэк возвращает строку в тултипе. Напр: "С продвижением: 123 Р"
     * */

    it('Возвращает строку формата "что: сколько ₽" по исходным данным', () => {
      const tooltipItem = { datasetIndex: 0, value: '15 000 000' };
      const data = {
        datasets: [{ label: 'С продвижением' }],
      };

      const res = tooltipLabelCb(tooltipItem, data);

      expect(res).toBe('С продвижением: 15 000 000 ₽');
    });

    it('если произойдет непредвиденная ошибка, код не упадет', () => {
      expect(tooltipLabelCb).not.toThrowError();
      // @ts-ignore
      expect(tooltipLabelCb()).toBe('');
    });
  });

  describe('afterTickToLabelConversion', () => {
    /**
     * Коллбэк фильтрует метки на шкале Х, оставляя только по метке на начало каждого месяца.
     * В label остальных коллбэк кладет пустую строку, чтоб они не были видны
     * этот коллбэк мутирует переданное значение (коллбэк идет в либу chart.js)
     * */

    it('парсит ticks, оставляя только лейблы для начал месяцев', () => {
      const ticks = [
        //этот лейбл затрется в пустую строку, т.к не соответствует началу месяца
        { value: '2020-3-5', label: '2020-3-5' },

        //этот лейбл станет равным 'апр'
        { value: '2020-4-1', label: '2020-4-1' },

        //остальные затрутся пустой строкой
        { value: '2020-4-7', label: '2020-4-7' },
        { value: '2020-5-15', label: '2020-5-15' },
      ];
      const scale = { ticks };

      const expectedTicks = [
        { value: '2020-3-5', label: '' },
        { value: '2020-4-1', label: 'апр' },
        { value: '2020-4-7', label: '' },
        { value: '2020-5-15', label: '' },
      ];

      afterTickToLabelConversion(scale);

      expect(scale.ticks).toEqual(expectedTicks);
    });

    it('если происходит непредвиденная ошибка, код не упадет', () => {
      const scale = { ticks: 'someString' }; //ticks - не массив. будет ошибка

      expect(() => afterTickToLabelConversion(scale as any)).not.toThrowError();
    });
  });

  describe('verticalGridLineColorCb', () => {
    /**
     * Коллбэк возвращает цвет вертикального деления графика в зависимости от наличия подписи
     * Если подпись есть - вернет цвет. если нет - transparent
     * */
    it('Вернет цвет, если подпись есть', () => {
      const res = verticalGridLineColorCb({ tick: { label: 'someLabel' } });

      expect(res).toBe('rgba(21, 34, 66, 0.1)');
    });

    it('Вернет transparent, если подписи нет', () => {
      const res = verticalGridLineColorCb({ tick: { label: '' } });

      expect(res).toBe('transparent');
    });
  });

  describe('mergeDataWithBaseDataset', () => {
    it('мерджит переданный options в dataset конфига', () => {
      const indexInBaseDataSet = 0;
      const options = {
        a: 1,
        b: 2,
      };

      const res = mergeDataWithBaseDataset(indexInBaseDataSet, options);

      expect(res).toEqual(expect.objectContaining(options));
    });
  });
});
