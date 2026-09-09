const projectData = {
  capstone: {
    label: "PROJECT 01",
    title: "캡스톤디자인 프로젝트",
    intro:
      "2025 교내 캡스톤디자인 최우수상 수상 경험입니다. 현재 이력서에는 수상 사실만 있으므로, 아래 세부 항목은 실제 프로젝트 내용으로 교체할 수 있도록 초안 형태로 구성했습니다.",
    role: "기획 / 분석",
    period: "기간 입력",
    team: "팀 구성 입력",
    tools: "사용 도구 입력",
    overview:
      "프로젝트의 배경, 목표, 대상, 최종 산출물을 3~5문장으로 입력하세요.",
    challenge:
      "당시 해결해야 했던 핵심 문제를 한 문장으로 정의하고, 왜 중요한 문제였는지 설명하세요.",
    roleDetail:
      "본인이 맡은 역할과 기여 범위를 구체적으로 입력하세요. 예: 자료 수집, 데이터 정리, 분석, 기획안 작성, 발표자료 제작.",
    thinking: [
      "OBSERVE — 어떤 데이터와 현상을 살펴봤는가?",
      "DEFINE — 그중 무엇을 핵심 문제로 정의했는가?",
      "CONNECT — 발견한 인사이트를 어떻게 기획으로 연결했는가?"
    ],
    action:
      "실행 과정은 STEP 01 → STEP 02 → STEP 03처럼 단계별로 정리하세요. 각 단계마다 실제 산출물 이미지가 있으면 함께 배치하는 것을 권장합니다.",
    result:
      "확인 가능한 결과를 입력하세요. 현재 자료에서 확인 가능한 결과는 '2025 교내 캡스톤디자인 최우수상'입니다.",
    insight:
      "이 경험을 통해 발견한 점과 다음 프로젝트에서 어떻게 적용했는지 작성하세요."
  },
  placeholder2: {
    label: "PROJECT 02",
    title: "프로젝트 제목을 입력하세요",
    intro:
      "대표 프로젝트의 개요를 입력하세요. 현재 제공된 자료에는 세부 프로젝트 정보가 없어 placeholder로 두었습니다.",
    role: "내용 입력",
    period: "기간 입력",
    team: "팀 구성 입력",
    tools: "도구 입력",
    overview: "프로젝트의 배경과 목표를 입력하세요.",
    challenge: "해결해야 했던 핵심 문제를 입력하세요.",
    roleDetail: "본인의 역할과 구체적인 기여 내용을 입력하세요.",
    thinking: [
      "OBSERVE — 무엇을 확인했는가?",
      "DEFINE — 무엇을 핵심 문제로 정의했는가?",
      "CONNECT — 어떻게 실행안으로 연결했는가?"
    ],
    action: "실행 단계를 입력하세요.",
    result: "측정 가능한 결과 또는 산출물을 입력하세요.",
    insight: "프로젝트를 통해 얻은 인사이트를 입력하세요."
  },
  placeholder3: {
    label: "PROJECT 03",
    title: "프로젝트 제목을 입력하세요",
    intro:
      "데이터·기획·문서 작성 역량이 잘 드러나는 프로젝트를 추가하는 영역입니다.",
    role: "내용 입력",
    period: "기간 입력",
    team: "팀 구성 입력",
    tools: "도구 입력",
    overview: "프로젝트의 배경과 목표를 입력하세요.",
    challenge: "해결해야 했던 핵심 문제를 입력하세요.",
    roleDetail: "본인의 역할과 구체적인 기여 내용을 입력하세요.",
    thinking: [
      "OBSERVE — 무엇을 확인했는가?",
      "DEFINE — 무엇을 핵심 문제로 정의했는가?",
      "CONNECT — 어떻게 실행안으로 연결했는가?"
    ],
    action: "실행 단계를 입력하세요.",
    result: "측정 가능한 결과 또는 산출물을 입력하세요.",
    insight: "프로젝트를 통해 얻은 인사이트를 입력하세요."
  }
};

const header = document.querySelector(".site-header");
const nav = document.querySelector(".primary-nav");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = [...document.querySelectorAll(".primary-nav a")];
const revealItems = document.querySelectorAll(".reveal");
const projectModal = document.getElementById("project-modal");
const projectModalContent = document.getElementById("project-modal-content");
const resumeModal = document.getElementById("resume-modal");
const openResumeButton = document.getElementById("open-resume");

document.getElementById("current-year").textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
});

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "메뉴 열기" : "메뉴 닫기");
  nav.classList.toggle("is-open", !isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "메뉴 열기");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${id}`
        );
      });
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0
  }
);

["about", "projects", "strength", "resume", "contact"].forEach((id) => {
  const section = document.getElementById(id);
  if (section) sectionObserver.observe(section);
});

function openModal(modal) {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  const closeButton = modal.querySelector(".modal-close");
  if (closeButton) closeButton.focus();
}

function closeModal(modal) {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function renderProjectDetail(project) {
  const thinkingCards = project.thinking
    .map((item) => {
      const [head, body] = item.split(" — ");
      return `
        <div>
          <strong>${head}</strong>
          <span>${body || ""}</span>
        </div>
      `;
    })
    .join("");

  return `
    <article class="project-detail">
      <p class="eyebrow">${project.label}</p>
      <h2 id="project-modal-title">${project.title}</h2>
      <p class="detail-intro">${project.intro}</p>

      <div class="detail-meta">
        <div><span>ROLE</span><strong>${project.role}</strong></div>
        <div><span>PERIOD</span><strong>${project.period}</strong></div>
        <div><span>TEAM</span><strong>${project.team}</strong></div>
        <div><span>TOOLS</span><strong>${project.tools}</strong></div>
      </div>

      <section class="detail-section">
        <h3>01. OVERVIEW</h3>
        <p>${project.overview}</p>
      </section>

      <section class="detail-section">
        <h3>02. CHALLENGE</h3>
        <p>${project.challenge}</p>
      </section>

      <section class="detail-section">
        <h3>03. MY ROLE</h3>
        <p>${project.roleDetail}</p>
      </section>

      <section class="detail-section">
        <h3>04. THINKING</h3>
        <div class="detail-flow">${thinkingCards}</div>
      </section>

      <section class="detail-section">
        <h3>05. ACTION</h3>
        <p>${project.action}</p>
      </section>

      <section class="detail-section">
        <h3>06. RESULT</h3>
        <p>${project.result}</p>
      </section>

      <section class="detail-section">
        <h3>07. INSIGHT</h3>
        <p>${project.insight}</p>
      </section>

      <section class="detail-section">
        <h3>08. OUTPUT</h3>
        <p>실제 파일 링크를 연결하면 아래 카드를 파일 뷰어나 외부 링크로 사용할 수 있습니다.</p>
        <div class="output-grid">
          <div class="output-card"><span>PPT</span><small>프로젝트 발표자료 연결</small></div>
          <div class="output-card"><span>REPORT</span><small>보고서 / PDF 연결</small></div>
          <div class="output-card"><span>DATA</span><small>데이터 / 대시보드 연결</small></div>
        </div>
      </section>
    </article>
  `;
}

document.querySelectorAll(".open-project").forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.project;
    const project = projectData[key];
    if (!project) return;

    projectModalContent.innerHTML = renderProjectDetail(project);
    openModal(projectModal);
  });
});

document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", () => closeModal(projectModal));
});

openResumeButton.addEventListener("click", () => openModal(resumeModal));

document.querySelectorAll("[data-close-resume]").forEach((element) => {
  element.addEventListener("click", () => closeModal(resumeModal));
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  if (projectModal.classList.contains("is-open")) closeModal(projectModal);
  if (resumeModal.classList.contains("is-open")) closeModal(resumeModal);
});
