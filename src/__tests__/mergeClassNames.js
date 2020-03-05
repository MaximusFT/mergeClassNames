import mergeClassNames from '../../dist/mergeClassNames';

describe('mergeClassNames', () => {
  it('given nothing', () => {
    const result = mergeClassNames();

    expect(result).toBe('');
  });

  it('given an array of strings with single class names', () => {
    const result = mergeClassNames('a', 'b', 'c', 'c');

    expect(result).toBe('a b c');
  });

  it('given an array of strings with multiple class names', () => {
    const result = mergeClassNames('a b', 'c d', 'e f');

    expect(result).toBe('a b c d e f');
  });

  it('given an array of arrays of strings with single and cross class names', () => {
    const result = mergeClassNames(['a', 'b', 'c'], ['c', 'd']);

    expect(result).toBe('a b c d');
  });

  it('given an array of arrays of strings with multiple and cross class names', () => {
    const result = mergeClassNames(['a b', 'c d', 'a f h'], ['e f', 'g h']);

    expect(result).toBe('a b c d f h e g');
  });

  it('mixed... include null, undefined or other non-string arguments in the result', () => {
    const result = mergeClassNames(
      'a',
      false,
      'b',
      'c',
      null,
      ['d', null],
      () => {},
      'e',
      undefined,
      'c',
      ['f', false],
    );

    expect(result).toBe('a b c d e f');
  });
});
