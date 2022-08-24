class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts()
    }

    sumProducts(){
        let sum = 0;
        for( let product of this.allProducts){
            sum = sum + product.price;
        }
        return sum;
    }

    _fetchProducts(){
        this.goods = [
            { title: 'Лежак', price: 150, image: 'https://xistore.by/upload/resize/element/46130/073/0dc37a3e318d0adb0d5203d07a4cb14f_482_482_40@x2.jpg'},
            { title: 'Массажер', price: 100 , image: 'https://cdn1.ozone.ru/s3/multimedia-r/6155967831.jpg'},
            { title: 'Когтеточка', price: 350, image: 'https://pushok-spb.ru/uploads/products/450/1543779387_75513670.jpg' },
            { title: 'Миска', price: 50 , image: 'https://pethouse.ua/assets/images/prods/trixie/0000065861.jpg'},
        ];
    }
    render(){
        const block = document.querySelector(this.container);
        for (let product of this.goods){
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}


class ProductItem {
    constructor(product){
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = product.image;
    }
    render(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

let list = new ProductsList();
list.render();
