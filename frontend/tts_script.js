// 🎤 TEXT TO SPEECH
async function speakText() {
    let text = document.getElementById("noteText").value;

    if (!text) {
        alert("Enter text first!");
        return;
    }

    try {
        let response = await fetch(
            "http://127.0.0.1:8000/tts?text=" + encodeURIComponent(text),
            { method: "POST" }
        );

        console.log("Status:", response.status);  // 👈 DEBUG

        if (!response.ok) {
            let errorText = await response.text();
            console.log("Server error:", errorText);
            throw new Error("Server error");
        }

        let blob = await response.blob();

        console.log("Blob size:", blob.size); // 👈 DEBUG

        if (blob.size === 0) {
            throw new Error("Empty audio file");
        }

        playAudio(blob);

    } catch (error) {
        console.error("Error:", error);
        alert("Failed to generate audio");
    }
}



// 📄 PDF TO SPEECH
async function uploadPDF() {
    let fileInput = document.getElementById("pdfFile");
    let file = fileInput.files[0];

    if (!file) {
        alert("Please upload a PDF!");
        return;
    }

    let formData = new FormData();
    formData.append("file", file);

    try {
        let response = await fetch("http://127.0.0.1:8000/pdf-to-speech", {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error("Server error");
        }

        let blob = await response.blob();
        playAudio(blob);

    } catch (error) {
        console.error("Error:", error);
        alert("Failed to process PDF");
    }
}


// 🔊 PLAY AUDIO FUNCTION (MOST IMPORTANT)
function playAudio(blob) {
    let audioUrl = URL.createObjectURL(blob);

    let audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.src = audioUrl;

    // Force reload + play
    audioPlayer.load();

    audioPlayer.play().catch(error => {
        console.log("Autoplay blocked. Click play manually.");
    });
}


// 🔘 TOGGLE FUNCTIONS
function showPDF() {
    document.getElementById("pdfBox").classList.remove("hidden");
    document.getElementById("textBox").classList.add("hidden");
}

function showText() {
    document.getElementById("textBox").classList.remove("hidden");
    document.getElementById("pdfBox").classList.add("hidden");
}
