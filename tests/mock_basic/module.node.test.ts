import { describe, expect, test, vi, beforeAll } from 'vitest';

import { callMethodIf } from './call-method-if';


describe('Call method if', () => {
    beforeAll(() => {
        vi.mock('./blackbox');
    })
    test('returns "called: true" if condition is true', async () => {
        const blackbox = await import('./blackbox');
        blackbox.blackbox = (await vi.importActual('./blackbox')).blackbox;
        const result = callMethodIf(true);
        expect(result).toEqual({ called: true });
    });

    test('returns mocked blackbox return object', async () => {
        const blackbox = await import('./blackbox');
        blackbox.blackbox = vi.fn().mockReturnValue({ mock: true });
        const result = callMethodIf(false);
        expect(result).toEqual({ mock: true });
    });
});
