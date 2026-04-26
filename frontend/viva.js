let questions = [
    {
        q: "What is Artificial Intelligence?",
        a: "simulation of human intelligence"
    },
    {
        q: "What is Machine Learning?",
        a: "learning from data"
    },
    {
        q: "What is Python?",
        a: "programming language"
    }
];

let current = 0;
let score = 0;

function startViva() {
    document.getElementById("viva-box").style.display = "block";
    showQuestion();
}

function showQuestion() {
    if (current < questions.length) {
        document.getElementById("question").innerText =
            "Q" + (current + 1) + ": " + questions[current].q;

        document.getElementById("answer").value = "";
        document.getElementById("feedback").innerText = "";
    } else {
        document.getElementById("viva-box").style.display = "none";
        document.getElementById("score").innerText =
            `🎯 Final Score: ${score} / ${questions.length}`;
    }
}

function submitAnswer() {
    let userAns = document.getElementById("answer").value.toLowerCase();
    let correctAns = questions[current].a.toLowerCase();

    if (userAns.includes(correctAns)) {
        document.getElementById("feedback").innerText = "✅ Correct Answer!";
        score++;
    } else {
        document.getElementById("feedback").innerText =
            "❌ Wrong! Correct: " + questions[current].a;
    }

    current++;

    setTimeout(showQuestion, 1000);
}
