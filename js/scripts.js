// Insert Year to bottom of page
document.querySelector('#year').innerHTML = new Date().getFullYear();

// // Nudge Marketing on Amenities Page

// const amenitiesPage = document.querySelector("#amenities")

// if (amenitiesPage) {
    
// }  

// Get data from API for floorplans

if($('div').is('.floor-plans')){const availableUnitsAPI = "https://api.rentcafe.com/rentcafeapi.aspx?requestType=apartmentavailability&apiToken=58a9b29d1bad4a258773d50c97089cb5&propertyId=658499"
const currentAvailableUnits = document.querySelector("#floor-plans");

currentAvailableUnits.addEventListener('click', fetchAndDisplayUnits);

async function fetchAndDisplayUnits() {
    let response = await fetch(availableUnitsAPI)
    let data = await response.json()
        //console.log(data);
        
        .then(function (data) {
            return data.forEach((element, index) => {
                $('#accordian').append(`<div class="card"><div class="card-header" id="heading${index}"><h5 class="mb-0"><button class="btn btn-link" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">${element.FloorplanName}</button></h5></div><div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#accordion"><div class="card-body"><ul><li>Rent - ${element.MinimumRent}</li><li>Square Footage - ${element.SQFT}</li><li>Beds and Bath - ${element.Beds} and ${element.Baths}</li></ul></div></div></div>`);
            }); 
        })   
}


$(currentAvailableUnits).click(function () {
    $(currentAvailableUnits).attr("disabled", true);
    currentAvailableUnits.style.cursor = "not-allowed";
    return true;
});}

