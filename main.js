(function () {
  var config = window.VOICE_INPUT_PRO_WAITLIST || {};
  var formUrl = (config.GOOGLE_FORM_URL || "").trim();
  var contactLabel = (config.CONTACT_LABEL || "").trim();
  var waitlistLinks = document.querySelectorAll("[data-waitlist-link]");
  var contactTargets = document.querySelectorAll("[data-contact-label]");
  var statusTarget = document.querySelector("[data-form-status]");
  var isReady = /^https:\/\/docs\.google\.com\/forms\//.test(formUrl) || /^https:\/\/forms\.gle\//.test(formUrl);

  waitlistLinks.forEach(function (link) {
    if (isReady) {
      link.href = formUrl;
      link.removeAttribute("aria-disabled");
      link.classList.remove("is-disabled");
      link.textContent = link.getAttribute("data-ready-label") || "待機リストに登録する";
      link.addEventListener("click", function () {
        window.localStorage.setItem("voiceInputProWaitlistClicked", new Date().toISOString());
      });
    } else {
      link.href = "#form-setup";
      link.setAttribute("aria-disabled", "true");
      link.classList.add("is-disabled");
      link.textContent = link.getAttribute("data-pending-label") || "フォーム準備中";
      link.addEventListener("click", function (event) {
        event.preventDefault();
        var target = document.querySelector("#form-setup");
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }
  });

  if (statusTarget) {
    statusTarget.textContent = isReady
      ? "Google Formsの待機リストが有効です。"
      : "Google Form URL未設定です。config.js に公開URLを入れるまで外部送信は発生しません。";
  }

  contactTargets.forEach(function (target) {
    if (contactLabel) {
      target.textContent = contactLabel;
      target.hidden = false;
    } else {
      target.hidden = true;
    }
  });
})();
