import { ArrayToStringPipe } from './array-to-string.pipe';

describe('ArrayToStringPipe', () => {
  it('check transform method', () => {
    const pipe = new ArrayToStringPipe();
    const arr = ['1', '2', '3'];
    const str = ' 1 2 3';
    expect(pipe.transform(arr)).toBe(str);
  });
});
