

    const products = [
        { title: 'Лежак', price: 150, image: 'https://xistore.by/upload/resize/element/46130/073/0dc37a3e318d0adb0d5203d07a4cb14f_482_482_40@x2.jpg'},
        { title: 'Массажер', price: 100 , image: 'https://cdn1.ozone.ru/s3/multimedia-r/6155967831.jpg'},
        { title: 'Когтеточка', price: 350, image: 'https://pushok-spb.ru/uploads/products/450/1543779387_75513670.jpg' },
        { title: 'Миска', price: 50 , image: 'https://pethouse.ua/assets/images/prods/trixie/0000065861.jpg'},
    ];
    const renderProduct = (image = 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1445594623_195_b.jpg' ,title, price) => {
        return `<div class="product-item">
                <img src="${image}" alt="img">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy_btn">Купить</button>
                </div>`;
    };
    const renderPage = list => {
        const productsList = list.map(item => renderProduct(item.image, item.title, item.price));
        document.querySelector('.products').innerHTML = productsList.join('');
    };

    renderPage(products);