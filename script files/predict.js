function calculateAQI() {
    const pm25 = parseFloat(document.getElementById('pm25').value) || 0;
    const no2 = parseFloat(document.getElementById('no2').value) || 0;
    const co = parseFloat(document.getElementById('co').value) || 0;
    const so2 = parseFloat(document.getElementById('so2').value) || 0;
    const o3 = parseFloat(document.getElementById('o3').value) || 0;

    // Example AQI formula
    const aqi = ((pm25 * 0.4) + (no2 * 0.25) + (co * 0.15) + (so2 * 0.1) + (o3 * 0.1)).toFixed(2);

    const resultElement = document.getElementById('aqiValue');
    const resultText = document.getElementById('aqiText');
    
    resultElement.innerText = aqi;

    // Assign color and category based on AQI value
    let category;
    
    if (aqi < 50) {
        resultElement.style.color = '#00E400'; // Good (Green)
        category = 'Good';
    } else if (aqi < 100) {
        resultElement.style.color = '#FFFF00'; // Moderate (Yellow)
        category = 'Moderate';
    } else if (aqi < 150) {
        resultElement.style.color = '#FF7E00'; // Unhealthy for Sensitive Groups (Orange)
        category = 'Unhealthy for Sensitive Groups';
    } else if (aqi < 200) {
        resultElement.style.color = '#FF0000'; // Unhealthy (Red)
        category = 'Unhealthy';
    } else if (aqi < 300) {
        resultElement.style.color = '#8F3F97'; // Very Unhealthy (Purple)
        category = 'Very Unhealthy';
    } else {
        resultElement.style.color = '#7E0023'; // Hazardous (Maroon)
        category = 'Hazardous';
    }

    resultText.innerText = `${category}`;

    // Show result section with animation
    const resultDiv = document.getElementById('result');
    resultDiv.classList.add('visible');
}
