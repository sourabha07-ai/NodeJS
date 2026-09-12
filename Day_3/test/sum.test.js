import { expect , test } from "vitest";
import { sum } from './sum.js';

test('add 1 + 2 to equal to 3',()=>{
        expect(sum(1,2)).toBe(3);
})