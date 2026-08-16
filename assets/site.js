/* pawan.bio
   One idea: every panel publishes how far it has travelled through the viewport as
   a custom property `--p` (0 to 1). Every component in the CSS animates from that
   single number, so there is no per-component JavaScript and nothing to keep in
   sync. Reads happen in a rAF loop; the only writes are one custom property per
   visible panel. */
(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- reveal on scroll (used outside the deck) ---- */
  var targets = document.querySelectorAll(".reveal");
  if (reduced || !("IntersectionObserver" in window)) {
    for (var i = 0; i < targets.length; i++) targets[i].classList.add("in");
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        io.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    targets.forEach(function (el, n) {
      if (el.hasAttribute("data-group")) el.style.setProperty("--d", (Math.min(n % 8, 7) * 45) + "ms");
      io.observe(el);
    });
  }

  /* ---- the deck ---- */
  var panels = [].slice.call(document.querySelectorAll(".panel"));
  if (!panels.length || reduced) return;

  var visible = [];
  if ("IntersectionObserver" in window) {
    var vio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var at = visible.indexOf(e.target);
        if (e.isIntersecting && at === -1) visible.push(e.target);
        else if (!e.isIntersecting && at !== -1) visible.splice(at, 1);
      });
      if (visible.length) tick();
    }, { rootMargin: "20% 0px 20% 0px" });
    panels.forEach(function (p) { vio.observe(p); });
  } else {
    visible = panels;
  }

  var queued = false;

  function progress(panel) {
    var r = panel.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight;
    /* The panel is taller than the viewport because its stage is sticky. Progress
       runs from the moment its top reaches the top of the viewport to the moment
       its bottom does, which is exactly the window where the stage is pinned. */
    /* Measure the stage rather than assuming it is exactly one viewport: it carries
       its own padding, and on a short viewport it is taller than the screen. */
    var stage = panel.firstElementChild;
    var stageH = stage ? stage.offsetHeight : vh;
    var travel = r.height - stageH;
    if (travel <= 0) {
      /* Not pinned (short panel, or the stage outgrew the viewport): use how far the
         panel has crossed the screen instead. */
      return clamp((vh - r.top) / (vh + r.height));
    }
    /* Give it a run-up, so a component is already moving by the time the stage pins
       rather than sitting at zero through the whole approach. */
    var lead = vh * 0.45;
    return clamp((lead - r.top) / (travel + lead));
  }

  function clamp(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }

  function tick() {
    queued = false;
    for (var i = 0; i < visible.length; i++) {
      var p = visible[i];
      p.style.setProperty("--p", progress(p).toFixed(4));
    }
  }

  function onScroll() {
    if (queued || !visible.length) return;
    queued = true;
    requestAnimationFrame(tick);
  }

  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll, { passive: true });
  addEventListener("orientationchange", onScroll, { passive: true });
  tick();

  /* ---- Meridian's globe keeps turning on its own ---- */
  var globe = document.querySelector(".c-globe .dots");
  if (globe) {
    var start = null;
    (function spin(t) {
      if (start === null) start = t;
      globe.style.transform = "rotate(" + (((t - start) / 90) % 360) + "deg)";
      requestAnimationFrame(spin);
    })(0);
  }
})();
