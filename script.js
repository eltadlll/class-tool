// Show the grade calculator by default
document.getElementById('grade-calculator').classList.add('active');

// Show a particular section when clicking on the nav button
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Grade Calculator Logic
let grades = [];
let weights = [];

document.getElementById('add-grade').addEventListener('click', () => {
    const gradeInput = document.querySelector('.grade-input').value;
    const weightInput = document.querySelector('.weight-input').value;

    if (gradeInput && weightInput) {
        grades.push(parseFloat(gradeInput));
        weights.push(parseFloat(weightInput));
        
        document.querySelector('.grade-input').value = '';
        document.querySelector('.weight-input').value = '';
    } else {
        alert('Please enter both grade and weight');
    }
});

document.getElementById('calculate').addEventListener('click', () => {
    let totalWeight = 0;
    let weightedSum = 0;

    for (let i = 0; i < grades.length; i++) {
        weightedSum += grades[i] * (weights[i] / 100);
        totalWeight += weights[i];
    }

    const result = weightedSum / (totalWeight / 100);
    document.getElementById('result').innerText = `Final Grade: ${result.toFixed(2)}`;
});

// Notes Logic
document.getElementById('save-note').addEventListener('click', () => {
    const noteText = document.getElementById('note-text').value;
    
    if (noteText) {
        const noteItem = document.createElement('li');
        noteItem.innerText = noteText;
        document.getElementById('saved-notes').appendChild(noteItem);
        document.getElementById('note-text').value = '';
    } else {
        alert('Please enter a note');
    }
});

// Ask AI (Simulated AI Response)
document.getElementById('ask-ai-btn').addEventListener('click', () => {
    const aiText = document.getElementById('ai-text').value;

    if (aiText) {
        // Simulating a response from the AI
        document.getElementById('ai-result').innerText = `AI Summary: ${aiText.slice(0, 50)}...`;
        document.getElementById('ai-text').value = '';
    } else {
        alert('Please enter a question or note');
    }
});
