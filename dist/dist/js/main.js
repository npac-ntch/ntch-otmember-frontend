$(function () {
  // header toggle
  $("#header-toggle").click(function () {
    $(this).toggleClass("toggled");
    $("header .nav-bg1").toggleClass("toggled");
    $("header .nav-bg2").toggleClass("toggled");
    $("header nav").toggleClass("toggled");
    $("#header-mask").fadeToggle(0.3);
  });
  // header ankor links
  $('header a[href^="#"]').on("click", function (e) {
    const target = $(this.getAttribute("href"));

    if (window.innerWidth < 1280 && $(this).closest("header").length > 0) {
      $("#header-toggle").toggleClass("toggled");
      $("header .nav-bg1").toggleClass("toggled");
      $("header .nav-bg2").toggleClass("toggled");
      $("header nav").toggleClass("toggled");
      $("#header-mask").fadeToggle(0.3);
    }
    e.preventDefault();

    if (target.length && $(this).attr("href") === "#sec1") {
      let headerHeight = $("header").height();
      let scrollTop = target.offset().top - headerHeight;
      $("html, body").animate(
        {
          scrollTop: scrollTop,
        },
        500
      );
    } else {
      let scrollTop = target.offset().top;
      $("html, body").animate(
        {
          scrollTop: scrollTop,
        },
        500
      );
    }
  });

  // sec2 moible tooltip
  $("#sec2 .tag.with-tooltip").click(function (event) {
    if (window.innerWidth < 1280) {
      event.preventDefault();
      $(this).find(".tooltip").toggleClass("show");
    }
  });

  gsap.registerPlugin(DrawSVGPlugin);
  gsap.registerPlugin(ScrollTrigger);
  // kv tl
  let kvtl = new gsap.timeline({ delay: 0.5 });
  if (window.innerWidth >= 1280) {
    kvtl
      .to("#loading-circle", {
        scale: 0,
        duration: 0.5,
        delay: 0.5,
        ease: "power1.in",
      })
      .call(() => {
        $("#loading-popup").fadeOut("fast");
        $("html").addClass("scroll");
      })
      .from("#kv-finger", { rotate: "-20", duration: 0.2, delay: 0.3 })
      .from("#kv-bubble", { scale: 0, ease: "bounce.out" })
      .from("#kv-l1 path", { drawSVG: 0, duration: 0.3 }, "<")
      .from("#kv-l2 path", { drawSVG: 0, duration: 0.3 })
      .from("#kv-l3 path", { drawSVG: 0, duration: 0.2 })
      .from("#kv-l4 path", { drawSVG: 0, duration: 0.3 })
      .from("#kv-l5 path", { drawSVG: 0, duration: 0.2 })
      .from("#kv-l6 path", { drawSVG: 0, duration: 0.3 });
  } else {
    kvtl
      .to("#loading-circle", {
        scale: 0,
        duration: 0.5,
        delay: 0.5,
        ease: "power1.in",
      })
      .call(() => {
        $("#loading-popup").fadeOut("fast");
        $("html").addClass("scroll");
      })
      .from("#kv-finger", { rotate: "-20", duration: 0.3, delay: 0.3 })
      .from("#kv-bubble", { scale: 0, ease: "bounce.out" })
      .from("#kv-l1-m path", { drawSVG: 0, duration: 0.3 }, "<")
      .from("#kv-l2-m path", { drawSVG: 0, duration: 0.3 })
      .from("#kv-l3-m path", { drawSVG: 0, duration: 0.3 })
      .from("#kv-l4-m path", { drawSVG: 0, duration: 0.2 })
      .from("#kv-l5-m path", { drawSVG: 0, duration: 0.3 })
      .from("#kv-l6-m path", { drawSVG: 0, duration: 0.2 })
      .from("#kv-l7-m path", { drawSVG: 0, duration: 0.3 });
  }
  // sec1 tl
  let sec1tl = new gsap.timeline({
    scrollTrigger: {
      start: "top 70%",
      trigger: "#sec1",
    },
  });
  sec1tl
    .from("#sec1-p1", {
      drawSVG: 0,
      duration: 0.2,
    })
    .from("#sec1-p2", {
      drawSVG: 0,
      duration: 0.25,
    })
    .fromTo(
      "#sec1-p3",
      { drawSVG: "100% 100%" },
      { drawSVG: "0% 100%", duration: 0.25 }
    )
    .from("#sec1-star", { scale: 0 })
    .from("#sec1 .left-wrap", {
      opacity: 0,
      y: 60,
    })
    .from("#sec1-list li", {
      opacity: 0,
      y: 60,
      stagger: 0.1,
    });
  // sec2 tl
  let sec2tl = new gsap.timeline({
    scrollTrigger: {
      start: "top 70%",
      trigger: "#sec2",
    },
  });
  sec2tl
    .from("#sec2 .sec-title", {
      opacity: 0,
      y: 60,
    })
    .from("#sec2 .title-sub-text", {
      opacity: 0,
      y: 60,
    })
    .from("#sec2-list li", {
      opacity: 0,
      y: 60,
      stagger: 0.2,
    });
});
