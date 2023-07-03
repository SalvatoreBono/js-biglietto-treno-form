const ageUser = document.getElementById("age_input");
const user = document.getElementById("user");
const kmUser = document.getElementById("km_input");
const btnLogin = document.getElementById("generator");

btnLogin.addEventListener("click", function () {
    const age = ageUser.value;

    const km = kmUser.value;

    const num = Math.floor(Math.random() * 90000) + 10000;

    const NameSurname = user.value;

    document.getElementById("name-surname").innerHTML = NameSurname;

    document.getElementById("num").innerHTML = num;

    const price = (km * 0.21);

    const priceDecimal = price.toFixed(2);


    //Calcolo cupon
    const cuponYoung = (price * 20) / 100;
    //Calcolo prezzo - cupon
    const youngPriceResult = price - cuponYoung;
    //Impostare i decimali
    const youngPriceDecimal = youngPriceResult.toFixed(2);

    const cuponOld = (price * 40) / 100;
    const oldPriceResult = price - cuponOld;
    const oldPriceDecimal = oldPriceResult.toFixed(2);

    if (age == 1) {
        document.getElementById("ticket").innerHTML = youngPriceDecimal;
        console.log(("ticket").innerHTML = youngPriceDecimal)
    } else if (age == 3) {
        document.getElementById("ticket").innerHTML = oldPriceDecimal;
        console.log(("ticket").innerHTML = oldPriceDecimal)
    } else if (age == 2) {
        document.getElementById("ticket").innerHTML = priceDecimal;
        console.log(("ticket").innerHTML = priceDecimal)
    }
})



