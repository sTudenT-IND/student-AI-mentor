let quizData = [];

function generateQuiz() {
    const topic = document.getElementById("topic").value;

    if (!topic) {
        alert("Please enter a topic!");
        return;
    }

    // MOCK QUIZ DATA (replace with backend later)
    quizData = [
        {
            question: `What is ${topic}?`,
            options: ["Concept", "Programming Language", "Tool", "All of these"],
            answer: "All of these"
        },
        {
            question: `Why is ${topic} important?`,
            options: ["Automation", "Fun", "Learning", "All of these"],
            answer: "All of these"
        }
    ];

    displayQuiz();
}

function displayQuiz() {
    const container = document.getElementById("quiz-container");
    container.innerHTML = "";

    quizData.forEach((q, index) => {
        const div = document.createElement("div");
        div.classList.add("question-box");

        div.innerHTML = `
            <h3>Q${index + 1}. ${q.question}</h3>
            ${q.options.map(opt => `
                <label class="option">
                    <input type="radio" name="q${index}" value="${opt}">
                    ${opt}
                </label>
            `).join("")}
        `;

        container.appendChild(div);
    });

    document.getElementById("submitBtn").style.display = "block";
}

function submitQuiz() {
    let score = 0;

    quizData.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);

        if (selected && selected.value === q.answer) {
            score++;
        }
    });

    document.getElementById("result").innerText =
        `🎯 You scored ${score} out of ${quizData.length}`;
}
