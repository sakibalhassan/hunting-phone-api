const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones, isShowAll);
}


displayPhones = (phones, isShowAll) => {

    // step:1 set id
    const phoneContainer = document.getElementById('phone-container');
    // clear phone container card before adding new card
    phoneContainer.textContent = '';

    // 12 phone er beshi hoile

    const showAllContainer = document.getElementById('show-all-container');

    if (phones.length > 12 && !isShowAll) {
        showAllContainer.classList.remove('hidden');
    }
    else {
        showAllContainer.classList.add('hidden');
    }

    console.log('is show all', isShowAll)

    // display only 12
    if (!isShowAll) {
        phones = phones.slice(0, 12);
    }

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
         <div class="card-actions justify-center">
        <button onclick="handleShowDeail('${phone.slug}')" class="btn btn-primary">SHOW DETAILS</button>
         </div>
        `;

        // step 4: append child
        phoneContainer.appendChild(phoneCard);
    });
    // hide loading spinner
    toggleLoadingSpiner(false);
}

// 
const handleShowDeail = async (id) => {
    console.log(id)
    // load single phone data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json();
    console.log(data)
}


// handle search
const handleSearch = (isShowAll) => {
    toggleLoadingSpiner(true);
    const searchFeild = document.getElementById('search-feild');
    const searchText = searchFeild.value;
    console.log(searchText);
    loadPhone(searchText, isShowAll);
}


// another handler

const searchHandler = () => {
    toggleLoadingSpiner(true);
    const searchFeild = document.getElementById('input-feild');
    const searchText = searchFeild.value;
    loadPhone(searchText);
}


const toggleLoadingSpiner = (isLoading) => {
    const loadingSpiner = document.getElementById('spainer-loading');
    if (isLoading) {
        loadingSpiner.classList.remove('hidden')
    }
    else {
        loadingSpiner.classList.add('hidden');
    }
}

// handle Show All
const handleShowAll = () => {
    handleSearch(true);
}


// loadPhone();