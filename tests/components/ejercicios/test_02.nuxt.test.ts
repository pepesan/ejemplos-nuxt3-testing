import { mount } from '@vue/test-utils';
import {describe,test, expect} from 'vitest';
import Segundo from '../../../components/ejercicios/Segundo.vue';

describe("Primero", () => {
    test('should load correctly', () => {
        let foo = "Hola";
        const wrapper = mount(Segundo, {
            props: { foo },
        });

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.text()).toContain('Hola');
    });
})
