(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))f(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&f(c)}).observe(document,{childList:!0,subtree:!0});function y(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function f(r){if(r.ep)return;r.ep=!0;const s=y(r);fetch(r.href,s)}})();const n=document.querySelector(".player"),t=n.querySelector(".player_video"),g=n.querySelector(".progress__filled"),i=n.querySelector(".progress"),l=n.querySelector(".togglePlayPause"),L=n.querySelectorAll("[data-skip]"),v=n.querySelectorAll(".player_slider"),E=n.querySelector(".fullScreen_button");function p(){t.paused?(t.play(),l.innerHTML="⏹️"):(t.pause(),l.innerHTML="▶")}function h(){t.paused?(this.innerHTML="⏹️",t.play()):(this.innerHTML="▶",t.pause())}function k(){t.currentTime+=parseFloat(this.dataset.skip)}function m(e){const o=e.offsetX/i.offsetWidth*t.duration;t.currentTime=o}function _(){t[this.name]=this.value}function b(){const e=t.currentTime/t.duration*100;g.style.flexBasis=`${e}%`}function u(){document.fullscreenElement?document.exitFullscreen():n.requestFullscreen()}function S(){n.style.pointerEvents="none"}function T(){n.style.pointerEvents="auto"}t.addEventListener("click",p);l.addEventListener("click",h);L.forEach(e=>e.addEventListener("click",k));v.forEach(e=>e.addEventListener("input",_));t.addEventListener("timeupdate",b);let d=!1;i.addEventListener("click",e=>{(e.target.classList.contains("progress_bar_container")||e.target.classList.contains("progress__filled"))&&m(e)});i.addEventListener("mousedown",e=>{(e.target.classList.contains("progress_bar_container")||e.target.classList.contains("progress__filled"))&&(d=!0)});i.addEventListener("mousemove",e=>{(e.target.classList.contains("progress_bar_container")||e.target.classList.contains("progress__filled"))&&d&&m(e)});document.addEventListener("mouseup",()=>{d=!1});E.addEventListener("click",u);let a=0;document.addEventListener("mousemove",()=>{T(),a&&clearTimeout(a),a=setTimeout(S,2e3)});document.addEventListener("keydown",e=>{switch(e.code){case"Space":p();break;case"ArrowRight":t.currentTime+=parseFloat(2.5);break;case"ArrowLeft":t.currentTime-=parseFloat(2.5);break;case"KeyF":u();break}});document.addEventListener("keydown",e=>{if(e.key>="0"&&e.key<="9"){let o=e.key*.1;t.currentTime=parseFloat(t.duration*o)}});t.addEventListener("dblclick",e=>{u()});window.onload=()=>{t&&(t.volume=.05)};
