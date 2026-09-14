(() => {
  "use strict";
  const nav = document.querySelector("#site-nav");
  const navToggle = document.querySelector(".nav-toggle");
  const triggers = [...document.querySelectorAll(".nav-trigger")];
  const mobile = window.matchMedia("(max-width: 900px)");
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  function closeMenus() {
    triggers.forEach((button) => {
      button.setAttribute("aria-expanded", "false");
      document.getElementById(button.getAttribute("aria-controls")).hidden =
        true;
    });
  }
  function closeNavigation() {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
    closeMenus();
  }
  navToggle.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") !== "true";
    nav.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("nav-open", open);
    if (!open) closeMenus();
  });
  triggers.forEach((button) => {
    button.addEventListener("click", () => {
      const open = button.getAttribute("aria-expanded") !== "true";
      closeMenus();
      button.setAttribute("aria-expanded", String(open));
      document.getElementById(button.getAttribute("aria-controls")).hidden =
        !open;
    });
    button.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        closeMenus();
        button.setAttribute("aria-expanded", "true");
        const panel = document.getElementById(
          button.getAttribute("aria-controls"),
        );
        panel.hidden = false;
        panel.querySelector("a").focus();
      }
    });
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeNavigation();
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) closeNavigation();
  });
  document.addEventListener("focusin", (event) => {
    if (!event.target.closest(".site-header")) closeMenus();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const activeTrigger = triggers.find(
        (button) => button.getAttribute("aria-expanded") === "true",
      );
      const open = navToggle.getAttribute("aria-expanded") === "true";
      if (activeTrigger) {
        closeMenus();
        activeTrigger.focus();
      } else if (open) {
        closeNavigation();
        navToggle.focus();
      }
    }
    if (
      event.key === "Tab" &&
      nav.classList.contains("open") &&
      mobile.matches
    ) {
      const focusable = [
        navToggle,
        ...nav.querySelectorAll("a, button"),
      ].filter((element) => element.getClientRects().length);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
  mobile.addEventListener("change", closeNavigation);

  const services = {
    "core-banking": {
      eyebrow: "THE FOUNDATION FOR BETTER BANKING",
      title: "A stronger core.<br>A more agile bank.",
      body: "Move your core banking forward with a considered approach to Temenos T24, platform integration, migration readiness, and release assurance.",
      items: [
        "Core banking transformation",
        "Temenos / T24 implementation planning",
        "Migration, integration & testing",
      ],
      link: "Explore core banking",
      image: "banking",
      alt: "Architecture in a financial district",
    },
    "enterprise-integration": {
      eyebrow: "CONNECT THE BUSINESS, END TO END",
      title: "Better connected.<br>Built to work together.",
      body: "Bring your applications, data, and customers closer with MuleSoft Anypoint Platform, reusable APIs, and integration architecture designed around your business.",
      items: [
        "MuleSoft & Anypoint Platform",
        "API strategy, design & governance",
        "Banking, SaaS & legacy integration",
      ],
      link: "Explore enterprise integration",
      image: "team",
      alt: "Colleagues planning a connected technology approach",
    },
    payments: {
      eyebrow: "CONFIDENCE IN EVERY TRANSACTION",
      title: "Keep payments<br>moving forward.",
      body: "Connect payment platforms, channels, and reconciliation with clear transaction flows, resilient integration, and a deliberate approach to testing.",
      items: [
        "Payment gateways & orchestration",
        "Cards & transaction processing",
        "Reconciliation & release assurance",
      ],
      link: "Explore payments",
      image: "banking",
      alt: "Commercial buildings in a financial district",
    },
    "data-analytics": {
      eyebrow: "TURN INFORMATION INTO DIRECTION",
      title: "Trusted data.<br>Clearer decisions.",
      body: "Create a consistent view of your business with dependable data foundations, Power BI, Microsoft BI, and SAS analytics that connect reporting to real decisions.",
      items: [
        "Data engineering & governance",
        "Power BI & enterprise reporting",
        "Microsoft BI, SAS & analytics",
      ],
      link: "Explore data & analytics",
      image: "data",
      alt: "Server racks supporting data infrastructure",
    },
    "cloud-modernization": {
      eyebrow: "EVOLVE WITHOUT LOSING YOUR FOUNDATIONS",
      title: "Modernize with<br>your future in mind.",
      body: "Map a practical path from Oracle, IBM, mainframe, and legacy applications to maintainable cloud architectures, with continuity considered at every step.",
      items: [
        "Cloud strategy & migration planning",
        "IBM, Oracle & mainframe modernization",
        "Platform engineering & DevOps",
      ],
      link: "Explore modernization",
      image: "architecture",
      alt: "Modern glass buildings viewed from below",
    },
    "quality-engineering": {
      eyebrow: "CONFIDENCE BUILT INTO EVERY RELEASE",
      title: "Make quality<br>part of the process.",
      body: "Bring testing closer to architecture and delivery. Align functional coverage, automation, and performance validation with the risks that matter to your business.",
      items: [
        "Quality strategy & test automation",
        "Integration & regression testing",
        "Performance & release readiness",
      ],
      link: "Explore quality engineering",
      image: "team",
      alt: "Professionals reviewing work together",
    },
    "application-development": {
      eyebrow: "SOFTWARE SHAPED AROUND YOUR BUSINESS",
      title: "Build what your<br>business needs next.",
      body: "Translate real operating needs into enterprise applications, portals, and workflows that fit your technology landscape and the people who use them.",
      items: [
        "Enterprise applications & portals",
        "Microsoft, Java & web technologies",
        "Workflow & application integration",
      ],
      link: "Explore application development",
      image: "data",
      alt: "Enterprise computing infrastructure",
    },
  };
  const serviceTabs = [...document.querySelectorAll(".service-tab")];
  const panel = document.querySelector("#service-panel");
  function activateService(button, focus = false) {
    serviceTabs.forEach((tab) => {
      const selected = tab === button;
      tab.classList.toggle("active", selected);
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    const key = button.dataset.service;
    const data = services[key];
    panel.setAttribute("aria-labelledby", button.id);
    panel.innerHTML = `<div class="service-copy"><span class="eyebrow">${data.eyebrow}</span><h3>${data.title}</h3><p>${data.body}</p><ul class="check-list">${data.items.map((item) => `<li>${item}</li>`).join("")}</ul><a class="text-link" href="/services/${key}/">${data.link} <span aria-hidden="true">↗</span></a></div><div class="service-image"><img src="/assets/${data.image}.jpg" alt="${data.alt}" width="1400" height="933"><span>CONNECTED THINKING.<br>LASTING FOUNDATIONS.</span></div>`;
    if (focus) button.focus();
  }
  serviceTabs.forEach((button, index) => {
    button.addEventListener("click", () => activateService(button));
    button.addEventListener("keydown", (event) => {
      let next = index;
      if (["ArrowDown", "ArrowRight"].includes(event.key))
        next = (index + 1) % serviceTabs.length;
      else if (["ArrowUp", "ArrowLeft"].includes(event.key))
        next = (index - 1 + serviceTabs.length) % serviceTabs.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = serviceTabs.length - 1;
      else return;
      event.preventDefault();
      activateService(serviceTabs[next], true);
    });
  });
  const tabList = document.querySelector(".service-tabs");
  function tabOrientation() {
    if (tabList)
      tabList.setAttribute(
        "aria-orientation",
        mobile.matches ? "horizontal" : "vertical",
      );
  }
  tabOrientation();
  mobile.addEventListener("change", tabOrientation);

  const form = document.querySelector("#contact-form");
  if (!form) return;
  const result = document.querySelector("#enquiry-result");
  const output = document.querySelector("#enquiry-output");
  const status = document.querySelector("#form-status");
  let brief = "";
  function createBrief() {
    const data = new FormData(form);
    return [
      "AVENOR CONSULTING — PROJECT BRIEF",
      "",
      `Name: ${String(data.get("name")).trim()}`,
      `Email: ${String(data.get("email")).trim()}`,
      `Company: ${String(data.get("company")).trim() || "Not provided"}`,
      `Area of interest: ${data.get("interest") || "To be discussed"}`,
      "",
      "THE CHALLENGE",
      String(data.get("message")).trim(),
    ].join("\n");
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    brief = createBrief();
    output.textContent = brief;
    result.hidden = false;
    status.textContent =
      "Your brief is ready to copy or download. No email has been sent.";
  });
  form.addEventListener("input", () => {
    if (!result.hidden) {
      brief = createBrief();
      output.textContent = brief;
      status.textContent =
        "Your brief has been updated. No email has been sent.";
    }
  });
  document
    .querySelector("#copy-enquiry")
    .addEventListener("click", async () => {
      if (!form.reportValidity()) return;
      brief = createBrief();
      try {
        await navigator.clipboard.writeText(brief);
        status.textContent =
          "Project brief copied. You can paste it into your own email or document.";
      } catch {
        status.textContent =
          "Your browser could not copy the brief. Select the text above or download it instead.";
      }
    });
  document.querySelector("#download-enquiry").addEventListener("click", () => {
    if (!form.reportValidity()) return;
    brief = createBrief();
    const url = URL.createObjectURL(
      new Blob([brief], { type: "text/plain;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "avenor-project-brief.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    status.textContent =
      "Your project brief download has started. No email has been sent.";
  });
  // Keep the local-only form inert until all its handlers are ready.
  form.querySelector('button[type="submit"]').disabled = false;
})();
