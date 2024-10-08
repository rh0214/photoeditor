const fileInput = document.querySelector(".file-input"),
filterOptions = document.querySelectorAll(".filter button");
filterName = document.querySelector(".filter-info .name");
filterValue = document.querySelector(".filter-info .value");
filterSlider = document.querySelector(".slider input");
previewImg = document.querySelector(".preview-img img");
chooseImgBtn = document.querySelector(".choose-img");

const loadImage = () => {
    let file = fileInput.files[0];
    if (!file) return;
    previewImg.src = URL.createObjectURL(file);
}

filterOptions.forEach(option => {
    option.addEventListener("click", () => {
        document.querySelector(".filter .active").classList.remove( "active" );
        option.classList.add("active");
        filterName.innerText = option.innerText;
    });
});

const updateFilter = () => {
    filterValue.innerText =  `${filterSlider.value}%`;
}
fileInput.addEventListener("change",loadImage);
filterSlider.addEventListener("input", updateFilter);
chooseImgBtn.addEventListener("click", () => fileInput.click());