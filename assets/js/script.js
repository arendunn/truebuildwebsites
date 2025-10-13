document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
      threshold: 0.2,  // 10% visible
      rootMargin: "0px 0px -50px 0px"  // trigger slightly before fully visible
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          appearOnScroll.unobserve(entry.target); // animate once only
        }
      });
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });

function goToServices() {
    const services = document.getElementById("services");
    if (services) {
        services.scrollIntoView({ behavior: "smooth" });
    }
}

function goToContactPage() {
    window.location.href = "contact.html";
}

function goToHomePage() {
    window.location.href = "index.html";
}

function goToServicesPage() {
    window.location.href = "services.html";
}


function goToWorkPage() {
    window.location.href = "work.html";
}

document.addEventListener("DOMContentLoaded", () => {
    let lastScroll = 0;
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll) {
            navbar.style.transform = "translateY(-100%)"; // Hide
        } else {
            navbar.style.transform = "translateY(0)"; // Show
        }

        lastScroll = currentScroll;
    });
});