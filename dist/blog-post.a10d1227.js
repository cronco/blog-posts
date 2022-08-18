!function() {
    const e = function(e) {
        const t = e.querySelector(".kg-audio-player-container"), a = e.querySelector(".kg-audio-play-icon"), o = e.querySelector(".kg-audio-pause-icon"), i = e.querySelector(".kg-audio-seek-slider"), r = e.querySelector(".kg-audio-playback-rate"), d = e.querySelector(".kg-audio-mute-icon"), l = e.querySelector(".kg-audio-unmute-icon"), s = e.querySelector(".kg-audio-volume-slider"), n = e.querySelector("audio"), c = e.querySelector(".kg-audio-duration"), u = e.querySelector(".kg-audio-current-time");
        let g = [
            {
                rate: .75,
                label: "0.7\xd7"
            },
            {
                rate: 1,
                label: "1\xd7"
            },
            {
                rate: 1.25,
                label: "1.2\xd7"
            },
            {
                rate: 1.75,
                label: "1.7\xd7"
            },
            {
                rate: 2,
                label: "2\xd7"
            }
        ], v = null, m = 1;
        const k = ()=>{
            i.value = Math.floor(n.currentTime), u.textContent = h(i.value), t.style.setProperty("--seek-before-width", i.value / i.max * 100 + "%"), v = requestAnimationFrame(k);
        }, y = (e)=>{
            e === i ? t.style.setProperty("--seek-before-width", e.value / e.max * 100 + "%") : t.style.setProperty("--volume-before-width", e.value / e.max * 100 + "%");
        }, h = (e)=>{
            const t = Math.floor(e / 60), a = Math.floor(e % 60);
            return `${t}:${a < 10 ? `0${a}` : `${a}`}`;
        }, p = ()=>{
            c.textContent = h(n.duration);
        }, f = ()=>{
            i.max = Math.floor(n.duration);
        }, L = ()=>{
            if (n.buffered.length > 0) {
                const e = Math.floor(n.buffered.end(n.buffered.length - 1));
                t.style.setProperty("--buffered-width", e / i.max * 100 + "%");
            }
        };
        n.readyState > 0 ? (p(), f(), L()) : n.addEventListener("loadedmetadata", ()=>{
            p(), f(), L();
        }), a.addEventListener("click", ()=>{
            a.classList.add("kg-audio-hide"), o.classList.remove("kg-audio-hide"), n.play(), requestAnimationFrame(k);
        }), o.addEventListener("click", ()=>{
            o.classList.add("kg-audio-hide"), a.classList.remove("kg-audio-hide"), n.pause(), cancelAnimationFrame(v);
        }), d.addEventListener("click", ()=>{
            d.classList.add("kg-audio-hide"), l.classList.remove("kg-audio-hide"), n.muted = !1;
        }), l.addEventListener("click", ()=>{
            l.classList.add("kg-audio-hide"), d.classList.remove("kg-audio-hide"), n.muted = !0;
        }), r.addEventListener("click", ()=>{
            let e = g[(m + 1) % 5];
            m += 1, n.playbackRate = e.rate, r.textContent = e.label;
        }), n.addEventListener("progress", L), i.addEventListener("input", (e)=>{
            y(e.target), u.textContent = h(i.value), n.paused || cancelAnimationFrame(v);
        }), i.addEventListener("change", ()=>{
            n.currentTime = i.value, n.paused || requestAnimationFrame(k);
        }), s.addEventListener("input", (e)=>{
            const t = e.target.value;
            y(e.target), n.volume = t / 100;
        });
    }, t = document.querySelectorAll(".kg-audio-card");
    for(let a = 0; a < t.length; a++)e(t[a]);
}(), function() {
    const e = [
        ...document.querySelectorAll(".kg-before-after-card")
    ];
    for (let o of e){
        const i = o.querySelector("input"), r = o.querySelector(".kg-before-after-card-image-before"), d = o.querySelector(".kg-before-after-card-slider-button"), l = [
            ...o.querySelectorAll("img")
        ];
        function t() {
            r.setAttribute("style", `width: ${i.value}%`), d.setAttribute("style", `left: calc(${i.value}% - 18px`);
        }
        function a() {
            const e = getComputedStyle(l[0]).getPropertyValue("width");
            l[1].setAttribute("style", `width: ${e}`);
        }
        i.addEventListener("input", function() {
            t();
        }), i.addEventListener("change", function() {
            i.blur();
        }), window.addEventListener("resize", function() {
            a();
        }), a(), t();
    }
}(), document.querySelectorAll(".kg-gallery-image img").forEach(function(e) {
    const t = e.closest(".kg-gallery-image"), a = e.attributes.width.value / e.attributes.height.value;
    t.style.flex = a + " 1 0%";
}), function() {
    const e = document.getElementsByClassName("kg-toggle-heading"), t = function(e) {
        const t = e.target.closest(".kg-toggle-card");
        "close" === t.getAttribute("data-kg-toggle-state") ? t.setAttribute("data-kg-toggle-state", "open") : t.setAttribute("data-kg-toggle-state", "close");
    };
    for(let a = 0; a < e.length; a++)e[a].addEventListener("click", t, !1);
}(), function() {
    const e = function(e) {
        const t = e.querySelector(".kg-video-player"), a = e.querySelector(".kg-video-player-container"), o = e.querySelector(".kg-video-play-icon"), i = e.querySelector(".kg-video-pause-icon"), r = e.querySelector(".kg-video-seek-slider"), d = e.querySelector(".kg-video-playback-rate"), l = e.querySelector(".kg-video-mute-icon"), s = e.querySelector(".kg-video-unmute-icon"), n = e.querySelector(".kg-video-volume-slider"), c = e.querySelector("video"), u = e.querySelector(".kg-video-duration"), g = e.querySelector(".kg-video-current-time"), v = e.querySelector(".kg-video-large-play-icon"), m = e.querySelector(".kg-video-overlay");
        let k = [
            {
                rate: .75,
                label: "0.7\xd7"
            },
            {
                rate: 1,
                label: "1\xd7"
            },
            {
                rate: 1.25,
                label: "1.2\xd7"
            },
            {
                rate: 1.75,
                label: "1.7\xd7"
            },
            {
                rate: 2,
                label: "2\xd7"
            }
        ], y = null, h = 1;
        c.loop && (v.classList.add("kg-video-hide-animated"), m.classList.add("kg-video-hide-animated"));
        const p = ()=>{
            r.value = Math.floor(c.currentTime), g.textContent = L(r.value), t.style.setProperty("--seek-before-width", r.value / r.max * 100 + "%"), y = requestAnimationFrame(p);
        }, f = (e)=>{
            e === r ? t.style.setProperty("--seek-before-width", e.value / e.max * 100 + "%") : t.style.setProperty("--volume-before-width", e.value / e.max * 100 + "%");
        }, L = (e)=>{
            const t = Math.floor(e / 60), a = Math.floor(e % 60);
            return `${t}:${a < 10 ? `0${a}` : `${a}`}`;
        }, b = ()=>{
            u.textContent = L(c.duration);
        }, q = ()=>{
            r.max = Math.floor(c.duration);
        }, S = ()=>{
            if (c.buffered.length > 0) {
                const e = Math.floor(c.buffered.end(c.buffered.length - 1));
                t.style.setProperty("--buffered-width", e / r.max * 100 + "%");
            }
        };
        c.readyState > 0 ? (b(), q(), S(), c.autoplay && (y = requestAnimationFrame(p), o.classList.add("kg-video-hide"), i.classList.remove("kg-video-hide")), c.muted && (s.classList.add("kg-video-hide"), l.classList.remove("kg-video-hide"))) : c.addEventListener("loadedmetadata", ()=>{
            b(), q(), S(), c.autoplay && (y = requestAnimationFrame(p), o.classList.add("kg-video-hide"), i.classList.remove("kg-video-hide")), c.muted && (s.classList.add("kg-video-hide"), l.classList.remove("kg-video-hide"));
        }), e.onmouseover = ()=>{
            c.loop || a.classList.remove("kg-video-hide-animated");
        }, e.onmouseleave = ()=>{
            !!(c.currentTime > 0 && !c.paused && !c.ended && c.readyState > 2) && a.classList.add("kg-video-hide-animated");
        }, e.addEventListener("click", ()=>{
            if (!c.loop) !!(c.currentTime > 0 && !c.paused && !c.ended && c.readyState > 2) ? A() : E();
        }), c.onplay = ()=>{
            v.classList.add("kg-video-hide-animated"), m.classList.add("kg-video-hide-animated"), o.classList.add("kg-video-hide"), i.classList.remove("kg-video-hide");
        };
        const E = ()=>{
            v.classList.add("kg-video-hide-animated"), m.classList.add("kg-video-hide-animated"), o.classList.add("kg-video-hide"), i.classList.remove("kg-video-hide"), c.play(), y = requestAnimationFrame(p);
        }, A = ()=>{
            i.classList.add("kg-video-hide"), o.classList.remove("kg-video-hide"), c.pause(), cancelAnimationFrame(y);
        };
        v.addEventListener("click", (e)=>{
            e.stopPropagation(), E();
        }), o.addEventListener("click", (e)=>{
            e.stopPropagation(), E();
        }), i.addEventListener("click", (e)=>{
            e.stopPropagation(), A();
        }), l.addEventListener("click", (e)=>{
            e.stopPropagation(), l.classList.add("kg-video-hide"), s.classList.remove("kg-video-hide"), c.muted = !1;
        }), s.addEventListener("click", (e)=>{
            e.stopPropagation(), s.classList.add("kg-video-hide"), l.classList.remove("kg-video-hide"), c.muted = !0;
        }), d.addEventListener("click", (e)=>{
            e.stopPropagation();
            let t = k[(h + 1) % 5];
            h += 1, c.playbackRate = t.rate, d.textContent = t.label;
        }), c.addEventListener("progress", S), r.addEventListener("input", (e)=>{
            e.stopPropagation(), f(e.target), g.textContent = L(r.value), c.paused || cancelAnimationFrame(y);
        }), r.addEventListener("change", (e)=>{
            e.stopPropagation(), c.currentTime = r.value, c.paused || requestAnimationFrame(p);
        }), n.addEventListener("click", (e)=>{
            e.stopPropagation();
        }), r.addEventListener("click", (e)=>{
            e.stopPropagation();
        }), n.addEventListener("input", (e)=>{
            e.stopPropagation();
            const t = e.target.value;
            f(e.target), c.volume = t / 100;
        });
    }, t = document.querySelectorAll(".kg-video-card");
    for(let a = 0; a < t.length; a++)e(t[a]);
}();

//# sourceMappingURL=blog-post.a10d1227.js.map
