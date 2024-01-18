// composables/useApi.js
import { ref } from 'vue';
import axios from 'axios';

export const useApi = (url) => {
    const data = ref(null);
    const error = ref(null);
    const loading = ref(false);

    const fetchData = async () => {
        loading.value = true;
        try {
            const response = await axios.get(url);
            data.value = response.data;
        } catch (error) {
            error.value = error.message;
        } finally {
            loading.value = false;
        }
    };

    return { data, error, loading, fetchData };
};
