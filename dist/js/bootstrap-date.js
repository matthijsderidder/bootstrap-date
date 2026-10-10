// Month calendar based on Bootstrap.
// Source entrypoint. `npm run build` writes dist/js/bootstrap-date.js
// and dist/js/bootstrap-date.min.js.

(function () {
  "use strict";

  var WEEKDAYS = ["M", "D", "W", "D", "V", "Z", "Z"];
  var MONTHS = [
    "januari", "februari", "maart", "april", "mei", "juni",
    "juli", "augustus", "september", "oktober", "november", "december"
  ];

  function init() {
    var picker = document.querySelector(".month-picker");
    var grid = document.querySelector("#month-grid");
    var widget = document.querySelector("#month-widget");
    var dateInput = document.querySelector("#date-input");
    var label = document.querySelector("#month-label");
    var labelText = document.querySelector("#month-label-text");
    var prev = document.querySelector("#prev-month");
    var next = document.querySelector("#next-month");
    var toggle = document.querySelector("#month-toggle");
    if (!grid || !dateInput || !label || !prev || !next) return;

    var selected = parseDate(dateInput.value) || new Date();
    var view = new Date(selected.getFullYear(), selected.getMonth(), 1);
    var mode = "month";
    var sliding = false;
    var viewport = document.createElement("div");

    viewport.className = "month-viewport";
    grid.parentNode.insertBefore(viewport, grid);
    viewport.append(grid);

    function parseDate(value) {
      if (!value) return null;
      var parts = value.split("-");
      if (parts.length < 3) return null;
      return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    }

    function pad(value) {
      return String(value).padStart(2, "0");
    }

    function iso(date) {
      return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate());
    }

    function sameDay(a, b) {
      return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
    }

    function writeInput() {
      dateInput.value = iso(selected);
    }

    function updateLabel() {
      if (mode === "year") {
        labelText.textContent = String(view.getFullYear());
        prev.setAttribute("aria-label", "Vorig jaar");
        next.setAttribute("aria-label", "Volgend jaar");
      } else {
        labelText.textContent = MONTHS[view.getMonth()] + " " + view.getFullYear();
        prev.setAttribute("aria-label", "Vorige maand");
        next.setAttribute("aria-label", "Volgende maand");
      }
    }

    function renderMonth() {
      grid.replaceChildren();
      WEEKDAYS.forEach(function (name) {
        var cell = document.createElement("div");
        cell.className = "month-weekday";
        cell.textContent = name;
        grid.append(cell);
      });

      var first = new Date(view.getFullYear(), view.getMonth(), 1);
      var offset = (first.getDay() + 6) % 7;
      var days = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
      var index;
      for (index = 0; index < offset; index += 1) {
        grid.append(document.createElement("div"));
      }
      for (index = 1; index <= days; index += 1) {
        var date = new Date(view.getFullYear(), view.getMonth(), index);
        var button = document.createElement("button");
        button.type = "button";
        button.className = sameDay(date, selected)
          ? "month-day bg-primary text-white"
          : "month-day theme-inverse theme-subtle";
        button.textContent = String(index);
        button.setAttribute("aria-pressed", sameDay(date, selected) ? "true" : "false");
        button.addEventListener("click", function (event) {
          selected = new Date(view.getFullYear(), view.getMonth(), Number(event.currentTarget.textContent));
          writeInput();
          render();
        });
        grid.append(button);
      }
    }

    function renderYears() {
      grid.replaceChildren();
      var start = view.getFullYear() - 6;
      var index;
      for (index = 0; index < 12; index += 1) {
        var year = start + index;
        var button = document.createElement("button");
        button.type = "button";
        button.className = year === selected.getFullYear()
          ? "month-year bg-primary text-white"
          : "month-year";
        button.textContent = String(year);
        button.setAttribute("aria-pressed", year === selected.getFullYear() ? "true" : "false");
        button.addEventListener("click", function (event) {
          view = new Date(Number(event.currentTarget.textContent), view.getMonth(), 1);
          mode = "month";
          render();
        });
        grid.append(button);
      }
    }

    function render() {
      updateLabel();
      if (mode === "year") renderYears();
      else renderMonth();
    }

    function fillGrid(target) {
      var current = grid;
      grid = target;
      renderMonth();
      grid = current;
    }

    function slideMonth(direction) {
      if (sliding) return;
      updateLabel();
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        renderMonth();
        return;
      }

      sliding = true;
      var outgoing = grid;
      var incoming = document.createElement("div");
      var track = document.createElement("div");
      incoming.className = "month-grid";
      incoming.setAttribute("role", "grid");
      incoming.setAttribute("aria-label", "Kies een dag");
      fillGrid(incoming);
      track.className = "month-track";

      if (direction > 0) {
        track.append(outgoing, incoming);
        track.style.transform = "translateX(0)";
      } else {
        track.append(incoming, outgoing);
        track.style.transform = "translateX(-50%)";
      }
      viewport.append(track);

      window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
          track.style.transform = direction > 0 ? "translateX(-50%)" : "translateX(0)";
        });
      });

      var done = false;
      function finish() {
        if (done) return;
        done = true;
        incoming.id = "month-grid";
        viewport.append(incoming);
        track.remove();
        grid = incoming;
        sliding = false;
      }
      track.addEventListener("transitionend", function (event) {
        if (event.target !== track || event.propertyName !== "transform") return;
        finish();
      });
      window.setTimeout(finish, 400);
    }

    function showWidget() {
      if (!widget) return;
      widget.hidden = false;
      if (toggle) toggle.setAttribute("aria-pressed", "true");
    }

    function hideWidget() {
      if (!widget) return;
      widget.hidden = true;
      if (toggle) toggle.setAttribute("aria-pressed", "false");
    }

    function toggleWidget() {
      if (widget && widget.hidden) showWidget();
      else hideWidget();
    }

    prev.addEventListener("click", function () {
      if (mode === "year") {
        view = new Date(view.getFullYear() - 12, view.getMonth(), 1);
        render();
        return;
      }
      view = new Date(view.getFullYear(), view.getMonth() - 1, 1);
      slideMonth(-1);
    });
    next.addEventListener("click", function () {
      if (mode === "year") {
        view = new Date(view.getFullYear() + 12, view.getMonth(), 1);
        render();
        return;
      }
      view = new Date(view.getFullYear(), view.getMonth() + 1, 1);
      slideMonth(1);
    });
    label.addEventListener("click", function () {
      mode = mode === "month" ? "year" : "month";
      render();
    });
    if (toggle) toggle.addEventListener("click", toggleWidget);
    dateInput.addEventListener("focus", showWidget);
    dateInput.addEventListener("input", function () {
      var nextDate = parseDate(dateInput.value);
      if (!nextDate) return;
      selected = nextDate;
      view = new Date(selected.getFullYear(), selected.getMonth(), 1);
      mode = "month";
      render();
    });
    if (picker) {
      picker.addEventListener("mousedown", function (event) {
        if (event.target === dateInput) return;
        if (toggle && toggle.contains(event.target)) return;
        event.preventDefault();
      });
    }
    document.addEventListener("mousedown", function (event) {
      if (!picker || picker.contains(event.target)) return;
      hideWidget();
    });

    writeInput();
    render();
    hideWidget();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
