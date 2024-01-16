import { mount } from '@vue/test-utils';
import {describe,test, expect} from 'vitest';


import Primero from '../../../components/ejercicios/Primero.vue';

describe("Primero", () => {
    test('should load correctly', () => {
        const wrapper = mount(Primero);

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.text()).toBe('Primero');
    });
})

