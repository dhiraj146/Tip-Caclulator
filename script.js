    let customernameinput = document.getElementById("customernameinput");
    let customtipinput = document.getElementById("customtipinput");
    let itemnameinput = document.getElementById("itemnameinput");
    let itemqtyinput = document.getElementById("itemqtyinput");
    let itempriceinput = document.getElementById("itempriceinput");
    let billamt = document.getElementById("billamt");
    let totalamount = document.getElementById("totalamount");
    let sgst= document.getElementById("sgst");
    let cgst=document.getElementById("cgst");
    const changeName = () => {
        let nameval = document.getElementById("nameval");
        if (customernameinput.value == "") {
            nameval.innerHTML = "-";
        }
        else {
            nameval.innerHTML = customernameinput.value;
            calculatetotal()
        }
    }
    const tippercenttoinput = (tipval) => {
        customtipinput.value = tipval;
        changetip();
    }

    const changetip = () => {
        let tip = document.getElementById("tipval");
        if (customtipinput.value == "") {
            tip.innerHTML = "0 %";
        }
        else {
            tip.innerHTML = customtipinput.value + "%";
            // calculatetotal();
            calculatetotal()

        }
    }


    const itemarray = [];

    const addItem = () => {
        let itemname = itemnameinput.value;
        let itemqty = itemqtyinput.value;
        let itemprice = itempriceinput.value;

        if (itemname == "" || itemqty == "" || itemprice == "") {
            alert("Please fill all the fields");
        }
        else {
            let item = {
                name: itemname,
                qty: itemqty,
                price: itemprice
            }

            itemarray.push(item);
            console.log(itemarray);
            itemnameinput.value = "";
            itemqtyinput.value = "";
            itempriceinput.value = "";
            showitemarrayinbill();
        }
    }

    const showitemarrayinbill = () => {
        let allitems = document.getElementById("allitems");
        allitems.innerHTML = "";
        for (let i = 0; i < itemarray.length; i++) {
            let item = itemarray[i];
            let itemdiv = document.createElement("div");
            itemdiv.classList.add("s1");
            itemdiv.innerHTML = `
<p>${item.qty}</p>
<p>${item.name}</p>
<p>${item.price}</p>
`
            allitems.appendChild(itemdiv);
        }
        calculatetotal()

    }

    const calculatetotal = () => {
        let total = 0;
        for (let i = 0; i < itemarray.length; i++) {
            let item = itemarray[i];
            total += item.qty * item.price;
        }
        sgst.innerHTML="Rs "+total*9/100;
        cgst.innerHTML="Rs "+total*9/100;
        billamt.innerHTML = "Rs " + total;
        totalamount.innerHTML  = "RS "+ (total + (total*customtipinput.value/100) + (total*9/100)+(total*9/100))
    }