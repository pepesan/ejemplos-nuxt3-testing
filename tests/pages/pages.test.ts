import { fileURLToPath } from 'node:url';
import { describe, test } from 'vitest';
import { expect } from '@playwright/test';
import { setup, createPage } from '@nuxt/test-utils';
import {screen} from "@testing-library/vue";

describe('Landing page', async () => {
    // await setup({
    //     server: true,
    //     browser: true,
    // });

    test.each([
        { slug: '/products' },
    ])('with slug $slug has button', async ({ slug }) => {
        // const router = useRouter()
        // const page = await createPage(slug);
        // await router.push({
        //     path: '/products/1',
        // })
        // const text = screen.getByText('Product description:')

    });
});
