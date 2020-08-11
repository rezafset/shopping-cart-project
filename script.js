function productChange(product , isIncrease){
    const productCount = document.getElementById(product+'Count');
    const productNumber = parseInt(productCount.value);
    let productNewCount = 0;
    if(isIncrease == true){
       productNewCount = productNumber + 1;
    }
    else if(isIncrease == false && productNumber > 0){
       productNewCount = productNumber - 1;
    }
    productCount.value = productNewCount;
    let productTotal = 0;
    if(product == 'phone'){
       productTotal = productNewCount * 1219;
    }
    else if(product == 'case'){
       productTotal = productNewCount * 59;
    }
    document.getElementById(product+'Total').innerHTML = '$' + productTotal;
    calculation();
}

function calculation(){
    const phoneCount = getProductInput('phone');
    const caseCount = getProductInput('case');

    const subTotal = caseCount * 59 + phoneCount * 1219;
    document.getElementById("subTotal").innerText = '$' + subTotal;

    const text = Math.round(subTotal * 0.1);
    document.getElementById("text").innerText = '$' + text;

    const grandTotal = subTotal + text;
    document.getElementById("grandTotal").innerText = '$' + grandTotal;
}

function getProductInput(product){
    const productInput = document.getElementById(product+'Count');
    const productCount = parseInt(productInput.value);
    return productCount;
}
