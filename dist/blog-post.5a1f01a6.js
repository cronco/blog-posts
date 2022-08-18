/**
 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
 */ /*
  Copyright (C) 2013 Gregory Schier <gschier1990@gmail.com>
  Copyright (C) 2013 Martin Zimmermann <info@posativ.org>

  Inspired by http://codepen.io/gschier/pen/GLvAy
*/ /*
 * Copyright 2014, Martin Zimmermann <info@posativ.org>. All rights reserved.
 * Distributed under the MIT license
 */ !function() {
    var requirejs, require, define;
    !function(e) {
        function t(e, t) {
            return x.call(e, t);
        }
        function n(e, t) {
            var n, o, i, a, r, s, m, c, d, p, l, u, f = t && t.split("/"), h = v.map, b = h && h["*"] || {};
            if (e) {
                for(e = e.split("/"), r = e.length - 1, v.nodeIdCompat && g.test(e[r]) && (e[r] = e[r].replace(g, "")), "." === e[0].charAt(0) && f && (u = f.slice(0, f.length - 1), e = u.concat(e)), d = 0; d < e.length; d++)if ("." === (l = e[d])) e.splice(d, 1), d -= 1;
                else if (".." === l) {
                    if (0 === d || 1 === d && ".." === e[2] || ".." === e[d - 1]) continue;
                    d > 0 && (e.splice(d - 1, 2), d -= 2);
                }
                e = e.join("/");
            }
            if ((f || b) && h) {
                for(n = e.split("/"), d = n.length; d > 0; d -= 1){
                    if (o = n.slice(0, d).join("/"), f) {
                        for(p = f.length; p > 0; p -= 1)if ((i = h[f.slice(0, p).join("/")]) && (i = i[o])) {
                            a = i, s = d;
                            break;
                        }
                    }
                    if (a) break;
                    !m && b && b[o] && (m = b[o], c = d);
                }
                !a && m && (a = m, s = c), a && (n.splice(0, s, a), e = n.join("/"));
            }
            return e;
        }
        function o(t, n) {
            return function() {
                var o = w.call(arguments, 0);
                return "string" != typeof o[0] && 1 === o.length && o.push(null), p.apply(e, o.concat([
                    t,
                    n
                ]));
            };
        }
        function i(e) {
            return function(t) {
                return n(t, e);
            };
        }
        function a(e) {
            return function(t) {
                f[e] = t;
            };
        }
        function r(n) {
            if (t(h, n)) {
                var o = h[n];
                delete h[n], b[n] = !0, d.apply(e, o);
            }
            if (!t(f, n) && !t(b, n)) throw new Error("No " + n);
            return f[n];
        }
        function s(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [
                t,
                e
            ];
        }
        function m(e) {
            return e ? s(e) : [];
        }
        function c(e) {
            return function() {
                return v && v.config && v.config[e] || {};
            };
        }
        var d, p, l, u, f = {}, h = {}, v = {}, b = {}, x = Object.prototype.hasOwnProperty, w = [].slice, g = /\.js$/;
        l = function(e, t) {
            var o, a = s(e), m = a[0], c = t[1];
            return e = a[1], m && (m = n(m, c), o = r(m)), m ? e = o && o.normalize ? o.normalize(e, i(c)) : n(e, c) : (e = n(e, c), a = s(e), m = a[0], e = a[1], m && (o = r(m))), {
                f: m ? m + "!" + e : e,
                n: e,
                pr: m,
                p: o
            };
        }, u = {
            require: function(e) {
                return o(e);
            },
            exports: function(e) {
                var t = f[e];
                return void 0 !== t ? t : f[e] = {};
            },
            module: function(e) {
                return {
                    id: e,
                    uri: "",
                    exports: f[e],
                    config: c(e)
                };
            }
        }, d = function(n, i, s, c) {
            var d, p, v, x, w, g, y, k = [], j = typeof s;
            if (c = c || n, g = m(c), "undefined" === j || "function" === j) {
                for(i = !i.length && s.length ? [
                    "require",
                    "exports",
                    "module"
                ] : i, w = 0; w < i.length; w += 1)if (x = l(i[w], g), "require" === (p = x.f)) k[w] = u.require(n);
                else if ("exports" === p) k[w] = u.exports(n), y = !0;
                else if ("module" === p) d = k[w] = u.module(n);
                else if (t(f, p) || t(h, p) || t(b, p)) k[w] = r(p);
                else {
                    if (!x.p) throw new Error(n + " missing " + p);
                    x.p.load(x.n, o(c, !0), a(p), {}), k[w] = f[p];
                }
                v = s ? s.apply(f[n], k) : void 0, n && (d && d.exports !== e && d.exports !== f[n] ? f[n] = d.exports : v === e && y || (f[n] = v));
            } else n && (f[n] = s);
        }, requirejs = require = p = function(t, n, o, i, a) {
            if ("string" == typeof t) return u[t] ? u[t](n) : r(l(t, m(n)).f);
            if (!t.splice) {
                if (v = t, v.deps && p(v.deps, v.callback), !n) return;
                n.splice ? (t = n, n = o, o = null) : t = e;
            }
            return n = n || function() {}, "function" == typeof o && (o = i, i = a), i ? d(e, t, n, o) : setTimeout(function() {
                d(e, t, n, o);
            }, 4), p;
        }, p.config = function(e) {
            return p(e);
        }, requirejs._defined = f, define = function(e, n, o) {
            if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
            n.splice || (o = n, n = []), t(f, e) || t(h, e) || (h[e] = [
                e,
                n,
                o
            ]);
        }, define.amd = {
            jQuery: !0
        };
    }(), define("../../node_modules/almond/almond", function() {}), define("app/lib/ready", [], function() {
        "use strict";
        var e = !1, t = function(t) {
            e || (e = !0, t());
        };
        return function(e) {
            document.addEventListener("DOMContentLoaded", function() {
                t(e);
            }), "interactive" !== document.readyState && "complete" !== document.readyState || t(e);
        };
    }), define("app/config", [], function() {
        "use strict";
        for(var e = {
            css: !0,
            lang: (navigator.language || navigator.userLanguage).split("-")[0],
            "reply-to-self": !1,
            "require-email": !1,
            "require-author": !1,
            "reply-notifications": !1,
            "max-comments-top": "inf",
            "max-comments-nested": 5,
            "reveal-on-click": 5,
            gravatar: !1,
            avatar: !0,
            "avatar-bg": "#f0f0f0",
            "avatar-fg": [
                "#9abf88",
                "#5698c4",
                "#e279a3",
                "#9163b6",
                "#be5168",
                "#f19670",
                "#e4bf80",
                "#447c69"
            ].join(" "),
            vote: !0,
            "vote-levels": null,
            feed: !1
        }, t = document.getElementsByTagName("script"), n = 0; n < t.length; n++)for(var o = 0; o < t[n].attributes.length; o++){
            var i = t[n].attributes[o];
            if (/^data-isso-/.test(i.name)) try {
                e[i.name.substring(10)] = JSON.parse(i.value);
            } catch (t1) {
                e[i.name.substring(10)] = i.value;
            }
        }
        return e["avatar-fg"] = e["avatar-fg"].split(" "), e;
    }), define("app/i18n/bg", {
        "postbox-text": "Въведете коментара си тук (поне 3 знака)",
        "postbox-author": "Име/псевдоним (незадължително)",
        "postbox-email": "Ел. поща (незадължително)",
        "postbox-website": "Уебсайт (незадължително)",
        "postbox-preview": "преглед",
        "postbox-edit": "Редактиране",
        "postbox-submit": "Публикуване",
        "num-comments": "1 коментар\n{{ n }} коментара",
        "no-comments": "Все още няма коментари",
        "comment-reply": "Отговор",
        "comment-edit": "Редактиране",
        "comment-save": "Запис",
        "comment-delete": "Изтриване",
        "comment-confirm": "Потвърждение",
        "comment-close": "Затваряне",
        "comment-cancel": "Отказ",
        "comment-deleted": "Коментарът е изтрит.",
        "comment-queued": "Коментарът чака на опашката за модериране.",
        "comment-anonymous": "анонимен",
        "comment-hidden": "{{ n }} скрити",
        "date-now": "сега",
        "date-minute": "преди 1 минута\nпреди {{ n }} минути",
        "date-hour": "преди 1 час\nпреди {{ n }} часа",
        "date-day": "вчера\nпреди {{ n }} дни",
        "date-week": "миналата седмица\nпреди {{ n }} седмици",
        "date-month": "миналия месец\nпреди {{ n }} месеца",
        "date-year": "миналата година\nпреди {{ n }} години"
    }), define("app/i18n/cs", {
        "postbox-text": "Sem napiště svůj koment\xe1ř (nejm\xe9ně 3 znaky)",
        "postbox-author": "Jm\xe9no (nepovinn\xe9)",
        "postbox-email": "E-mail (nepovinn\xfd)",
        "postbox-website": "Web (nepovinn\xfd)",
        "postbox-preview": "N\xe1hled",
        "postbox-edit": "Upravit",
        "postbox-submit": "Publikovat",
        "num-comments": "Jeden koment\xe1ř\n{{ n }} Koment\xe1řů",
        "no-comments": "Zat\xedm bez koment\xe1řů",
        "comment-reply": "Odpovědět",
        "comment-edit": "Upravit",
        "comment-save": "Uložit",
        "comment-delete": "Smazat",
        "comment-confirm": "Potvrdit",
        "comment-close": "Zavř\xedt",
        "comment-cancel": "Zrušit",
        "comment-deleted": "Koment\xe1ř smaz\xe1n",
        "comment-queued": "Koment\xe1ř ve frontě na schv\xe1len\xed",
        "comment-anonymous": "Anonym",
        "comment-hidden": "{{ n }} skryto",
        "date-now": "pr\xe1vě teď",
        "date-minute": "před minutou\npřed {{ n }} minutami",
        "date-hour": "před hodinou\npřed {{ n }} hodinami",
        "date-day": "včera\npřed {{ n }} dny",
        "date-week": "minul\xfd t\xfdden\npřed {{ n }} t\xfddny",
        "date-month": "minul\xfd měs\xedc\npřed {{ n }} měs\xedci",
        "date-year": "minul\xfd rok\npřed {{ n }} lety"
    }), define("app/i18n/da", {
        "postbox-text": "Type Comment Here (at least 3 chars)",
        "postbox-author": "Name (optional)",
        "postbox-email": "E-mail (optional)",
        "postbox-website": "Website (optional)",
        "postbox-preview": "Eksempel",
        "postbox-edit": "Rediger",
        "postbox-submit": "Submit",
        "num-comments": "One Comment\n{{ n }} Comments",
        "no-comments": "Ingen kommentarer endnu",
        "comment-reply": "Svar",
        "comment-edit": "Rediger",
        "comment-save": "Gem",
        "comment-delete": "Fjern",
        "comment-confirm": "Bekr\xe6ft",
        "comment-close": "Luk",
        "comment-cancel": "Annuller",
        "comment-deleted": "Kommentar slettet.",
        "comment-queued": "Kommentar i k\xf8 for moderation.",
        "comment-anonymous": "Anonym",
        "comment-hidden": "{{ n }} Skjult",
        "date-now": "lige nu",
        "date-minute": "et minut siden\n{{ n }} minutter siden",
        "date-hour": "en time siden\n{{ n }} timer siden",
        "date-day": "Ig\xe5r\n{{ n }} dage siden",
        "date-week": "sidste uge\n{{ n }} uger siden",
        "date-month": "sidste m\xe5ned\n{{ n }} m\xe5neder siden",
        "date-year": "sidste \xe5r\n{{ n }} \xe5r siden"
    }), define("app/i18n/de", {
        "postbox-text": "Kommentar hier eingeben (mindestens 3 Zeichen)",
        "postbox-author": "Name (optional)",
        "postbox-email": "E-Mail (optional)",
        "postbox-website": "Website (optional)",
        "postbox-preview": "Vorschau",
        "postbox-edit": "Bearbeiten",
        "postbox-submit": "Abschicken",
        "postbox-notification": "wenn auf meinen Kommentar geantwortet wird, m\xf6chte ich eine E-Mail bekommen",
        "num-comments": "1 Kommentar\n{{ n }} Kommentare",
        "no-comments": "Bisher keine Kommentare",
        "comment-reply": "Antworten",
        "comment-edit": "Bearbeiten",
        "comment-save": "Speichern",
        "comment-delete": "L\xf6schen",
        "comment-confirm": "Best\xe4tigen",
        "comment-close": "Schlie\xdfen",
        "comment-cancel": "Abbrechen",
        "comment-deleted": "Kommentar gel\xf6scht.",
        "comment-queued": "Kommentar muss noch freigeschaltet werden.",
        "comment-anonymous": "Anonym",
        "comment-hidden": "{{ n }} versteckt",
        "date-now": "eben gerade",
        "date-minute": "vor einer Minute\nvor {{ n }} Minuten",
        "date-hour": "vor einer Stunde\nvor {{ n }} Stunden",
        "date-day": "Gestern\nvor {{ n }} Tagen",
        "date-week": "letzte Woche\nvor {{ n }} Wochen",
        "date-month": "letzten Monat\nvor {{ n }} Monaten",
        "date-year": "letztes Jahr\nvor {{ n }} Jahren"
    }), define("app/i18n/en", {
        "postbox-text": "Type Comment Here (at least 3 chars)",
        "postbox-author": "Name (optional)",
        "postbox-email": "E-mail (optional)",
        "postbox-website": "Website (optional)",
        "postbox-preview": "Preview",
        "postbox-edit": "Edit",
        "postbox-submit": "Submit",
        "postbox-notification": "Subscribe to email notification of replies",
        "num-comments": "One Comment\n{{ n }} Comments",
        "no-comments": "No Comments Yet",
        "atom-feed": "Atom feed",
        "comment-reply": "Reply",
        "comment-edit": "Edit",
        "comment-save": "Save",
        "comment-delete": "Delete",
        "comment-confirm": "Confirm",
        "comment-close": "Close",
        "comment-cancel": "Cancel",
        "comment-deleted": "Comment deleted.",
        "comment-queued": "Comment in queue for moderation.",
        "comment-anonymous": "Anonymous",
        "comment-hidden": "{{ n }} Hidden",
        "date-now": "right now",
        "date-minute": "a minute ago\n{{ n }} minutes ago",
        "date-hour": "an hour ago\n{{ n }} hours ago",
        "date-day": "Yesterday\n{{ n }} days ago",
        "date-week": "last week\n{{ n }} weeks ago",
        "date-month": "last month\n{{ n }} months ago",
        "date-year": "last year\n{{ n }} years ago"
    }), define("app/i18n/fa", {
        "postbox-text": "نظر خود را اینجا بنویسید (حداقل سه نویسه)",
        "postbox-author": "اسم (اختیاری)",
        "postbox-email": "ایمیل (اختیاری)",
        "postbox-website": "سایت (اختیاری)",
        "postbox-preview": "پیش‌نمایش",
        "postbox-edit": "ویرایش",
        "postbox-submit": "ارسال",
        "num-comments": "یک نظر\n{{ n }} نظر",
        "no-comments": "هنوز نظری نوشته نشده است",
        "comment-reply": "پاسخ",
        "comment-edit": "ویرایش",
        "comment-save": "ذخیره",
        "comment-delete": "حذف",
        "comment-confirm": "تایید",
        "comment-close": "بستن",
        "comment-cancel": "انصراف",
        "comment-deleted": "نظر حذف شد.",
        "comment-queued": "نظر در صف بررسی مدیر قرار دارد.",
        "comment-anonymous": "ناشناس",
        "comment-hidden": "{{ n }} مخفی",
        "date-now": "هم اکنون",
        "date-minute": "یک دقیقه پیش\n{{ n }} دقیقه پیش",
        "date-hour": "یک ساعت پیش\n{{ n }} ساعت پیش",
        "date-day": "دیروز\n{{ n }} روز پیش",
        "date-week": "یک هفته پیش\n{{ n }} هفته پیش",
        "date-month": "یک ماه پیش\n{{ n }} ماه پیش",
        "date-year": "یک سال پیش\n{{ n }} سال پیش"
    }), define("app/i18n/fi", {
        "postbox-text": "Kirjoita kommentti t\xe4h\xe4n (v\xe4hint\xe4\xe4n 3 merkki\xe4)",
        "postbox-author": "Nimi (valinnainen)",
        "postbox-email": "S\xe4hk\xf6posti (valinnainen)",
        "postbox-website": "Web-sivu (valinnainen)",
        "postbox-preview": "Esikatselu",
        "postbox-edit": "Muokkaa",
        "postbox-submit": "L\xe4het\xe4",
        "num-comments": "Yksi kommentti\n{{ n }} kommenttia",
        "no-comments": "Ei viel\xe4 kommentteja",
        "comment-reply": "Vastaa",
        "comment-edit": "Muokkaa",
        "comment-save": "Tallenna",
        "comment-delete": "Poista",
        "comment-confirm": "Vahvista",
        "comment-close": "Sulje",
        "comment-cancel": "Peru",
        "comment-deleted": "Kommentti on poistettu.",
        "comment-queued": "Kommentti on laitettu jonoon odottamaan moderointia.",
        "comment-anonymous": "Nimet\xf6n",
        "comment-hidden": "{{ n }} piilotettua",
        "date-now": "hetki sitten",
        "date-minute": "minuutti sitten\n{{ n }} minuuttia sitten",
        "date-hour": "tunti sitten\n{{ n }} tuntia sitten",
        "date-day": "eilen\n{{ n }} p\xe4iv\xe4\xe4 sitten",
        "date-week": "viime viikolla\n{{ n }} viikkoa sitten",
        "date-month": "viime kuussa\n{{ n }} kuukautta sitten",
        "date-year": "viime vuonna\n{{ n }} vuotta sitten"
    }), define("app/i18n/fr", {
        "postbox-text": "Ins\xe9rez votre commentaire ici (au moins 3 lettres)",
        "postbox-author": "Nom (optionnel)",
        "postbox-email": "Courriel (optionnel)",
        "postbox-website": "Site web (optionnel)",
        "postbox-preview": "Aper\xe7u",
        "postbox-edit": "\xc9diter",
        "postbox-submit": "Soumettre",
        "postbox-notification": "S’abonner aux notifications de r\xe9ponses",
        "num-comments": "{{ n }} commentaire\n{{ n }} commentaires",
        "no-comments": "Aucun commentaire pour l’instant",
        "atom-feed": "Flux Atom",
        "comment-reply": "R\xe9pondre",
        "comment-edit": "\xc9diter",
        "comment-save": "Enregistrer",
        "comment-delete": "Supprimer",
        "comment-confirm": "Confirmer",
        "comment-close": "Fermer",
        "comment-cancel": "Annuler",
        "comment-deleted": "Commentaire supprim\xe9.",
        "comment-queued": "Commentaire en attente de mod\xe9ration.",
        "comment-anonymous": "Anonyme",
        "comment-hidden": "1 cach\xe9\n{{ n }} cach\xe9s",
        "date-now": "\xc0 l’instant",
        "date-minute": "Il y a une minute\nIl y a {{ n }} minutes",
        "date-hour": "Il y a une heure\nIl y a {{ n }} heures ",
        "date-day": "Hier\nIl y a {{ n }} jours",
        "date-week": "Il y a une semaine\nIl y a {{ n }} semaines",
        "date-month": "Il y a un mois\nIl y a {{ n }} mois",
        "date-year": "Il y a un an\nIl y a {{ n }} ans"
    }), define("app/i18n/hr", {
        "postbox-text": "Napiši komentar ovdje (najmanje 3 znaka)",
        "postbox-author": "Ime (neobavezno)",
        "postbox-email": "E-mail (neobavezno)",
        "postbox-website": "Web stranica (neobavezno)",
        "postbox-preview": "Pregled",
        "postbox-edit": "Uredi",
        "postbox-submit": "Pošalji",
        "num-comments": "Jedan komentar\n{{ n }} komentara",
        "no-comments": "Još nema komentara",
        "comment-reply": "Odgovori",
        "comment-edit": "Uredi",
        "comment-save": "Spremi",
        "comment-delete": "Obriši",
        "comment-confirm": "Potvrdi",
        "comment-close": "Zatvori",
        "comment-cancel": "Odustani",
        "comment-deleted": "Komentar obrisan",
        "comment-queued": "Komentar u redu za provjeru.",
        "comment-anonymous": "Anonimno",
        "comment-hidden": "{{ n }} Skrivenih",
        "date-now": "upravo",
        "date-minute": "prije minutu\nprije {{ n }} minuta",
        "date-hour": "prije sat vremena\nprije {{ n }} sati",
        "date-day": "jučer\nprije {{ n }} dana",
        "date-week": "prošli tjedan\nprije {{ n }} tjedana",
        "date-month": "prošli mjesec\nprije {{ n }} mjeseci",
        "date-year": "prošle godine\nprije {{ n }} godina"
    }), define("app/i18n/hu", {
        "postbox-text": "Hozz\xe1sz\xf3l\xe1st ide \xedrd be (legal\xe1bb 3 betűt)",
        "postbox-author": "N\xe9v (nem k\xf6telező)",
        "postbox-email": "Email (nem k\xf6telező)",
        "postbox-website": "Website (nem k\xf6telező)",
        "postbox-preview": "Előn\xe9zet",
        "postbox-edit": "Szerekeszt\xe9s",
        "postbox-submit": "Elk\xfcld",
        "num-comments": "Egy hozz\xe1sz\xf3l\xe1s\n{{ n }} hozz\xe1sz\xf3l\xe1s",
        "no-comments": "Eddig nincs hozz\xe1sz\xf3l\xe1s",
        "comment-reply": "V\xe1lasz",
        "comment-edit": "Szerekeszt\xe9s",
        "comment-save": "Ment\xe9s",
        "comment-delete": "T\xf6rl\xe9s",
        "comment-confirm": "Megerős\xedt",
        "comment-close": "Bez\xe1r",
        "comment-cancel": "T\xf6rl\xe9s",
        "comment-deleted": "Hozz\xe1sz\xf3l\xe1s t\xf6r\xf6lve.",
        "comment-queued": "A hozz\xe1sz\xf3l\xe1st előbb ellenőrizz\xfck.",
        "comment-anonymous": "N\xe9vtelen",
        "comment-hidden": "{{ n }} rejtve",
        "date-now": "pillanatokkal ezelőtt",
        "date-minute": "egy perce\n{{ n }} perce",
        "date-hour": "egy \xf3r\xe1ja\n{{ n }} \xf3r\xe1ja",
        "date-day": "tegnap\n{{ n }} napja",
        "date-week": "m\xfalt h\xe9ten\n{{ n }} hete",
        "date-month": "m\xfalt h\xf3napban\n{{ n }} h\xf3napja",
        "date-year": "tavaly\n{{ n }} \xe9ve"
    }), define("app/i18n/ru", {
        "postbox-text": "Оставить комментарий (минимум 3 символа)",
        "postbox-author": "Имя (необязательно)",
        "postbox-email": "Email (необязательно)",
        "postbox-website": "Сайт (необязательно)",
        "postbox-preview": "Предпросмотр",
        "postbox-edit": "Правка",
        "postbox-submit": "Отправить",
        "postbox-notification": "Подписаться на уведомление об ответах",
        "num-comments": "{{ n }} комментарий\n{{ n }} комментария\n{{ n }} комментариев",
        "no-comments": "Пока нет комментариев",
        "comment-reply": "Ответить",
        "comment-edit": "Правка",
        "comment-save": "Сохранить",
        "comment-delete": "Удалить",
        "comment-confirm": "Подтвердить удаление",
        "comment-close": "Закрыть",
        "comment-cancel": "Отменить",
        "comment-deleted": "Комментарий удалён",
        "comment-queued": "Комментарий будет проверен модератором",
        "comment-anonymous": "Аноним",
        "comment-hidden": "Скрыт {{ n }} комментарий\nСкрыто {{ n }} комментария\nСкрыто {{ n }} комментариев",
        "date-now": "Только что",
        "date-minute": "{{ n }} минуту назад\n{{ n }} минуты назад\n{{ n }} минут назад",
        "date-hour": "{{ n }} час назад\n{{ n }} часа назад\n{{ n }} часов назад",
        "date-day": "{{ n }} день назад\n{{ n }} дня назад\n{{ n }} дней назад",
        "date-week": "{{ n }} неделю назад\n{{ n }} недели назад\n{{ n }} недель назад",
        "date-month": "{{ n }} месяц назад\n{{ n }} месяца назад\n{{ n }} месяцев назад",
        "date-year": "{{ n }} год назад\n{{ n }} года назад\n{{ n }} лет назад"
    }), define("app/i18n/it", {
        "postbox-text": "Scrivi un commento qui (minimo 3 caratteri)",
        "postbox-author": "Nome (opzionale)",
        "postbox-email": "E-mail (opzionale)",
        "postbox-website": "Sito web (opzionale)",
        "postbox-preview": "Anteprima",
        "postbox-edit": "Modifica",
        "postbox-submit": "Invia",
        "num-comments": "Un Commento\n{{ n }} Commenti",
        "no-comments": "Ancora Nessun Commento",
        "comment-reply": "Rispondi",
        "comment-edit": "Modifica",
        "comment-save": "Salva",
        "comment-delete": "Elimina",
        "comment-confirm": "Conferma",
        "comment-close": "Chiudi",
        "comment-cancel": "Cancella",
        "comment-deleted": "Commento eliminato.",
        "comment-queued": "Commento in coda per moderazione.",
        "comment-anonymous": "Anonimo",
        "comment-hidden": "{{ n }} Nascosto",
        "date-now": "poco fa",
        "date-minute": "un minuto fa\n{{ n }} minuti fa",
        "date-hour": "un ora fa\n{{ n }} ore fa",
        "date-day": "Ieri\n{{ n }} giorni fa",
        "date-week": "questa settimana\n{{ n }} settimane fa",
        "date-month": "questo mese\n{{ n }} mesi fa",
        "date-year": "quest'anno\n{{ n }} anni fa"
    }), define("app/i18n/eo", {
        "postbox-text": "Tajpu komenton ĉi-tie (almenaŭ 3 signoj)",
        "postbox-author": "Nomo (malnepra)",
        "postbox-email": "Retadreso (malnepra)",
        "postbox-website": "Retejo (malnepra)",
        "postbox-preview": "Antaŭrigardo",
        "postbox-edit": "Redaktu",
        "postbox-submit": "Sendu",
        "num-comments": "{{ n }} komento\n{{ n }} komentoj",
        "no-comments": "Neniu komento ankoraŭ",
        "comment-reply": "Respondu",
        "comment-edit": "Redaktu",
        "comment-save": "Savu",
        "comment-delete": "Forviŝu",
        "comment-confirm": "Konfirmu",
        "comment-close": "Fermu",
        "comment-cancel": "Malfaru",
        "comment-deleted": "Komento forviŝita",
        "comment-queued": "Komento en atendovico por kontrolo.",
        "comment-anonymous": "Sennoma",
        "comment-hidden": "{{ n }} kaŝitaj",
        "date-now": "ĵus nun",
        "date-minute": "antaŭ unu minuto\nantaŭ {{ n }} minutoj",
        "date-hour": "antaŭ unu horo\nantaŭ {{ n }} horoj",
        "date-day": "hieraŭ\nantaŭ {{ n }} tagoj",
        "date-week": "lasta semajno\nantaŭ {{ n }} semajnoj",
        "date-month": "lasta monato\nantaŭ {{ n }} monatoj",
        "date-year": "lasta jaro\nantaŭ {{ n }} jaroj"
    }), define("app/i18n/oc", {
        "postbox-text": "Escriure lo comentari aqu\xed (almens 3 caract\xe8rs)",
        "postbox-author": "Nom (opcional)",
        "postbox-email": "Corri\xe8l (opcional)",
        "postbox-website": "Site web (opcional)",
        "postbox-preview": "Apercebut",
        "postbox-edit": "Modificar",
        "postbox-submit": "Enviar",
        "postbox-notification": "S'abonar per corri\xe8l a las notificacions de responsas",
        "num-comments": "Un comentari\n{{ n }} comentaris",
        "no-comments": "Cap de comentari pel moment",
        "atom-feed": "Flux Atom",
        "comment-reply": "Respondre",
        "comment-edit": "Modificar",
        "comment-save": "Salvar",
        "comment-delete": "Suprimir",
        "comment-confirm": "Confirmar",
        "comment-close": "Tampar",
        "comment-cancel": "Anullar",
        "comment-deleted": "Comentari suprimit.",
        "comment-queued": "Comentari en esp\xe8ra de moderacion.",
        "comment-anonymous": "Anonim",
        "comment-hidden": "1 rescondut\n{{ n }} resconduts",
        "date-now": "ara meteis",
        "date-minute": "fa una minuta \nfa {{ n }} minutas",
        "date-hour": "fa una ora\nfa {{ n }} oras",
        "date-day": "I\xe8r\nfa {{ n }} jorns",
        "date-week": "la setmana passada\nfa {{ n }} setmanas",
        "date-month": "lo mes passat\nfa {{ n }} meses",
        "date-year": "l'an passat\nfa {{ n }} ans"
    }), define("app/i18n/pl", {
        "postbox-text": "Tutaj wpisz komentarz (co najmniej 3 znaki)",
        "postbox-author": "Imię/nick (opcjonalnie)",
        "postbox-email": "E-mail (opcjonalnie)",
        "postbox-website": "Strona (opcjonalnie)",
        "postbox-preview": "Podgląd",
        "postbox-edit": "Edytuj",
        "postbox-submit": "Wyślij",
        "postbox-notification": "Otrzymuj powiadomienia o odpowiedziach na e-mail",
        "num-comments": "Jeden komentarz\n{{ n }} komentarze\n{{ n }} komentarzy",
        "no-comments": "Nie ma jeszcze komentarzy",
        "atom-feed": "Kanał Atom",
        "comment-reply": "Odpowiedz",
        "comment-edit": "Edytuj",
        "comment-save": "Zapisz",
        "comment-delete": "Usuń",
        "comment-confirm": "Potwierdź",
        "comment-close": "Zamknij",
        "comment-cancel": "Anuluj",
        "comment-deleted": "Komentarz usunięty.",
        "comment-queued": "Komentarz w kolejce do moderacji.",
        "comment-anonymous": "Anonim",
        "comment-hidden": "{{ n }} ukryty\n{{ n }} ukryte\n{{ n }} ukrytych",
        "date-now": "teraz",
        "date-minute": "minutę temu\n{{ n }} minuty temu\n{{ n }} minut temu",
        "date-hour": "godzinę temu\n{{ n }} godziny temu\n{{ n }} godzin temu",
        "date-day": "wczoraj\n{{ n }} dni temu",
        "date-week": "w ubiegłym tygodniu\n{{ n }} tygodnie temu\n{{ n }} tygodni temu",
        "date-month": "w ubiegłym miesiącu\n{{ n }} miesiące temu\n{{ n }} miesięcy temu",
        "date-year": "w ubiegłym roku\n{{ n }} lata temu\n{{ n }} lat temu"
    }), define("app/i18n/pt_BR", {
        "postbox-text": "Digite seu coment\xe1rio aqui (pelo menos 3 letras)",
        "postbox-author": "Nome (opcional)",
        "postbox-email": "E-mail (opcional)",
        "postbox-website": "Website (opcional)",
        "postbox-preview": "Pr\xe9via",
        "postbox-edit": "Editar",
        "postbox-submit": "Enviar",
        "postbox-notification": "Receber emails de notifica\xe7\xe3o de respostas",
        "num-comments": "Um Coment\xe1rio\n{{ n }} Coment\xe1rios",
        "no-comments": "Nenhum coment\xe1rio ainda",
        "atom-feed": "Feed Atom",
        "comment-reply": "Responder",
        "comment-edit": "Editar",
        "comment-save": "Salvar",
        "comment-delete": "Excluir",
        "comment-confirm": "Confirmar",
        "comment-close": "Fechar",
        "comment-cancel": "Cancelar",
        "comment-deleted": "Coment\xe1rio apagado.",
        "comment-queued": "Coment\xe1rio na fila de modera\xe7\xe3o.",
        "comment-anonymous": "An\xf4nimo",
        "comment-hidden": "{{ n }} Oculto(s)",
        "date-now": "agora mesmo",
        "date-minute": "um minuto atr\xe1s\n{{ n }} minutos atr\xe1s",
        "date-hour": "uma hora atr\xe1s\n{{ n }} horas atr\xe1s",
        "date-day": "ontem\n{{ n }} dias",
        "date-week": "semana passada\n{{ n }} semanas atr\xe1s",
        "date-month": "m\xeas passado\n{{ n }} meses atr\xe1s",
        "date-year": "ano passado\n{{ n }} anos atr\xe1s"
    }), define("app/i18n/pt_PT", {
        "postbox-text": "Escreva o seu coment\xe1rio aqui (pelo menos 3 letras)",
        "postbox-author": "Nome (opcional)",
        "postbox-email": "E-mail (opcional)",
        "postbox-website": "Website (opcional)",
        "postbox-preview": "Testar",
        "postbox-edit": "Editar",
        "postbox-submit": "Enviar",
        "postbox-notification": "Receber emails de notifica\xe7\xe3o de respostas",
        "num-comments": "Um Coment\xe1rio\n{{ n }} Coment\xe1rios",
        "no-comments": "Nenhum coment\xe1rio ainda",
        "atom-feed": "Feed Atom",
        "comment-reply": "Responder",
        "comment-edit": "Editar",
        "comment-save": "Guardar",
        "comment-delete": "Excluir",
        "comment-confirm": "Confirmar",
        "comment-close": "Fechar",
        "comment-cancel": "Cancelar",
        "comment-deleted": "Coment\xe1rio apagado.",
        "comment-queued": "Coment\xe1rio na fila de modera\xe7\xe3o.",
        "comment-anonymous": "An\xf3nimo",
        "comment-hidden": "{{ n }} Oculto(s)",
        "date-now": "agora mesmo",
        "date-minute": "um minuto atr\xe1s\n{{ n }} minutos atr\xe1s",
        "date-hour": "uma hora atr\xe1s\n{{ n }} horas atr\xe1s",
        "date-day": "ontem\n{{ n }} dias",
        "date-week": "semana passada\n{{ n }} semanas atr\xe1s",
        "date-month": "m\xeas passado\n{{ n }} meses atr\xe1s",
        "date-year": "ano passado\n{{ n }} anos atr\xe1s"
    }), define("app/i18n/sk", {
        "postbox-text": "Sem nap\xedšte svoj koment\xe1r (minim\xe1lne 3 znaky)",
        "postbox-author": "Meno (nepovinn\xe9)",
        "postbox-email": "E-mail (nepovinn\xfd)",
        "postbox-website": "Web (nepovinn\xfd)",
        "postbox-preview": "N\xe1hľad",
        "postbox-edit": "Upraviť",
        "postbox-submit": "Publikovať",
        "num-comments": "Jeden koment\xe1r\n{{ n }} koment\xe1re\n{{ n }} koment\xe1rov",
        "no-comments": "Zatiaľ bez koment\xe1rov",
        "comment-reply": "Odpovedať",
        "comment-edit": "Upraviť",
        "comment-save": "Uložiť",
        "comment-delete": "Zmazať",
        "comment-confirm": "Potvrdit",
        "comment-close": "Zavrieť",
        "comment-cancel": "Zrušiť",
        "comment-deleted": "Koment\xe1r bol vymazan\xfd",
        "comment-queued": "Koment\xe1r zaraden\xfd na schv\xe1lenie",
        "comment-anonymous": "Anonym",
        "comment-hidden": "{{ n }} skryt\xfd\n{{ n }} skryt\xe9\n{{ n }} skryt\xfdch",
        "date-now": "pr\xe1ve teraz",
        "date-minute": "pred min\xfatou\npred {{ n }} min\xfatami",
        "date-hour": "pred hodinou\npred {{ n }} hodinami",
        "date-day": "včera\npred {{ n }} dňami",
        "date-week": "minul\xfd t\xfdždeň\npred {{ n }} t\xfdždňami",
        "date-month": "minul\xfd mesiac\npred {{ n }} mesiacmi",
        "date-year": "minul\xfd rok\npred {{ n }} rokmi"
    }), define("app/i18n/sv", {
        "postbox-text": "Skriv din kommentar h\xe4r (minst 3 tecken)",
        "postbox-author": "Namn (frivilligt)",
        "postbox-email": "E-mail (frivilligt)",
        "postbox-website": "Hemsida (frivilligt)",
        "postbox-preview": "F\xf6rhandsvisning",
        "postbox-edit": "Redigera",
        "postbox-submit": "Skicka",
        "num-comments": "En kommentar\n{{ n }} kommentarer",
        "no-comments": "Inga kommentarer \xe4n",
        "comment-reply": "Svara",
        "comment-edit": "Redigera",
        "comment-save": "Spara",
        "comment-delete": "Radera",
        "comment-confirm": "Bekr\xe4fta",
        "comment-close": "St\xe4ng",
        "comment-cancel": "Avbryt",
        "comment-deleted": "Kommentar raderad.",
        "comment-queued": "Kommentaren inv\xe4ntar granskning.",
        "comment-anonymous": "Anonym",
        "comment-hidden": "{{ n }} G\xf6md",
        "date-now": "just nu",
        "date-minute": "en minut sedan\n{{ n }} minuter sedan",
        "date-hour": "en timme sedan\n{{ n }} timmar sedan",
        "date-day": "ig\xe5r\n{{ n }} dagar sedan",
        "date-week": "f\xf6rra veckan\n{{ n }} veckor sedan",
        "date-month": "f\xf6rra m\xe5naden\n{{ n }} m\xe5nader sedan",
        "date-year": "f\xf6rra \xe5ret\n{{ n }} \xe5r sedan"
    }), define("app/i18n/nl", {
        "postbox-text": "Typ reactie hier (minstens 3 karakters)",
        "postbox-author": "Naam (optioneel)",
        "postbox-email": "E-mail (optioneel)",
        "postbox-website": "Website (optioneel)",
        "postbox-preview": "Voorbeeld",
        "postbox-edit": "Bewerken",
        "postbox-submit": "Versturen",
        "num-comments": "\xc9\xe9n reactie\n{{ n }} reacties",
        "no-comments": "Nog geen reacties",
        "comment-reply": "Beantwoorden",
        "comment-edit": "Bewerken",
        "comment-save": "Opslaan",
        "comment-delete": "Verwijderen",
        "comment-confirm": "Bevestigen",
        "comment-close": "Sluiten",
        "comment-cancel": "Annuleren",
        "comment-deleted": "Reactie verwijderd.",
        "comment-queued": "Reactie staat in de wachtrij voor goedkeuring.",
        "comment-anonymous": "Anoniem",
        "comment-hidden": "{{ n }} verborgen",
        "date-now": "zojuist",
        "date-minute": "een minuut geleden\n{{ n }} minuten geleden",
        "date-hour": "een uur geleden\n{{ n }} uur geleden",
        "date-day": "gisteren\n{{ n }} dagen geleden",
        "date-week": "vorige week\n{{ n }} weken geleden",
        "date-month": "vorige maand\n{{ n }} maanden geleden",
        "date-year": "vorig jaar\n{{ n }} jaar geleden"
    }), define("app/i18n/el_GR", {
        "postbox-text": "Γράψτε το σχόλιο εδώ (τουλάχιστον 3 χαρακτήρες)",
        "postbox-author": "Όνομα (προαιρετικό)",
        "postbox-email": "E-mail (προαιρετικό)",
        "postbox-website": "Ιστοσελίδα (προαιρετικό)",
        "postbox-preview": "Πρεμιέρα",
        "postbox-edit": "Επεξεργασία",
        "postbox-submit": "Υποβολή",
        "num-comments": "Ένα σχόλιο\n{{ n }} σχόλια",
        "no-comments": "Δεν υπάρχουν σχόλια",
        "comment-reply": "Απάντηση",
        "comment-edit": "Επεξεργασία",
        "comment-save": "Αποθήκευση",
        "comment-delete": "Διαγραφή",
        "comment-confirm": "Επιβεβαίωση",
        "comment-close": "Κλείσιμο",
        "comment-cancel": "Ακύρωση",
        "comment-deleted": "Διαγραμμένο σχόλιο ",
        "comment-queued": "Το σχόλιο αναμένει έγκριση",
        "comment-anonymous": "Ανώνυμος",
        "comment-hidden": "{{ n }} Κρυμμένα",
        "date-now": "τώρα",
        "date-minute": "πριν ένα λεπτό\nπριν {{ n }} λεπτά",
        "date-hour": "πριν μία ώρα\nπριν {{ n }} ώρες",
        "date-day": "Χτες\nπριν {{ n }} μέρες",
        "date-week": "την προηγούμενη εβδομάδα\nπριν {{ n }} εβδομάδες",
        "date-month": "τον προηγούμενο μήνα\nπριν {{ n }} μήνες",
        "date-year": "πέρυσι\nπριν {{ n }} χρόνια"
    }), define("app/i18n/es", {
        "postbox-text": "Escriba su comentario aqu\xed (al menos 3 caracteres)",
        "postbox-author": "Nombre (opcional)",
        "postbox-email": "E-mail (opcional)",
        "postbox-website": "Sitio web (opcional)",
        "postbox-preview": "Vista preliminar",
        "postbox-edit": "Editar",
        "postbox-submit": "Enviar",
        "num-comments": "Un Comentario\n{{ n }} Comentarios",
        "no-comments": "Sin Comentarios Todav\xeda",
        "comment-reply": "Responder",
        "comment-edit": "Editar",
        "comment-save": "Guardar",
        "comment-delete": "Eliminar",
        "comment-confirm": "Confirmar",
        "comment-close": "Cerrar",
        "comment-cancel": "Cancelar",
        "comment-deleted": "Comentario eliminado.",
        "comment-queued": "Comentario en espera para moderaci\xf3n.",
        "comment-anonymous": "An\xf3nimo",
        "comment-hidden": "{{ n }} Oculto(s)",
        "date-now": "ahora",
        "date-minute": "hace un minuto\nhace {{ n }} minutos",
        "date-hour": "hace una hora\nhace {{ n }} horas",
        "date-day": "ayer\nHace {{ n }} d\xedas",
        "date-week": "la semana pasada\nhace {{ n }} semanas",
        "date-month": "el mes pasado\nhace {{ n }} meses",
        "date-year": "el a\xf1o pasado\nhace {{ n }} a\xf1os"
    }), define("app/i18n/vi", {
        "postbox-text": "Nhập b\xecnh luận tại đ\xe2y (tối thiểu 3 k\xfd tự)",
        "postbox-author": "T\xean (t\xf9y chọn)",
        "postbox-email": "E-mail (t\xf9y chọn)",
        "postbox-website": "Website (t\xf9y chọn)",
        "postbox-preview": "Xem trước",
        "postbox-edit": "Sửa",
        "postbox-submit": "Gửi",
        "num-comments": "Một b\xecnh luận\n{{ n }} b\xecnh luận",
        "no-comments": "Chưa c\xf3 b\xecnh luận n\xe0o",
        "comment-reply": "Trả lời",
        "comment-edit": "Sửa",
        "comment-save": "Lưu",
        "comment-delete": "X\xf3a",
        "comment-confirm": "X\xe1c nhận",
        "comment-close": "Đ\xf3ng",
        "comment-cancel": "Hủy",
        "comment-deleted": "Đ\xe3 x\xf3a b\xecnh luận.",
        "comment-queued": "B\xecnh luận đang chờ duyệt",
        "comment-anonymous": "Nặc danh",
        "comment-hidden": "{{ n }} đ\xe3 ẩn",
        "date-now": "vừa mới",
        "date-minute": "một ph\xfat trước\n{{ n }} ph\xfat trước",
        "date-hour": "một giờ trước\n{{ n }} giờ trước",
        "date-day": "H\xf4m qua\n{{ n }} ng\xe0y trước",
        "date-week": "Tuần qua\n{{ n }} tuần trước",
        "date-month": "Th\xe1ng trước\n{{ n }} th\xe1ng trước",
        "date-year": "Năm trước\n{{ n }} năm trước"
    }), define("app/i18n/zh_CN", {
        "postbox-text": "在此输入评论 (最少 3 个字符)",
        "postbox-author": "名字 (可选)",
        "postbox-email": "电子邮箱 (可选)",
        "postbox-website": "网站 (可选)",
        "postbox-preview": "预览",
        "postbox-edit": "编辑",
        "postbox-submit": "提交",
        "postbox-notification": "有新回复时发送邮件通知",
        "num-comments": "1 条评论\n{{ n }} 条评论",
        "no-comments": "还没有评论",
        "comment-reply": "回复",
        "comment-edit": "编辑",
        "comment-save": "保存",
        "comment-delete": "删除",
        "comment-confirm": "确认",
        "comment-close": "关闭",
        "comment-cancel": "取消",
        "comment-deleted": "评论已删除.",
        "comment-queued": "评论待审核.",
        "comment-anonymous": "匿名",
        "comment-hidden": "{{ n }} 条评论已隐藏",
        "date-now": "刚刚",
        "date-minute": "1 分钟前\n{{ n }} 分钟前",
        "date-hour": "1 小时前\n{{ n }} 小时前",
        "date-day": "昨天\n{{ n }} 天前",
        "date-week": "上周\n{{ n }} 周前",
        "date-month": "上个月\n{{ n }} 个月前",
        "date-year": "去年\n{{ n }} 年前"
    }), define("app/i18n/zh_TW", {
        "postbox-text": "在此輸入留言 (至少 3 個字元)",
        "postbox-author": "名稱 (非必填)",
        "postbox-email": "電子信箱 (非必填)",
        "postbox-website": "個人網站 (非必填)",
        "postbox-preview": "預覽",
        "postbox-edit": "編輯",
        "postbox-submit": "送出",
        "postbox-notification": "訂閱回覆的電子郵件通知",
        "num-comments": "1 則留言\n{{ n }} 則留言",
        "no-comments": "尚無留言",
        "comment-reply": "回覆",
        "comment-edit": "編輯",
        "comment-save": "儲存",
        "comment-delete": "刪除",
        "comment-confirm": "確認",
        "comment-close": "關閉",
        "comment-cancel": "取消",
        "comment-deleted": "留言已刪",
        "comment-queued": "留言待審",
        "comment-anonymous": "匿名",
        "comment-hidden": "{{ n }} 則隱藏留言",
        "date-now": "剛剛",
        "date-minute": "1 分鐘前\n{{ n }} 分鐘前",
        "date-hour": "1 小時前\n{{ n }} 小時前",
        "date-day": "昨天\n{{ n }} 天前",
        "date-week": "上週\n{{ n }} 週前",
        "date-month": "上個月\n{{ n }} 個月前",
        "date-year": "去年\n{{ n }} 年前"
    }), define("app/i18n", [
        "app/config",
        "app/i18n/bg",
        "app/i18n/cs",
        "app/i18n/da",
        "app/i18n/de",
        "app/i18n/en",
        "app/i18n/fa",
        "app/i18n/fi",
        "app/i18n/fr",
        "app/i18n/hr",
        "app/i18n/hu",
        "app/i18n/ru",
        "app/i18n/it",
        "app/i18n/eo",
        "app/i18n/oc",
        "app/i18n/pl",
        "app/i18n/pt_BR",
        "app/i18n/pt_PT",
        "app/i18n/sk",
        "app/i18n/sv",
        "app/i18n/nl",
        "app/i18n/el_GR",
        "app/i18n/es",
        "app/i18n/vi",
        "app/i18n/zh_CN",
        "app/i18n/zh_CN",
        "app/i18n/zh_TW"
    ], function(e, t, n, o, i, a, r, s, m, c, d, p, l, u, f, h, v, b, x, w, g, y, k, j, z, C, S) {
        "use strict";
        var E = function(e) {
            switch(e){
                case "bg":
                case "cs":
                case "da":
                case "de":
                case "el":
                case "en":
                case "es":
                case "eo":
                case "fa":
                case "fi":
                case "hr":
                case "hu":
                case "it":
                case "pt_BR":
                case "pt_PT":
                case "sv":
                case "nl":
                case "vi":
                case "zh":
                case "zh_CN":
                case "zh_TW":
                    return function(e, t) {
                        return e[1 === t ? 0 : 1];
                    };
                case "fr":
                    return function(e, t) {
                        return e[t > 1 ? 1 : 0];
                    };
                case "ru":
                    return function(e, t) {
                        return t % 10 == 1 && t % 100 != 11 ? e[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? e[1] : void 0 !== e[2] ? e[2] : e[1];
                    };
                case "oc":
                    return function(e, t) {
                        return e[t > 1 ? 1 : 0];
                    };
                case "pl":
                    return function(e, t) {
                        return 1 === t ? e[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? e[1] : void 0 !== e[2] ? e[2] : e[1];
                    };
                case "sk":
                    return function(e, t) {
                        return 1 === t ? e[0] : 2 === t || 3 === t || 4 === t ? e[1] : void 0 !== e[2] ? e[2] : e[1];
                    };
                default:
                    return null;
            }
        }, A = e.lang;
        E(A) || (A = "en");
        var T = {
            bg: t,
            cs: n,
            da: o,
            de: i,
            el: y,
            en: a,
            eo: u,
            es: k,
            fa: r,
            fi: s,
            fr: m,
            it: l,
            hr: c,
            hu: d,
            oc: f,
            pl: h,
            pt: v,
            pt_BR: v,
            pt_PT: b,
            ru: p,
            sk: x,
            sv: w,
            nl: g,
            vi: j,
            zh: C,
            zh_CN: C,
            zh_TW: S
        }, N = E(A), O = function(t) {
            return e[t + "-text-" + A] || T[A][t] || a[t] || "???";
        };
        return {
            lang: A,
            translate: O,
            pluralize: function(e, t) {
                var n;
                return n = O(e), n.indexOf("\n") > -1 && (n = N(n.split("\n"), +t)), n ? n.replace("{{ n }}", +t) : n;
            }
        };
    }), define("app/lib/promise", [], function() {
        "use strict";
        var e = function(e) {
            console.log(e);
        }, t = function() {
            this.success = [], this.errors = [];
        };
        t.prototype.then = function(t, n) {
            this.success.push(t), n ? this.errors.push(n) : this.errors.push(e);
        };
        var n = function() {
            this.promise = new t;
        };
        n.prototype = {
            promise: t,
            resolve: function(e) {
                this.promise.success.forEach(function(t) {
                    window.setTimeout(function() {
                        t(e);
                    }, 0);
                });
            },
            reject: function(e) {
                this.promise.errors.forEach(function(t) {
                    window.setTimeout(function() {
                        t(e);
                    }, 0);
                });
            }
        };
        var o = function(e, n) {
            return e instanceof t ? e.then(n) : n(e);
        };
        return {
            defer: function() {
                return new n;
            },
            when: o
        };
    }), define("app/globals", [], function() {
        "use strict";
        var e = function() {
            this.values = [];
        };
        return e.prototype.update = function(e) {
            this.values.push((new Date).getTime() - e.getTime());
        }, e.prototype.localTime = function() {
            return new Date((new Date).getTime() - this.values.reduce(function(e, t) {
                return e + t;
            }) / this.values.length);
        }, {
            offset: new e
        };
    }), define("app/api", [
        "app/lib/promise",
        "app/globals"
    ], function(e, t) {
        "use strict";
        for(var n, o, i = function() {
            return window.location.pathname;
        }, a = document.getElementsByTagName("script"), r = 0; r < a.length; r++)if (a[r].hasAttribute("data-isso")) {
            o = a[r].getAttribute("data-isso");
            break;
        }
        if (!o) {
            for(r = 0; r < a.length; r++)if (a[r].getAttribute("async") || a[r].getAttribute("defer")) throw "Isso's automatic configuration detection failed, please refer to https://github.com/posativ/isso#client-configuration and add a custom `data-isso` attribute.";
            n = a[a.length - 1], o = n.src.substring(0, n.src.length - 16);
        }
        "/" === o[o.length - 1] && (o = o.substring(0, o.length - 1));
        var s = function(e, n, o, i, a) {
            function r() {
                var e = s.getResponseHeader("Date");
                null !== e && t.offset.update(new Date(e));
                var n = s.getResponseHeader("X-Set-Cookie");
                n && n.match(/^isso-/) && (document.cookie = n), s.status >= 500 ? a && a(s.body) : i({
                    status: s.status,
                    body: s.responseText
                });
            }
            var s = new XMLHttpRequest;
            try {
                s.open(e, n, !0), s.withCredentials = !0, s.setRequestHeader("Content-Type", "application/json"), s.onreadystatechange = function() {
                    4 === s.readyState && r();
                };
            } catch (e1) {
                (a || console.log)(e1.message);
            }
            s.send(o);
        }, m = function(e) {
            var t = "";
            for(var n in e)e.hasOwnProperty(n) && null !== e[n] && void 0 !== e[n] && (t += n + "=" + encodeURIComponent(e[n]) + "&");
            return t.substring(0, t.length - 1);
        };
        return {
            endpoint: o,
            salt: "Eech7co8Ohloopo9Ol6baimi",
            create: function(t, n) {
                var a = e.defer();
                return s("POST", o + "/new?" + m({
                    uri: t || i()
                }), JSON.stringify(n), function(e) {
                    201 === e.status || 202 === e.status ? a.resolve(JSON.parse(e.body)) : a.reject(e.body);
                }), a.promise;
            },
            modify: function(t, n) {
                var i = e.defer();
                return s("PUT", o + "/id/" + t, JSON.stringify(n), function(e) {
                    403 === e.status ? i.reject("Not authorized to modify this comment!") : 200 === e.status ? i.resolve(JSON.parse(e.body)) : i.reject(e.body);
                }), i.promise;
            },
            remove: function(t) {
                var n = e.defer();
                return s("DELETE", o + "/id/" + t, null, function(e) {
                    403 === e.status ? n.reject("Not authorized to remove this comment!") : 200 === e.status ? n.resolve(null === JSON.parse(e.body)) : n.reject(e.body);
                }), n.promise;
            },
            view: function(t, n) {
                var i = e.defer();
                return s("GET", o + "/id/" + t + "?" + m({
                    plain: n
                }), null, function(e) {
                    i.resolve(JSON.parse(e.body));
                }), i.promise;
            },
            fetch: function(t, n, a, r, c) {
                void 0 === n && (n = "inf"), void 0 === a && (a = "inf"), void 0 === r && (r = null);
                var d = {
                    uri: t || i(),
                    after: c,
                    parent: r
                };
                "inf" !== n && (d.limit = n), "inf" !== a && (d.nested_limit = a);
                var p = e.defer();
                return s("GET", o + "/?" + m(d), null, function(e) {
                    200 === e.status ? p.resolve(JSON.parse(e.body)) : 404 === e.status ? p.resolve({
                        total_replies: 0
                    }) : p.reject(e.body);
                }), p.promise;
            },
            count: function(t) {
                var n = e.defer();
                return s("POST", o + "/count", JSON.stringify(t), function(e) {
                    200 === e.status ? n.resolve(JSON.parse(e.body)) : n.reject(e.body);
                }), n.promise;
            },
            like: function(t) {
                var n = e.defer();
                return s("POST", o + "/id/" + t + "/like", null, function(e) {
                    n.resolve(JSON.parse(e.body));
                }), n.promise;
            },
            dislike: function(t) {
                var n = e.defer();
                return s("POST", o + "/id/" + t + "/dislike", null, function(e) {
                    n.resolve(JSON.parse(e.body));
                }), n.promise;
            },
            feed: function(e) {
                return o + "/feed?" + m({
                    uri: e || i()
                });
            },
            preview: function(t) {
                var n = e.defer();
                return s("POST", o + "/preview", JSON.stringify({
                    text: t
                }), function(e) {
                    200 === e.status ? n.resolve(JSON.parse(e.body).text) : n.reject(e.body);
                }), n.promise;
            }
        };
    }), define("app/dom", [], function() {
        "use strict";
        function e(e) {
            this.obj = e, this.replace = function(t) {
                var o = n.htmlify(t);
                return e.parentNode.replaceChild(o.obj, e), o;
            }, this.prepend = function(t) {
                var o = n.htmlify(t);
                return e.insertBefore(o.obj, e.firstChild), o;
            }, this.append = function(t) {
                var o = n.htmlify(t);
                return e.appendChild(o.obj), o;
            }, this.insertAfter = function(t) {
                var o = n.htmlify(t);
                return e.parentNode.insertBefore(o.obj, e.nextSibling), o;
            }, this.on = function(t, n, o) {
                e.addEventListener(t, function(e) {
                    n(e), (void 0 === o || o) && e.preventDefault();
                });
            }, this.toggle = function(e, n, o) {
                var i = new t(n, o);
                this.on(e, function() {
                    i.next();
                });
            }, this.detach = function() {
                return e.parentNode.removeChild(this.obj), this;
            }, this.remove = function() {
                e.parentNode.removeChild(this.obj);
            }, this.show = function() {
                e.style.display = "block";
            }, this.hide = function() {
                e.style.display = "none";
            }, this.setText = function(t) {
                e.textContent = t;
            }, this.setHtml = function(t) {
                e.innerHTML = t;
            }, this.blur = function() {
                e.blur();
            }, this.focus = function() {
                e.focus();
            }, this.scrollIntoView = function(t) {
                e.scrollIntoView(t);
            }, this.checked = function() {
                return e.checked;
            }, this.setAttribute = function(t, n) {
                e.setAttribute(t, n);
            }, this.getAttribute = function(t) {
                return e.getAttribute(t);
            }, this.classList = e.classList, Object.defineProperties(this, {
                textContent: {
                    get: function() {
                        return e.textContent;
                    },
                    set: function(t) {
                        e.textContent = t;
                    }
                },
                innerHTML: {
                    get: function() {
                        return e.innerHTML;
                    },
                    set: function(t) {
                        e.innerHTML = t;
                    }
                },
                value: {
                    get: function() {
                        return e.value;
                    },
                    set: function(t) {
                        e.value = t;
                    }
                },
                placeholder: {
                    get: function() {
                        return e.placeholder;
                    },
                    set: function(t) {
                        e.placeholder = t;
                    }
                }
            });
        }
        var t = function(e, t) {
            this.state = !1, this.next = function() {
                this.state ? (this.state = !1, t(this)) : (this.state = !0, e(this));
            }, this.wait = function() {
                this.state = !this.state;
            };
        }, n = function(t, n, o) {
            void 0 === o && (o = !0), n || (n = window.document), n instanceof e && (n = n.obj);
            var i = [].slice.call(n.querySelectorAll(t), 0);
            return 0 === i.length ? null : 1 === i.length && o ? new e(i[0]) : (i = [].slice.call(i, 0), i.map(function(t) {
                return new e(t);
            }));
        };
        return n.htmlify = function(t) {
            if (t instanceof e) return t;
            if (t instanceof window.Element) return new e(t);
            var o = n.new("div");
            return o.innerHTML = t, new e(o.firstChild);
        }, n.new = function(e, t) {
            var n = document.createElement(e.split(".")[0]);
            return e.split(".").slice(1).forEach(function(e) {
                n.classList.add(e);
            }), [
                "A",
                "LINK"
            ].indexOf(n.nodeName) > -1 && (n.href = "#"), t || 0 === t || (t = ""), [
                "TEXTAREA",
                "INPUT"
            ].indexOf(n.nodeName) > -1 ? n.value = t : n.textContent = t, n;
        }, n.each = function(e, t) {
            Array.prototype.forEach.call(document.getElementsByTagName(e), t);
        }, n;
    }), define("app/utils", [
        "app/i18n"
    ], function(e) {
        "use strict";
        var t, n = function(e) {
            return (document.cookie.match("(^|; )" + e + "=([^;]*)") || 0)[2];
        }, o = function(e, t, n) {
            return n = n || "0", e += "", e.length >= t ? e : new Array(t - e.length + 1).join(n) + e;
        }, i = function(t, n) {
            var o = (t.getTime() - n.getTime()) / 1e3;
            (isNaN(o) || o < 0) && (o = 0);
            var i = Math.floor(o / 60), a = Math.floor(i / 60), r = Math.floor(a / 24);
            return o <= 45 && e.translate("date-now") || o <= 90 && e.pluralize("date-minute", 1) || i <= 45 && e.pluralize("date-minute", i) || i <= 90 && e.pluralize("date-hour", 1) || a <= 22 && e.pluralize("date-hour", a) || a <= 36 && e.pluralize("date-day", 1) || r <= 5 && e.pluralize("date-day", r) || r <= 8 && e.pluralize("date-week", 1) || r <= 21 && e.pluralize("date-week", Math.floor(r / 7)) || r <= 45 && e.pluralize("date-month", 1) || r <= 345 && e.pluralize("date-month", Math.floor(r / 30)) || r <= 547 && e.pluralize("date-year", 1) || e.pluralize("date-year", Math.floor(r / 365.25));
        }, a = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        }, r = function(e) {
            return String(e).replace(/[&<>"'\/]/g, function(e) {
                return a[e];
            });
        }, s = function(e) {
            var t = document.createElement("div");
            return t.innerHTML = e.replace(/<div><br><\/div>/gi, "<br>").replace(/<div>/gi, "<br>").replace(/<br>/gi, "\n").replace(/&nbsp;/gi, " "), t.textContent.trim();
        }, m = function(e) {
            return e = r(e), e.replace(/\n\n/gi, "<br><div><br></div>").replace(/\n/gi, "<br>");
        };
        try {
            localStorage.setItem("x", "y"), localStorage.removeItem("x"), t = localStorage;
        } catch (e1) {
            t = function(e) {
                return {
                    setItem: function(t, n) {
                        e[t] = n;
                    },
                    getItem: function(t) {
                        return void 0 !== e[t] ? e[t] : null;
                    },
                    removeItem: function(t) {
                        delete e[t];
                    }
                };
            }({});
        }
        return {
            cookie: n,
            pad: o,
            ago: i,
            text: s,
            detext: m,
            localStorageImpl: t
        };
    }), function(e) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
        else if ("function" == typeof define && define.amd) define("libjs-jade-runtime", [], e);
        else {
            var t;
            t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.jade = e();
        }
    }(function() {
        return (function e(t, n, o) {
            function i(r, s) {
                if (!n[r]) {
                    if (!t[r]) {
                        var m = "function" == typeof require && require;
                        if (!s && m) return m(r, !0);
                        if (a) return a(r, !0);
                        var c = new Error("Cannot find module '" + r + "'");
                        throw c.code = "MODULE_NOT_FOUND", c;
                    }
                    var d = n[r] = {
                        exports: {}
                    };
                    t[r][0].call(d.exports, function(e) {
                        var n = t[r][1][e];
                        return i(n || e);
                    }, d, d.exports, e, t, n, o);
                }
                return n[r].exports;
            }
            for(var a = "function" == typeof require && require, r = 0; r < o.length; r++)i(o[r]);
            return i;
        })({
            1: [
                function(e, t, n) {
                    "use strict";
                    function o(e) {
                        return null != e && "" !== e;
                    }
                    function i(e) {
                        return (Array.isArray(e) ? e.map(i) : e && "object" == typeof e ? Object.keys(e).filter(function(t) {
                            return e[t];
                        }) : [
                            e
                        ]).filter(o).join(" ");
                    }
                    function a(e) {
                        return s[e] || e;
                    }
                    function r(e) {
                        var t = String(e).replace(m, a);
                        return t === "" + e ? e : t;
                    }
                    n.merge = function e(t, n) {
                        if (1 === arguments.length) {
                            for(var i = t[0], a = 1; a < t.length; a++)i = e(i, t[a]);
                            return i;
                        }
                        var r = t.class, s = n.class;
                        (r || s) && (r = r || [], s = s || [], Array.isArray(r) || (r = [
                            r
                        ]), Array.isArray(s) || (s = [
                            s
                        ]), t.class = r.concat(s).filter(o));
                        for(var m in n)"class" != m && (t[m] = n[m]);
                        return t;
                    }, n.joinClasses = i, n.cls = function(e, t) {
                        for(var o = [], a = 0; a < e.length; a++)t && t[a] ? o.push(n.escape(i([
                            e[a]
                        ]))) : o.push(i(e[a]));
                        var r = i(o);
                        return r.length ? ' class="' + r + '"' : "";
                    }, n.style = function(e) {
                        return e && "object" == typeof e ? Object.keys(e).map(function(t) {
                            return t + ":" + e[t];
                        }).join(";") : e;
                    }, n.attr = function(e, t, o, i) {
                        return "style" === e && (t = n.style(t)), "boolean" == typeof t || null == t ? t ? " " + (i ? e : e + '="' + e + '"') : "" : 0 == e.indexOf("data") && "string" != typeof t ? (-1 !== JSON.stringify(t).indexOf("&") && console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"), t && "function" == typeof t.toISOString && console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0"), " " + e + "='" + JSON.stringify(t).replace(/'/g, "&apos;") + "'") : o ? (t && "function" == typeof t.toISOString && console.warn("Jade will stringify dates in ISO form after 2.0.0"), " " + e + '="' + n.escape(t) + '"') : (t && "function" == typeof t.toISOString && console.warn("Jade will stringify dates in ISO form after 2.0.0"), " " + e + '="' + t + '"');
                    }, n.attrs = function(e, t) {
                        var o = [], a = Object.keys(e);
                        if (a.length) for(var r = 0; r < a.length; ++r){
                            var s = a[r], m = e[s];
                            "class" == s ? (m = i(m)) && o.push(" " + s + '="' + m + '"') : o.push(n.attr(s, m, !1, t));
                        }
                        return o.join("");
                    };
                    var s = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;"
                    }, m = /[&<>"]/g;
                    n.escape = r, n.rethrow = function t(n, o, i, a) {
                        if (!(n instanceof Error)) throw n;
                        if (!("undefined" == typeof window && o || a)) throw n.message += " on line " + i, n;
                        try {
                            a = a || e("fs").readFileSync(o, "utf8");
                        } catch (e1) {
                            t(n, null, i);
                        }
                        var r = 3, s = a.split("\n"), m = Math.max(i - r, 0), c = Math.min(s.length, i + r), r = s.slice(m, c).map(function(e, t) {
                            var n = t + m + 1;
                            return (n == i ? "  > " : "    ") + n + "| " + e;
                        }).join("\n");
                        throw n.path = o, n.message = (o || "Jade") + ":" + i + "\n" + r + "\n\n" + n.message, n;
                    }, n.DebugItem = function(e, t) {
                        this.lineno = e, this.filename = t;
                    };
                },
                {
                    fs: 2
                }
            ],
            2: [
                function(e, t, n) {},
                {}
            ]
        }, {}, [
            1
        ])(1);
    }), define("jade", {
        load: function(e) {
            throw new Error("Dynamic load not allowed: " + e);
        }
    }), define("jade!app/text/postbox", function() {
        var e = function(e) {
            return function(t) {
                var n, o = [], i = t || {};
                return (function(t, i, a, r) {
                    o.push('<div class="isso-postbox"><div class="form-wrapper"><div class="textarea-wrapper"><div contenteditable="true" class="textarea placeholder">' + e.escape(null == (n = a("postbox-text")) ? "" : n) + '</div><div class="preview"><div class="isso-comment"><div class="text-wrapper"><div class="text"></div></div></div></div></div><section class="auth-section"><p class="input-wrapper"><input type="text" name="author"' + e.attr("placeholder", a("postbox-author"), !0, !1) + e.attr("value", null !== t ? "" + t : "", !0, !1) + '/></p><p class="input-wrapper"><input type="email" name="email"' + e.attr("placeholder", a("postbox-email"), !0, !1) + e.attr("value", null != i ? "" + i : "", !0, !1) + '/></p><p class="input-wrapper"><input type="text" name="website"' + e.attr("placeholder", a("postbox-website"), !0, !1) + e.attr("value", null != r ? "" + r : "", !0, !1) + '/></p><p class="post-action"><input type="submit"' + e.attr("value", a("postbox-submit"), !0, !1) + '/></p><p class="post-action"><input type="button" name="preview"' + e.attr("value", a("postbox-preview"), !0, !1) + '/></p><p class="post-action"><input type="button" name="edit"' + e.attr("value", a("postbox-edit"), !0, !1) + '/></p></section><section class="notification-section"><label><input type="checkbox" name="notification"/>' + e.escape(null == (n = a("postbox-notification")) ? "" : n) + "</label></section></div></div>");
                }).call(this, "author" in i ? i.author : "undefined" != typeof author ? author : void 0, "email" in i ? i.email : "undefined" != typeof email ? email : void 0, "i18n" in i ? i.i18n : "undefined" != typeof i18n ? i18n : void 0, "website" in i ? i.website : "undefined" != typeof website ? website : void 0), o.join("");
            };
        };
        return e.compiled = !0, e;
    }), define("jade!app/text/comment", function() {
        var e = function(e) {
            return function(t) {
                var n, o = [], i = t || {};
                return (function(t, i, a, r, s, m, c) {
                    o.push("<div" + e.attr("id", "isso-" + i.id, !0, !1) + ' class="isso-comment">'), a.gravatar && o.push('<div class="avatar"><img' + e.attr("src", "" + i.gravatar_image, !0, !1) + "/></div>"), a.avatar && o.push('<div class="avatar"><svg' + e.attr("data-hash", "" + i.hash, !0, !1) + "></svg></div>"), o.push('<div class="text-wrapper"><div role="meta" class="isso-comment-header">'), t(i.website) ? o.push("<a" + e.attr("href", "" + i.website, !0, !1) + ' rel="nofollow" class="author">' + e.escape(null == (n = t(i.author) ? i.author : m("comment-anonymous")) ? "" : n) + "</a>") : o.push('<span class="author">' + e.escape(null == (n = t(i.author) ? i.author : m("comment-anonymous")) ? "" : n) + "</span>"), o.push('<span class="spacer">&bull;</span><a' + e.attr("href", "#isso-" + i.id, !0, !1) + ' class="permalink"><time' + e.attr("title", "" + s(i.created), !0, !1) + e.attr("datetime", "" + r(i.created), !0, !1) + '></time></a><span class="note">' + e.escape(null == (n = 2 == i.mode ? m("comment-queued") : 4 == i.mode ? m("comment-deleted") : "") ? "" : n) + '</span></div><div class="text">'), 4 == i.mode ? o.push("<p>&nbsp;</p>") : o.push(null == (n = i.text) ? "" : n), o.push('</div><div class="isso-comment-footer">'), a.vote && o.push('<a href="#" class="upvote">' + (null == (n = c["arrow-up"]) ? "" : n) + '</a><span class="spacer">|</span><a href="#" class="downvote">' + (null == (n = c["arrow-down"]) ? "" : n) + "</a>"), o.push('<a href="#" class="reply">' + e.escape(null == (n = m("comment-reply")) ? "" : n) + '</a><a href="#" class="edit">' + e.escape(null == (n = m("comment-edit")) ? "" : n) + '</a><a href="#" class="delete">' + e.escape(null == (n = m("comment-delete")) ? "" : n) + '</a></div><div class="isso-follow-up"></div></div></div>');
                }).call(this, "bool" in i ? i.bool : "undefined" != typeof bool ? bool : void 0, "comment" in i ? i.comment : "undefined" != typeof comment ? comment : void 0, "conf" in i ? i.conf : "undefined" != typeof conf ? conf : void 0, "datetime" in i ? i.datetime : "undefined" != typeof datetime ? datetime : void 0, "humanize" in i ? i.humanize : "undefined" != typeof humanize ? humanize : void 0, "i18n" in i ? i.i18n : "undefined" != typeof i18n ? i18n : void 0, "svg" in i ? i.svg : "undefined" != typeof svg ? svg : void 0), o.join("");
            };
        };
        return e.compiled = !0, e;
    }), define("jade!app/text/comment-loader", function() {
        var e = function(e) {
            return function(t) {
                var n, o = [], i = t || {};
                return (function(t, i) {
                    o.push("<div" + e.attr("id", "isso-loader-" + t.name, !0, !1) + ' class="isso-comment-loader"><a href="#" class="load_hidden">' + e.escape(null == (n = i("comment-hidden", t.hidden_replies)) ? "" : n) + "</a></div>");
                }).call(this, "comment" in i ? i.comment : "undefined" != typeof comment ? comment : void 0, "pluralize" in i ? i.pluralize : "undefined" != typeof pluralize ? pluralize : void 0), o.join("");
            };
        };
        return e.compiled = !0, e;
    }), define("app/jade", [
        "libjs-jade-runtime",
        "app/utils",
        "jade!app/text/postbox",
        "jade!app/text/comment",
        "jade!app/text/comment-loader"
    ], function(runtime, utils, tt_postbox, tt_comment, tt_comment_loader) {
        "use strict";
        var globals = {}, templates = {}, load = function(name, js) {
            templates[name] = function(jade) {
                var fn;
                return js.compiled ? js(jade) : (eval("fn = " + js), fn);
            }(runtime);
        }, set = function(e, t) {
            globals[e] = t;
        };
        return load("postbox", tt_postbox), load("comment", tt_comment), load("comment-loader", tt_comment_loader), set("bool", function(e) {
            return !!e;
        }), set("humanize", function(e) {
            return "object" != typeof e && (e = new Date(1e3 * parseInt(e, 10))), e.toString();
        }), set("datetime", function(e) {
            return "object" != typeof e && (e = new Date(1e3 * parseInt(e, 10))), [
                e.getUTCFullYear(),
                utils.pad(e.getUTCMonth(), 2),
                utils.pad(e.getUTCDay(), 2)
            ].join("-") + "T" + [
                utils.pad(e.getUTCHours(), 2),
                utils.pad(e.getUTCMinutes(), 2),
                utils.pad(e.getUTCSeconds(), 2)
            ].join(":") + "Z";
        }), {
            set: set,
            render: function(e, t) {
                var n;
                if (!templates[e]) throw new Error("Template not found: '" + e + "'");
                t = t || {};
                var o = [];
                for(var i in t)t.hasOwnProperty(i) && !globals.hasOwnProperty(i) && (o.push(i), globals[i] = t[i]);
                n = templates[e](globals);
                for(var a = 0; a < o.length; a++)delete globals[o[a]];
                return n;
            }
        };
    }), define("app/lib/editor", [
        "app/dom",
        "app/i18n"
    ], function(e, t) {
        "use strict";
        return function(n) {
            return n = e.htmlify(n), n.setAttribute("contentEditable", !0), n.on("focus", function() {
                n.classList.contains("placeholder") && (n.innerHTML = "", n.classList.remove("placeholder"));
            }), n.on("blur", function() {
                0 === n.textContent.length && (n.textContent = t.translate("postbox-text"), n.classList.add("placeholder"));
            }), n;
        };
    }), define("app/lib/identicons", [
        "app/lib/promise",
        "app/config"
    ], function(e, t) {
        "use strict";
        var n = function(e, t) {
            return e.length >= t ? e : new Array(t - e.length + 1).join("0") + e;
        }, o = function(e, t, n, o, i, a) {
            var r = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            r.setAttribute("x", o + t * i), r.setAttribute("y", o + n * i), r.setAttribute("width", i), r.setAttribute("height", i), r.setAttribute("style", "fill: " + a), e.appendChild(r);
        }, i = function(i, a, r) {
            var s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            return s.setAttribute("version", "1.1"), s.setAttribute("viewBox", "0 0 " + r + " " + r), s.setAttribute("preserveAspectRatio", "xMinYMin meet"), s.setAttribute("shape-rendering", "crispEdges"), o(s, 0, 0, 0, r + 2 * a, t["avatar-bg"]), e.when(i, function(e) {
                var i = n((parseInt(e.substr(-16), 16) % Math.pow(2, 18)).toString(2), 18), r = 0;
                s.setAttribute("data-hash", e);
                for(var m = parseInt(i.substring(i.length - 3, i.length), 2), c = t["avatar-fg"][m % t["avatar-fg"].length], d = 0; d < Math.ceil(2.5); d++)for(var p = 0; p < 5; p++)"1" === i.charAt(r) && (o(s, d, p, a, 8, c), d < Math.floor(2.5) && o(s, 4 - d, p, a, 8, c)), r++;
            }), s;
        };
        return {
            generate: i,
            blank: function(e, t) {
                var n = parseInt([
                    0,
                    1,
                    1,
                    1,
                    1,
                    1,
                    0,
                    1,
                    1,
                    0,
                    1,
                    1,
                    1,
                    1,
                    1,
                    0,
                    1,
                    0
                ].join(""), 2).toString(16), o = i(n, e, t);
                return o.setAttribute("className", "blank"), o;
            }
        };
    }), define("app/lib", [
        "require",
        "app/lib/editor",
        "app/lib/identicons"
    ], function(e) {
        return {
            editorify: e("app/lib/editor"),
            identicons: e("app/lib/identicons")
        };
    }), define("app/isso", [
        "app/dom",
        "app/utils",
        "app/config",
        "app/api",
        "app/jade",
        "app/i18n",
        "app/lib",
        "app/globals"
    ], function(e, t, n, o, i, a, r, s) {
        "use strict";
        var m = function(a) {
            var s = t.localStorageImpl, m = e.htmlify(i.render("postbox", {
                author: JSON.parse(s.getItem("author")),
                email: JSON.parse(s.getItem("email")),
                website: JSON.parse(s.getItem("website")),
                preview: ""
            }));
            m.onsuccess = function() {}, m.validate = function() {
                return t.text(e(".textarea", this).innerHTML).length < 3 || e(".textarea", this).classList.contains("placeholder") ? (e(".textarea", this).focus(), !1) : n["require-email"] && e("[name='email']", this).value.length <= 0 ? (e("[name='email']", this).focus(), !1) : !(n["require-author"] && e("[name='author']", this).value.length <= 0) || (e("[name='author']", this).focus(), !1);
            };
            var c = function() {
                n["reply-notifications"] && e("[name='email']", m).value.length > 0 ? e(".notification-section", m).show() : e(".notification-section", m).hide();
            };
            e("[name='email']", m).on("input", c), c(), n["require-email"] && e("[name='email']", m).setAttribute("placeholder", e("[name='email']", m).getAttribute("placeholder").replace(/ \(.*\)/, "")), n["require-author"] && (e("[name='author']", m).placeholder = e("[name='author']", m).placeholder.replace(/ \(.*\)/, "")), e("[name='preview']", m).on("click", function() {
                o.preview(t.text(e(".textarea", m).innerHTML)).then(function(t) {
                    e(".preview .text", m).innerHTML = t, m.classList.add("preview-mode");
                });
            });
            var p = function() {
                e(".preview .text", m).innerHTML = "", m.classList.remove("preview-mode");
            };
            return e("[name='edit']", m).on("click", p), e(".preview", m).on("click", p), e("[type=submit]", m).on("click", function() {
                if (p(), m.validate()) {
                    var n = e("[name=author]", m).value || null, i = e("[name=email]", m).value || null, r = e("[name=website]", m).value || null;
                    s.setItem("author", JSON.stringify(n)), s.setItem("email", JSON.stringify(i)), s.setItem("website", JSON.stringify(r)), o.create(e("#isso-thread").getAttribute("data-isso-id"), {
                        author: n,
                        email: i,
                        website: r,
                        text: t.text(e(".textarea", m).innerHTML),
                        parent: a || null,
                        title: e("#isso-thread").getAttribute("data-title") || null,
                        notification: e("[name=notification]", m).checked() ? 1 : 0
                    }).then(function(t) {
                        e(".textarea", m).innerHTML = "", e(".textarea", m).blur(), d(t, !0), null !== a && m.onsuccess();
                    });
                }
            }), r.editorify(e(".textarea", m)), m;
        }, c = function(t, a) {
            var r;
            null === t.id ? (r = e("#isso-root"), t.name = "null") : (r = e("#isso-" + t.id + " > .text-wrapper > .isso-follow-up"), t.name = t.id);
            var s = e.htmlify(i.render("comment-loader", {
                comment: t
            }));
            r.append(s), e("a.load_hidden", s).on("click", function() {
                s.remove(), o.fetch(e("#isso-thread").getAttribute("data-isso-id"), n["reveal-on-click"], n["max-comments-nested"], t.id, a).then(function(e) {
                    if (0 !== e.total_replies) {
                        var t = 0;
                        e.replies.forEach(function(e) {
                            d(e, !1), e.created > t && (t = e.created);
                        }), e.hidden_replies > 0 && c(e, t);
                    }
                }, function(e) {
                    console.log(e);
                });
            });
        }, d = function(p, l) {
            var u = e.htmlify(i.render("comment", {
                comment: p
            })), f = function() {
                e(".permalink > time", u).textContent = t.ago(s.offset.localTime(), new Date(1e3 * parseInt(p.created, 10))), setTimeout(f, 6e4);
            };
            f(), n.avatar && e("div.avatar > svg", u).replace(r.identicons.generate(p.hash, 4, 48));
            var h;
            h = e(null === p.parent ? "#isso-root" : "#isso-" + p.parent + " > .text-wrapper > .isso-follow-up"), h.append(u), l && u.scrollIntoView();
            var v = e("#isso-" + p.id + " > .text-wrapper > .isso-comment-footer"), b = e("#isso-" + p.id + " > .text-wrapper > .isso-comment-header"), x = e("#isso-" + p.id + " > .text-wrapper > .text"), w = null;
            if (e("a.reply", v).toggle("click", function(t) {
                w = v.insertAfter(new m(null === p.parent ? p.id : p.parent)), w.onsuccess = function() {
                    t.next();
                }, e(".textarea", w).focus(), e("a.reply", v).textContent = a.translate("comment-close");
            }, function() {
                w.remove(), e("a.reply", v).textContent = a.translate("comment-reply");
            }), n.vote) {
                var g = n["vote-levels"];
                "string" == typeof g && (g = g.split(","));
                var y = function(t) {
                    var n = e("span.votes", v);
                    if (null === n ? v.prepend(e.new("span.votes", t)) : n.textContent = t, t ? u.classList.remove("isso-no-votes") : u.classList.add("isso-no-votes"), g) for(var o = !0, i = 0; i <= g.length; i++)o && (i >= g.length || t < g[i]) ? (u.classList.add("isso-vote-level-" + i), o = !1) : u.classList.remove("isso-vote-level-" + i);
                };
                e("a.upvote", v).on("click", function() {
                    o.like(p.id).then(function(e) {
                        y(e.likes - e.dislikes);
                    });
                }), e("a.downvote", v).on("click", function() {
                    o.dislike(p.id).then(function(e) {
                        y(e.likes - e.dislikes);
                    });
                }), y(p.likes - p.dislikes);
            }
            e("a.edit", v).toggle("click", function(i) {
                var s = e("a.edit", v), m = n.avatar || n.gravatar ? e(".avatar", u, !1)[0] : null;
                s.textContent = a.translate("comment-save"), s.insertAfter(e.new("a.cancel", a.translate("comment-cancel"))).on("click", function() {
                    i.canceled = !0, i.next();
                }), i.canceled = !1, o.view(p.id, 1).then(function(n) {
                    var o = r.editorify(e.new("div.textarea"));
                    o.innerHTML = t.detext(n.text), o.focus(), x.classList.remove("text"), x.classList.add("textarea-wrapper"), x.textContent = "", x.append(o);
                }), null !== m && m.hide();
            }, function(i) {
                var r = e(".textarea", x), s = n.avatar || n.gravatar ? e(".avatar", u, !1)[0] : null;
                if (i.canceled || null === r) x.innerHTML = p.text;
                else {
                    if (t.text(r.innerHTML).length < 3) return r.focus(), void i.wait();
                    o.modify(p.id, {
                        text: t.text(r.innerHTML)
                    }).then(function(e) {
                        x.innerHTML = e.text, p.text = e.text;
                    });
                }
                x.classList.remove("textarea-wrapper"), x.classList.add("text"), null !== s && s.show(), e("a.cancel", v).remove(), e("a.edit", v).textContent = a.translate("comment-edit");
            }), e("a.delete", v).toggle("click", function(t) {
                var n = e("a.delete", v), o = !t.state;
                n.textContent = a.translate("comment-confirm"), n.on("mouseout", function() {
                    n.textContent = a.translate("comment-delete"), t.state = o, n.onmouseout = null;
                });
            }, function() {
                var t = e("a.delete", v);
                o.remove(p.id).then(function(n) {
                    n ? u.remove() : (e("span.note", b).textContent = a.translate("comment-deleted"), x.innerHTML = "<p>&nbsp;</p>", e("a.edit", v).remove(), e("a.delete", v).remove()), t.textContent = a.translate("comment-delete");
                });
            });
            var k = function(n) {
                t.cookie("isso-" + p.id) ? setTimeout(function() {
                    k(n);
                }, 15e3) : null !== e(n, v) && e(n, v).remove();
            };
            k("a.edit"), k("a.delete");
            var j = function(e) {
                t.cookie("isso-" + p.id) ? setTimeout(function() {
                    j(e);
                }, 15e3) : v.append(e);
            };
            if (!n["reply-to-self"] && t.cookie("isso-" + p.id) && j(e("a.reply", v).detach()), p.hasOwnProperty("replies")) {
                var z = 0;
                p.replies.forEach(function(e) {
                    d(e, !1), e.created > z && (z = e.created);
                }), p.hidden_replies > 0 && c(p, z);
            }
        };
        return {
            insert: d,
            insert_loader: c,
            Postbox: m
        };
    }), define("app/count", [
        "app/api",
        "app/dom",
        "app/i18n"
    ], function(e, t, n) {
        return function() {
            var o = {};
            t.each("a", function(e) {
                if (e.href.match && e.href.match(/#isso-thread$/)) {
                    var t = e.getAttribute("data-isso-id") || e.href.match(/^(.+)#isso-thread$/)[1].replace(/^.*\/\/[^\/]+/, "");
                    t in o ? o[t].push(e) : o[t] = [
                        e
                    ];
                }
            });
            var i = Object.keys(o);
            e.count(i).then(function(e) {
                for(var t in o)if (o.hasOwnProperty(t)) for(var a = i.indexOf(t), r = 0; r < o[t].length; r++)o[t][r].textContent = n.pluralize("num-comments", e[a]);
            });
        };
    }), define("text", {
        load: function(e) {
            throw new Error("Dynamic load not allowed: " + e);
        }
    }), define("text!app/../../css/isso.css", [], function() {
        return '#isso-thread * {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n#isso-thread .isso-comment-header a {\n    text-decoration: none;\n}\n\n#isso-thread {\n    padding: 0;\n    margin: 0;\n}\n#isso-thread > h4 {\n    color: #555;\n    font-weight: bold;\n}\n#isso-thread > .isso-feedlink {\n    float: right;\n    padding-left: 1em;\n}\n#isso-thread > .isso-feedlink > a {\n    font-size: 0.8em;\n    vertical-align: bottom;\n}\n#isso-thread .textarea {\n    min-height: 58px;\n    outline: 0;\n}\n#isso-thread .textarea.placeholder {\n    color: #757575;\n}\n\n#isso-root .isso-comment {\n    max-width: 68em;\n    padding-top: 0.95em;\n    margin: 0.95em auto;\n}\n#isso-root .preview .isso-comment {\n    padding-top: 0;\n    margin: 0;\n}\n#isso-root .isso-comment:not(:first-of-type),\n.isso-follow-up .isso-comment {\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n.isso-comment > div.avatar {\n    display: block;\n    float: left;\n    width: 7%;\n    margin: 3px 15px 0 0;\n}\n.isso-comment > div.avatar > svg {\n    max-width: 48px;\n    max-height: 48px;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    border-radius: 3px;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.isso-comment > div.text-wrapper {\n    display: block;\n}\n.isso-comment .isso-follow-up {\n    padding-left: calc(7% + 20px);\n}\n.isso-comment > div.text-wrapper > .isso-comment-header, .isso-comment > div.text-wrapper > .isso-comment-footer {\n    font-size: 0.95em;\n}\n.isso-comment > div.text-wrapper > .isso-comment-header {\n    font-size: 0.85em;\n}\n.isso-comment > div.text-wrapper > .isso-comment-header .spacer {\n    padding: 0 6px;\n}\n.isso-comment > div.text-wrapper > .isso-comment-header .spacer,\n.isso-comment > div.text-wrapper > .isso-comment-header a.permalink,\n.isso-comment > div.text-wrapper > .isso-comment-header .note,\n.isso-comment > div.text-wrapper > .isso-comment-header a.parent {\n    color: gray !important;\n    font-weight: normal;\n    text-shadow: none !important;\n}\n.isso-comment > div.text-wrapper > .isso-comment-header .spacer:hover,\n.isso-comment > div.text-wrapper > .isso-comment-header a.permalink:hover,\n.isso-comment > div.text-wrapper > .isso-comment-header .note:hover,\n.isso-comment > div.text-wrapper > .isso-comment-header a.parent:hover {\n    color: #606060 !important;\n}\n.isso-comment > div.text-wrapper > .isso-comment-header .note {\n    float: right;\n}\n.isso-comment > div.text-wrapper > .isso-comment-header .author {\n    font-weight: bold;\n    color: #555;\n}\n.isso-comment > div.text-wrapper > .textarea-wrapper .textarea,\n.isso-comment > div.text-wrapper > .textarea-wrapper .preview {\n    margin-top: 0.2em;\n}\n.isso-comment > div.text-wrapper > div.text p {\n    margin-top: 0.2em;\n}\n.isso-comment > div.text-wrapper > div.text p:last-child {\n    margin-bottom: 0.2em;\n}\n.isso-comment > div.text-wrapper > div.text h1,\n.isso-comment > div.text-wrapper > div.text h2,\n.isso-comment > div.text-wrapper > div.text h3,\n.isso-comment > div.text-wrapper > div.text h4,\n.isso-comment > div.text-wrapper > div.text h5,\n.isso-comment > div.text-wrapper > div.text h6 {\n    font-size: 130%;\n    font-weight: bold;\n}\n.isso-comment > div.text-wrapper > div.textarea-wrapper .textarea,\n.isso-comment > div.text-wrapper > div.textarea-wrapper .preview {\n    width: 100%;\n    border: 1px solid #f0f0f0;\n    border-radius: 2px;\n    box-shadow: 0 0 2px #888;\n}\n.isso-comment > div.text-wrapper > .isso-comment-footer {\n    font-size: 0.80em;\n    color: gray !important;\n    clear: left;\n}\n.isso-feedlink,\n.isso-comment > div.text-wrapper > .isso-comment-footer a {\n    font-weight: bold;\n    text-decoration: none;\n}\n.isso-feedlink:hover,\n.isso-comment > div.text-wrapper > .isso-comment-footer a:hover {\n    color: #111111 !important;\n    text-shadow: #aaaaaa 0 0 1px !important;\n}\n.isso-comment > div.text-wrapper > .isso-comment-footer > a {\n    position: relative;\n    top: .2em;\n}\n.isso-comment > div.text-wrapper > .isso-comment-footer > a + a {\n    padding-left: 1em;\n}\n.isso-comment > div.text-wrapper > .isso-comment-footer .votes {\n    color: gray;\n}\n.isso-comment > div.text-wrapper > .isso-comment-footer .upvote svg,\n.isso-comment > div.text-wrapper > .isso-comment-footer .downvote svg {\n    position: relative;\n    top: .2em;\n}\n.isso-comment .isso-postbox {\n    margin-top: 0.8em;\n}\n.isso-comment.isso-no-votes > * > .isso-comment-footer span.votes {\n    display: none;\n}\n\n.isso-postbox {\n    max-width: 68em;\n    margin: 0 auto 2em;\n    clear: right;\n}\n.isso-postbox > .form-wrapper {\n    display: block;\n    padding: 0;\n}\n.isso-postbox > .form-wrapper > .auth-section,\n.isso-postbox > .form-wrapper > .auth-section .post-action {\n    display: block;\n}\n.isso-postbox > .form-wrapper .textarea,\n.isso-postbox > .form-wrapper .preview {\n    margin: 0 0 .3em;\n    padding: .4em .8em;\n    border-radius: 3px;\n    background-color: #fff;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.isso-postbox > .form-wrapper input[type=checkbox] {\n    vertical-align: middle;\n    position: relative;\n    bottom: 1px;\n    margin-left: 0;\n}\n.isso-postbox > .form-wrapper .notification-section {\n    font-size: 0.90em;\n    padding-top: .3em;\n}\n#isso-thread .textarea:focus,\n#isso-thread input:focus {\n    border-color: rgba(0, 0, 0, 0.8);\n}\n.isso-postbox > .form-wrapper > .auth-section .input-wrapper {\n    display: inline-block;\n    position: relative;\n    max-width: 25%;\n    margin: 0;\n}\n.isso-postbox > .form-wrapper > .auth-section .input-wrapper input {\n    padding: .3em 10px;\n    max-width: 100%;\n    border-radius: 3px;\n    background-color: #fff;\n    line-height: 1.4em;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.isso-postbox > .form-wrapper > .auth-section .post-action {\n    display: inline-block;\n    float: right;\n    margin: 0 0 0 5px;\n}\n.isso-postbox > .form-wrapper > .auth-section .post-action > input {\n    padding: calc(.3em - 1px);\n    border-radius: 2px;\n    border: 1px solid #CCC;\n    background-color: #DDD;\n    cursor: pointer;\n    outline: 0;\n    line-height: 1.4em;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.isso-postbox > .form-wrapper > .auth-section .post-action > input:hover {\n    background-color: #CCC;\n}\n.isso-postbox > .form-wrapper > .auth-section .post-action > input:active {\n    background-color: #BBB;\n}\n.isso-postbox > .form-wrapper .preview,\n.isso-postbox > .form-wrapper input[name="edit"],\n.isso-postbox.preview-mode > .form-wrapper input[name="preview"],\n.isso-postbox.preview-mode > .form-wrapper .textarea {\n    display: none;\n}\n.isso-postbox.preview-mode > .form-wrapper .preview {\n    display: block;\n}\n.isso-postbox.preview-mode > .form-wrapper input[name="edit"] {\n    display: inline;\n}\n.isso-postbox > .form-wrapper .preview {\n    background-color: #f8f8f8;\n    background: repeating-linear-gradient(\n        -45deg,\n        #f8f8f8,\n        #f8f8f8 10px,\n        #fff 10px,\n        #fff 20px\n    );\n}\n.isso-postbox > .form-wrapper > .notification-section {\n    display: none;\n    padding-bottom: 10px;\n}\n@media screen and (max-width:600px) {\n    .isso-postbox > .form-wrapper > .auth-section .input-wrapper {\n        display: block;\n        max-width: 100%;\n        margin: 0 0 .3em;\n    }\n    .isso-postbox > .form-wrapper > .auth-section .input-wrapper input {\n        width: 100%;\n    }\n}\n';
    }), define("app/text/css", [
        "text!../../../css/isso.css"
    ], function(e) {
        return {
            inline: e
        };
    }), define("text!app/text/arrow-down.svg", [], function() {
        return '<!-- Generator: IcoMoon.io --><svg width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="gray">\n  <g>\n    <path d="M 24.773,13.701c-0.651,0.669-7.512,7.205-7.512,7.205C 16.912,21.262, 16.456,21.44, 16,21.44c-0.458,0-0.914-0.178-1.261-0.534 c0,0-6.861-6.536-7.514-7.205c-0.651-0.669-0.696-1.87,0-2.586c 0.698-0.714, 1.669-0.77, 2.522,0L 16,17.112l 6.251-5.995 c 0.854-0.77, 1.827-0.714, 2.522,0C 25.47,11.83, 25.427,13.034, 24.773,13.701z">\n    </path>\n  </g>\n</svg>\n';
    }), define("text!app/text/arrow-up.svg", [], function() {
        return '<!-- Generator: IcoMoon.io --><svg width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="gray">\n  <g>\n    <path d="M 24.773,18.299c-0.651-0.669-7.512-7.203-7.512-7.203C 16.912,10.739, 16.456,10.56, 16,10.56c-0.458,0-0.914,0.179-1.261,0.536 c0,0-6.861,6.534-7.514,7.203c-0.651,0.669-0.696,1.872,0,2.586c 0.698,0.712, 1.669,0.77, 2.522,0L 16,14.89l 6.251,5.995 c 0.854,0.77, 1.827,0.712, 2.522,0C 25.47,20.17, 25.427,18.966, 24.773,18.299z">\n    </path>\n  </g>\n</svg>\n';
    }), define("app/text/svg", [
        "text!./arrow-down.svg",
        "text!./arrow-up.svg"
    ], function(e, t) {
        return {
            "arrow-down": e,
            "arrow-up": t
        };
    }), require([
        "app/lib/ready",
        "app/config",
        "app/i18n",
        "app/api",
        "app/isso",
        "app/count",
        "app/dom",
        "app/text/css",
        "app/text/svg",
        "app/jade"
    ], function(e, t, n, o, i, a, r, s, m, c) {
        "use strict";
        function d() {
            if (l = r("#isso-thread"), u = r.new("h4"), t.css && null === r("style#isso-style")) {
                var e = r.new("style");
                e.id = "isso-style", e.type = "text/css", e.textContent = s.inline, r("head").append(e);
            }
            if (a(), null === l) return console.log("abort, #isso-thread is missing");
            if (t.feed) {
                var m = r.new("a", n.translate("atom-feed")), c = r.new("span.isso-feedlink");
                m.href = o.feed(l.getAttribute("data-isso-id")), c.appendChild(m), l.append(c);
            }
            l.append(u), l.append(new i.Postbox(null)), l.append('<div id="isso-root"></div>');
        }
        function p() {
            0 != r("#isso-root").length && (r("#isso-root").textContent = "", o.fetch(l.getAttribute("data-isso-id") || location.pathname, t["max-comments-top"], t["max-comments-nested"]).then(function(e) {
                if (0 === e.total_replies) return void (u.textContent = n.translate("no-comments"));
                var t = 0, o = e.total_replies;
                e.replies.forEach(function(e) {
                    i.insert(e, !1), e.created > t && (t = e.created), o += e.total_replies;
                }), u.textContent = n.pluralize("num-comments", o), e.hidden_replies > 0 && i.insert_loader(e, t), window.location.hash.length > 0 && window.location.hash.match("^#isso-[0-9]+$") && r(window.location.hash).scrollIntoView();
            }, function(e) {
                console.log(e);
            }));
        }
        c.set("conf", t), c.set("i18n", n.translate), c.set("pluralize", n.pluralize), c.set("svg", m);
        var l, u;
        e(function() {
            d(), p();
        }), window.Isso = {
            init: d,
            fetchComments: p
        };
    }), define("embed", function() {});
}();

//# sourceMappingURL=blog-post.5a1f01a6.js.map
