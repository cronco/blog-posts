!async function() {
    const t = {}, e = new Set, o = document.querySelector("[data-ghost-comments-counts-api]").dataset.ghostCommentsCountsApi, n = function(o) {
        (o.querySelectorAll?.("[data-ghost-comment-count]") || []).forEach((o)=>{
            t[o.dataset.ghostCommentCount] || e.add(o.dataset.ghostCommentCount);
        });
    }, a = async function() {
        const n = Array.from(e);
        e.clear();
        const a = await fetch(o, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ids: n
            })
        }), s = await a.json();
        for (const [e1, o1] of Object.entries(s))t[e1] = o1;
        !function() {
            for (const [e, o] of Object.entries(t))document.querySelectorAll(`[data-ghost-comment-count="${e}"]`).forEach((t)=>{
                let e = t.dataset.ghostCommentCountEmpty;
                if (1 === o && (e = t.dataset.ghostCommentCountSingular ? `${o} ${t.dataset.ghostCommentCountSingular}` : o), o > 1 && (e = t.dataset.ghostCommentCountPlural ? `${o} ${t.dataset.ghostCommentCountPlural}` : o), e) {
                    if ("false" !== t.dataset.ghostCommentCountAutowrap) {
                        const o1 = document.createElement(t.dataset.ghostCommentCountTag);
                        t.dataset.ghostCommentCountClassName && o1.classList.add(t.dataset.ghostCommentCountClassName), o1.textContent = e, t.insertAdjacentElement("afterend", o1);
                    } else t.insertAdjacentText("afterend", e);
                }
                t.remove();
            });
        }();
    };
    new MutationObserver((t)=>{
        t.forEach((t)=>{
            t.addedNodes.forEach((t)=>{
                n(t), function(t, e = 100) {
                    let o;
                }();
            });
        });
    }).observe(document.body, {
        subtree: !0,
        childList: !0
    }), n(document.body), a();
}();

//# sourceMappingURL=blog-post.f5cc1730.js.map
