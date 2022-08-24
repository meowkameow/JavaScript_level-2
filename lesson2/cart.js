class Cart {
    constructor() {
        this.cartItems = [];
        this._fetchItems();
    }

    _fetchItems(){
        let items = [
            { id: 1 , count: 1, title: 'Лежак', price: 150, image: 'https://xistore.by/upload/resize/element/46130/073/0dc37a3e318d0adb0d5203d07a4cb14f_482_482_40@x2.jpg'},
            { id: 2 , count: 1, title: 'Массажер', price: 100 , image: 'https://cdn1.ozone.ru/s3/multimedia-r/6155967831.jpg'},
            { id: 3 , count: 1, title: 'Когтеточка', price: 350, image: 'https://pushok-spb.ru/uploads/products/450/1543779387_75513670.jpg' },
            { id: 4 , count: 1, title: 'Миска', price: 50 , image: 'https://pethouse.ua/assets/images/prods/trixie/0000065861.jpg'},
        ];
        for( let item of items){
            let cartItem = new CartItem(item.id, item.title, item.image, item.price, item.count);
            this.cartItems.push(cartItem);
        }
    }

    deleteItem(id) {
        this.cartItems = this.cartItems.filter(c => c.id !== id);
    }

    addItemCount(id) {
        let countedItems = this.cartItems.filter(c => c.id === id);
        countedItems[0].count = countedItems[0].count + 1;
    }

    addItem(item){
        this.cartItems.push(item);
    }

    clearCart() {
        this.cartItems = [];
    }

    cartSum() {
        let sum = 0;
        for (let iteratedItem of this.cartItems){
            sum = sum + iteratedItem.price;
        }
        return sum ;
    }

    render() {
        const cart = document.querySelector('.cart');
        for (let cartItem of this.cartItems) {
            cart.insertAdjacentHTML('beforeend', cartItem.render());
        }
    }
}

class CartItem {
    constructor(id, name, image, price, count) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
        this.count = count;
    }

    render() {
        return `<div class = 'cart-item'>
            <h3>${this.id} - ${this.name}</h3>
            <img src="${this.image}" alt="Some img">
            <h3>${this.count}</h3>
            <p>${this.price} $</p>
        </div>`
    }
}


let cart = new Cart();

//cart.render();

