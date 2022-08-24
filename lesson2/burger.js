
    class Burger{
    constructor(name, price, col) {
        this.name = name;
        this.price = price;
        this.col = col;
        this.filling = {};
        this.extraFillings = [];
    }
    sumBurgerPrice(){
        let extraFillingSum = 0;
        for(let extraFilling of this.extraFillings){
            extraFillingSum = extraFillingSum + extraFilling.price;
        }
        let sum = this.price + this.filling.price + extraFillingSum;
        return sum;
    }
    sumBurgerCol(){
        let extraFillingSum = 0;
        for(let extraFilling of this.extraFillings){
            extraFillingSum = extraFillingSum + extraFilling.col;
        }
        let sum = this.col + this.filling.col + extraFillingSum;
        return sum;
    }
    choseFilling(filing){
        this.filling = filing;
    }
    addExtraFilling(extraFiling){
        this.extraFillings.push(extraFiling);
    }
    }

    class Filing{
    constructor(name, price, col) {
        this.name = name;
        this.price = price;
        this.col = col;
    }
    }

    let smallBurger = new Burger('small', 50, 20);
    let largeBurger = new Burger('large', 100, 40);

    let cheeseFilling = new Filing('cheese', 10, 20);
    let saladFilling = new Filing('salad', 20, 5);
    let potatoFilling = new Filing('potato', 15, 10);

    let seasoningFilingExtra = new Filing('seasoning', 15, 0);
    let mayonnaiseFilingExtra = new Filing('mayonnaise', 20, 5);



    largeBurger.choseFilling(saladFilling);
    largeBurger.addExtraFilling(seasoningFilingExtra);
    largeBurger.addExtraFilling(mayonnaiseFilingExtra);
    console.dir(largeBurger);
    console.log(largeBurger.sumBurgerPrice());
    console.log(largeBurger.sumBurgerCol());