import Store from 'store';

export default {
    request: async ({ options, url, path, route }: any) => {
        const user = Store.get('auth.user');

        if (user && user.token) {
            options.headers['Authorization'] = `Bearer ${user.token}`;
        }

        return { options, url, path, route };
    },
    response: async ({ response }: any) => {
        const user = response.data;

        if (user) {
            Store.set('auth.user', user);
        }

        return { response };
    }
}