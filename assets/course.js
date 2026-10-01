(function () {
  const root = document.body.getAttribute("data-root") || ".";
  const page = document.body.getAttribute("data-page") || "";
  const links = [
    { id: "roadmap", href: root + "/index.html", label: "الخريطة" },
    { id: "0002", href: root + "/lessons/0002-build-measure-improve.html", label: "الدرس 1" },
    { id: "0003", href: root + "/lessons/0003-nodejs-vs-browser.html", label: "الدرس 2" },
    { id: "0004", href: root + "/lessons/0004-run-a-node-file.html", label: "الدرس 3" },
    { id: "stack", href: root + "/reference/ai-stack.html", label: "الستاك" }
  ];
  const nav = document.querySelector("[data-nav]");
  if (nav) {
    nav.innerHTML =
      '<a class="brand" href="' + links[0].href + '">AI Engineer</a>' +
      '<div class="links">' +
      links.map(function (l) {
        const cur = l.id === page ? ' aria-current="page"' : "";
        return '<a href="' + l.href + '"' + cur + ">" + l.label + "</a>";
      }).join("") +
      "</div>";
  }
  document.querySelectorAll("[data-quiz]").forEach(function (quiz) {
    const answer = quiz.getAttribute("data-answer");
    const feedback = quiz.querySelector("[data-fb]");
    quiz.querySelectorAll("[data-opt]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        quiz.querySelectorAll("[data-opt]").forEach(function (b) {
          b.setAttribute("aria-pressed", "false");
          b.classList.remove("is-ok", "is-bad");
        });
        btn.setAttribute("aria-pressed", "true");
        const ok = btn.getAttribute("data-opt") === answer;
        btn.classList.add(ok ? "is-ok" : "is-bad");
        if (feedback) {
          feedback.textContent = ok
            ? quiz.getAttribute("data-ok") || "صحيح."
            : quiz.getAttribute("data-bad") || "ماشي هادي. عاودي فكّري.";
        }
      });
    });
  });
  document.querySelectorAll("[data-sim]").forEach(function (sim) {
    const btn = sim.querySelector("[data-run]");
    const out = sim.querySelector("[data-out]");
    if (!btn || !out) return;
    btn.addEventListener("click", function () {
      const raw = sim.getAttribute("data-output") || "";
      out.textContent = raw.replace(/\|/g, "\n");
    });
  });
})();
