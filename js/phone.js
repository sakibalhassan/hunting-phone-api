const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones);
}


displayPhones = phones => {

    // step:1 set id
    const phoneContainer = document.getElementById('phone-container');
    // clear phone container card before adding new card
    phoneContainer.textContent = '';

    phones.forEach(phone => {
        console.log(phone);
        // step:2 create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;
        // step:3 inner html
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}"
        alt="Shoes" /></figure>
         <div class="card-body">
         <h2 class="card-title">${phone.phone_name}</h2>
         <p>If a dog chews shoes whose shoes does he choose?</p>
         <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
         </div>
        `;

        // step 4: append child
        phoneContainer.appendChild(phoneCard);
    })
}


// handle search
const handleSearch = () => {
    const searchFeild = document.getElementById('search-feild');
    const searchText = searchFeild.value;
    console.log(searchText);
    loadPhone(searchText);
}

// loadPhone();