class Cart {
    constructor() {
        this.cartItems = [];
        this._fetchItems();
    }

    _fetchItems(){
        let jsonObjPromise = fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
        jsonObjPromise
            .then(data =>
            {
                for( let item of data.contents){
                    let cartItem = new CartItem(item.id_product, item.product_name, item.image, item.price, item.quantity);
                    this.cartItems.push(cartItem);
                }
                this.render();
            });




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
    constructor(id, name, image = 'https://via.placeholder.com/200x150', price, count) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
        this.count = count;
    }

    render() {
        return `<div class = 'cart-item'>
            <img src="${this.image}" alt="Some img">
            <h3>${this.id} - ${this.name}</h3>
            <h3> количество: ${this.count}</h3>
            <p>${this.price} $</p>
        </div>`
    }
}


let cart = new Cart();

//cart.render();