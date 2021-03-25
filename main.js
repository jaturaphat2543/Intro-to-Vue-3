const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image:'./assets/images/socks_green.jpg',
            url:'https://www.vuemastery.com/',
            details: ['50% cotton', '30% wool', '20% polyester'],
            inventory:100,
            onSale: true,
            description:'Hi nice to meet you'
        }
    }
})
