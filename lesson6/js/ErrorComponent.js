Vue.component('my_error', {
    props: ['error'],
    template: `
        <div class="error" v-show="error">
            <h2>Ошибка</h2>
            </cart-item>
        </div>
    `
});