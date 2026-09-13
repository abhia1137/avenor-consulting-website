const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const year = document.querySelector("#year");
const industryPanel = document.querySelector("#industry-panel");
const enquiryOutput = document.querySelector("#enquiry-output");
const contactForm = document.querySelector("#contact-form");

const industries = {
  banking: {
    title: "Banking",
    body: "Core banking, Temenos/T24, payments, integrations, reporting, testing and modernization for banks balancing digital change with operational resilience."
  },
  financial: {
    title: "Financial Services",
    body: "Platform integration, analytics, application modernization and quality engineering for financial services teams managing complex technology estates."
  },
  insurance: {
    title: "Insurance",
    body: "Modernize policy, claims, data and reporting ecosystems through disciplined integration, testing and enterprise delivery practices."
  },
  retail: {
    title: "Retail",
    body: "Connect commerce, payments, data and operating platforms so retail teams can improve customer experience and back-office visibility."
  }
};

year.textContent = new Date().getFullYear();

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll(".tab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
    button.classList.add("active");
    const industry = industries[button.dataset.tab];
    industryPanel.innerHTML = `<h3>${industry.title}</h3><p>${industry.body}</p>`;
  });
});

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelectorAll(".tech-cloud span").forEach((tech) => {
      tech.classList.toggle("hidden", filter !== "all" && tech.dataset.category !== filter);
    });
  });
});

function buildEnquiry() {
  const data = new FormData(contactForm);
  return [
    "New consulting enquiry",
    `Name: ${data.get("name") || ""}`,
    `Email: ${data.get("email") || ""}`,
    `Area: ${data.get("interest") || ""}`,
    "",
    data.get("message") || ""
  ].join("\n");
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  enquiryOutput.textContent = buildEnquiry();
});

document.querySelector("#copy-enquiry").addEventListener("click", async () => {
  const text = enquiryOutput.textContent || buildEnquiry();
  await navigator.clipboard.writeText(text);
  enquiryOutput.textContent = `${text}\n\nCopied to clipboard.`;
});

document.querySelector("#download-enquiry").addEventListener("click", () => {
  const text = enquiryOutput.textContent || buildEnquiry();
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "avenor-consulting-enquiry.txt";
  link.click();
  URL.revokeObjectURL(url);
});
