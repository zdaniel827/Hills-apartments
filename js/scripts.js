// Insert Year to bottom of page
document.querySelector('#year').innerHTML = new Date().getFullYear();

// // Nudge Marketing on Amenities Page

// const amenitiesPage = document.querySelector("#amenities")

// if (amenitiesPage) {
    
// }  

// Get data from API for floorplans

const availableUnitsAPI = "https://api.rentcafe.com/rentcafeapi.aspx?requestType=apartmentavailability&apiToken=58a9b29d1bad4a258773d50c97089cb5&propertyId=658499"
const currentAvailableUnits = document.querySelector("#available-units");
const floorPlans = document.querySelector("#floor-plans");


floorPlans.addEventListener('click', fetchAndDisplayUnits);


async function fetchAndDisplayUnits() {
    let response = await fetch(availableUnitsAPI)
    let data = await response.json()
        //console.log(data);
        
        .then(function (data) {
            return data.forEach(element => {
                let div = createNode('div');
                div.innerHTML = `${element.FloorplanName}`;
                div.classList.add("card-header");
                append(currentAvailableUnits, div);
            }); 
        })
        .catch((error) => console.log(error));    
}

function createNode(element) {
    return document.createElement(element);
}

  function append(parent, el) {
    return parent.appendChild(el);
}


