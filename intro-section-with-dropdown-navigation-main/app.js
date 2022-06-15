const featureBtn = document.querySelector('#features')
const companyBtn = document.querySelector('#company')

const toggleDropdownFeatures = () => {
    document.getElementById("dropdown-features").classList.toggle("show");
}
const toggleDropdownCompany = () => {
    document.getElementById("dropdown-company").classList.toggle("show");
}

const toggleFeature = featureBtn.addEventListener('click', toggleDropdownFeatures)
const toggleCompany = companyBtn.addEventListener('click', toggleDropdownCompany)