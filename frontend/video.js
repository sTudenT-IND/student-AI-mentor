function generateNotes() {
    let link = document.getElementById("videoLink").value;

    if (!link) {
        alert("Please enter a YouTube link!");
        return;
    }

    // MOCK NOTES (demo for viva)
    let notes = [
        "• Introduction of the topic explained in the video",
        "• Key concepts and definitions discussed",
        "• Step-by-step explanation of the process",
        "• Real-life examples and applications",
        "• Summary and conclusion of the lecture"
    ];

    document.getElementById("notesBox").innerHTML = notes.join("<br>");
}
