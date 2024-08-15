document.getElementById('crop-select').addEventListener('change', function() {
    const cropInfo = document.getElementById('crop-info');
    const cropName = document.getElementById('crop-name');
    const cropDescription = document.getElementById('crop-description');
    
    const crop = this.value;

    if (crop === "none") {
        cropInfo.classList.add('hidden');
        return;
    }

    const crops = {
        wheat: {
            name: "Wheat",
            description: "Wheat is a cereal grain, originally from the Levant region of the Near East and Ethiopian Highlands."
        },
        rice: {
            name: "Rice",
            description: "Rice is the seed of the grass species Oryza sativa (Asian rice) or Oryza glaberrima (African rice)."
        },
        corn: {
            name: "Corn",
            description: "Corn, also known as maize, is a cereal grain first domesticated by indigenous peoples in southern Mexico."
        }
    };

    cropName.textContent = crops[crop].name;
    cropDescription.textContent = crops[crop].description;
    cropInfo.classList.remove('hidden');
});
