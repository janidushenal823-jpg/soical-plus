const form = document.getElementById("contactForm");
const whatsappBtn = document.getElementById("whatsappBtn");

function getFormData() {
    return {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        message: document.getElementById("message").value.trim()
    };
}

function buildMailto({ name, email, message }) {
    const to = "janidushenal835@gmail.com";
    const subject = `New inquiry from ${name || "Social Plus website"}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function buildWhatsAppLink({ name, email, message }) {
    const phone = "94772385652";
    const text = `Hello Social Plus,%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0A%0AMessage:%0A${encodeURIComponent(message)}`;
    return `https://wa.me/${phone}?text=${text}`;
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    const data = getFormData();
    if (!data.name || !data.email || !data.message) {
        alert("කරුණාකර Name, Email, Message fill කරන්න.");
        return;
    }
    window.location.href = buildMailto(data);
});

whatsappBtn.addEventListener("click", function(e){
    e.preventDefault();
    const data = getFormData();
    if (!data.name || !data.email || !data.message) {
        alert("කරුණාකර Name, Email, Message fill කරන්න.");
        return;
    }
    window.open(buildWhatsAppLink(data), "_blank", "noopener");
});

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.background = "rgba(0,0,0,0.9)";
    } else{
        navbar.style.background = "rgba(0,0,0,0.5)";
    }
});
