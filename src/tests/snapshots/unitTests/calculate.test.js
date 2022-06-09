import calculate from '../../../logic/calculate';

describe('calculate function works correctely', () => {
  test('calculate returns object', () => {
    const fnc = calculate({}, 'AC');
    expect(fnc).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
});
