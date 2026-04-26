function loadProgress() {

    // MOCK DATA (replace with backend later)
    let data = {
        quizzes: 5,
        averageScore: 78,
        improvement: 20,
        weakTopics: ["DSA", "Machine Learning"],
        strongTopics: ["Python", "HTML"]
    };

    let box = document.getElementById("progressBox");

    box.innerHTML = `
        <h2>📈 Your Stats</h2>

        <p>📝 Quizzes Attempted: ${data.quizzes}</p>
        <p>🎯 Average Score: ${data.averageScore}%</p>
        <p>📊 Improvement: ${data.improvement}%</p>

        <h3>📌 Weak Areas</h3>
        <ul>${data.weakTopics.map(t => `<li>${t}</li>`).join("")}</ul>

        <h3>💪 Strong Areas</h3>
        <ul>${data.strongTopics.map(t => `<li>${t}</li>`).join("")}</ul>

        <h3>📊 Performance Graph</h3>

        <p>Quiz 1</p>
        <div class="bar"><div class="fill" style="width:60%"></div></div>

        <p>Quiz 2</p>
        <div class="bar"><div class="fill" style="width:70%"></div></div>

        <p>Quiz 3</p>
        <div class="bar"><div class="fill" style="width:80%"></div></div>

        <p>Quiz 4</p>
        <div class="bar"><div class="fill" style="width:90%"></div></div>

        <p>Quiz 5</p>
        <div class="bar"><div class="fill" style="width:95%"></div></div>
    `;
}
