const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            url:'https://www.vuemastery.com/',
            inStock: true,
            inventory:100,
            onSale:true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' , sizes: 's m l xl' },
                { id: 2235, color: 'blue' , sizes: 's m l xl'},
                { }
              ]
        }
    }
})
