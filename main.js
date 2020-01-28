const pies = [
    {
        name: "Dutch Apple Pie",
        price: 1000, 
        isWarm: true,
        isOrganic: true,
        crust: "extra flaky",
        iceCream: "Vanilla Bean",
        isAvailable: true,
        imageUrl: "https://www.spendwithpennies.com/wp-content/uploads/2018/09/SpendWithPennies-Apple-Pie-Recipe-31-500x500.jpg",
        drinkPairing: "whiskey",
        instructor: "Zoe",
    },
    {
        name: "Regular Apple Pie",
        price: 5000, 
        isWarm: true,
        isOrganic: true,
        crust: "underbaked",
        iceCream: "Vegan Chocolate",
        isAvailable: false,
        imageUrl: "https://celebratingsweets.com/wp-content/uploads/2015/09/No-Churn-Apple-Pie-Ice-Cream-2-1.jpg",
        drinkPairing: "wine",
        instructor: "Mary",
    },
    {
        name: "Pizza Pie",
        price: 2.5,
        isWarm: true,
        isOrganic: false,
        crust: "yeah",
        iceCream: "None",
        isAvailable: true,
        imageUrl: "https://www.thegraciouspantry.com/wp-content/uploads/2016/11/clean-eating-pizza-pie-h-1-.jpg",
        drinkPairing: "High Life",
        instructor: "Luke",
    },
    {
        name: "Berry Pie",
        price: 1, 
        isWarm: true,
        isOrganic: true,
        crust: "yummy",
        iceCream: "Berry",
        isAvailable: false,
        imageUrl: "http://assets.wholefoodsmarket.com/recipes/2557/2048/1536/2557-1.jpg",
        drinkPairing: "wine",
        instructor: "Zoe",
    },
    {
        name: "Chocolate Pie",
        price: 1, 
        isWarm: false,
        isOrganic: true,
        crust: "graham cracker",
        iceCream: "Mint",
        isAvailable: true,
        imageUrl: "https://i2.wp.com/www.sugarspunrun.com/wp-content/uploads/2017/09/Chocolate-Pie-Recipe-1-of-1-9-500x443.jpg",
        drinkPairing: "Gin",
        instructor: "Mary",
    },
    {
        name: "Pi",
        price: 3.14, 
        isWarm: false,
        isOrganic: true,
        crust: "Crumb",
        iceCream: "Moose Tracks",
        isAvailable: true,
        imageUrl: "https://cdn.cnn.com/cnnnext/dam/assets/150313105721-pi-day-graphic-super-169.jpg",
        drinkPairing: "Milk",
        instructor: "Luke",
    },
    {
        name: "Strawberry Rhubarb Pie",
        price: 5.50, 
        isWarm: true,
        isOrganic: false,
        crust: "Lattice",
        iceCream: "Caramel",
        isAvailable: true,
        imageUrl: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2016/05/how-to-make-strawberry-rhubarb-pie.jpg",
        drinkPairing: "Coffee",
        instructor: "Anca",
    },
    {
        name: "Key Lime Pie",
        price: 6, 
        isWarm: false,
        isOrganic: true,
        crust: "None",
        iceCream: "None",
        isAvailable: true,
        imageUrl: "https://www.browneyedbaker.com/wp-content/uploads/2012/05/key-lime-pie-2-1200.jpg",
        drinkPairing: "Port",
        instructor: "Anca",
    },
];

console.log("pies", pies);

//  3 cards to a row
//big images
//display all information in the pie objects

const pieBuilder = () => {
    let domString = '';
    for (i = 0; i < pies.length; i++) {
        if (pies[i].isAvailable === true) {
            domString += '<div class="pie">';
            domString += `<img src=${pies[i].imageUrl} alt=${pies[i].name} />`;
            domString += `<h2 class="pieItem">${pies[i].name}</h2>`;
            domString += `<h5 class="pieItem">\$${pies[i].price}</h5>`;
            if (pies[i].isOrganic === true) {
                domString += `<p class="pieItem">Organic!</p>`;
            };
            if (pies[i].isWarm === true) {
                domString += `<p class="pieItem">Served warm.</p>`;
            } else {
                domString+= `<p class="pieItem">Served cold.</p>`;
            };
            if (pies[i].iceCream != "None") {
                domString += `<p class="pieItem">And with ${pies[i].iceCream}  icecream!</p>`;
            };
            if (pies[i].crust != "None") {
                domString += `<p class="pieItem">Displaying a yummy ${pies[i].crust} crust, of course!</p>`;
            };
            domString += `<p class="pieItem">${pies[i].instructor} recommends you pair it with ${pies[i].drinkPairing}.</p>`;
            domString += '</div>';
        };
    };
    printToDom = (elementID, domString) => {
        const selectedDiv = document.getElementById(elementID);
        selectedDiv.innerHTML = domString;
    };
    printToDom('piesList', domString);
};

pieBuilder();