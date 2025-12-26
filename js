function generatePrediction() {
    const result = (Math.random() * 59 + 1).toFixed(2);
    document.getElementById("prediction-result").textContent =
        `🚀 Nouvelle prédiction Lucky Jet : ${result}x`;
}

