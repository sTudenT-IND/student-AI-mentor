function summarizeText() {
    let text = document.getElementById("inputText").value;

    if (!text) {
        alert("Please enter some text!");
        return;
    }

    // Simple rule-based summarizer (for demo in viva)
    let sentences = text.split(".");

    let summary = [];

    for (let i = 0; i < sentences.length; i++) {
        let sentence = sentences[i].trim();

        if (sentence.length > 20 && summary.length < 5) {
            summary.push("• " + sentence);
        }
    }

    document.getElementById("output").innerHTML =
        summary.join("<br>");
}
