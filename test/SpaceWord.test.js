import { expect, test, describe } from 'vitest';
import { getRandomInt, rectIntersect, circleIntersect, timeToString } from '../utils.js';

describe('Vérification des fonctions logiques', () => {
    
    test('getRandomInt', () => {
        const val = getRandomInt(-42, 42);
        expect(val).toBeLessThan(43);
        expect(getRandomInt(42, 42)).toBe(42);
    });

    test('rectIntersect', () => {
        expect(rectIntersect(1,1,2,1,4,1,1,2)).toBe(false);
        expect(rectIntersect(1,1,5,2,4,1,1,2)).toBe(true);
    });

    test('circleIntersect', () => {
        expect(circleIntersect(3,2,1,6,1,1.5)).toBe(false);
        expect(circleIntersect(3,2,1,3,-2,4)).toBe(true);
    });

    test('timeToString', () => {
        expect(timeToString(123456789)).toBe("17:36:78");
        expect(timeToString("toto")).toBe("NaN:NaN:NaN");
    });
});