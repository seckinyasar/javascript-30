(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const f=document.querySelector("h1"),u=document.querySelector(".lol"),i=75;document.addEventListener("mousemove",s=>{const{offsetWidth:n,offsetHeight:c}=f;let{offsetX:r,offsetY:e}=s;s.target!==void 0&&(r=r+s.target.offsetLeft,e=e+s.target.offsetTop);const t=Math.round(r/n*i-i/2),o=Math.round(e/c*i-i/2);u.style.textShadow=`
    ${t}px ${o}px 0 rgba(255, 0, 0, 0.7),    
    ${o}px ${t*-1}px 0 rgba(0, 0, 255, 0.7),    
    ${t}px ${o*-1}px 0 rgba(255, 0, 255, 0.7), 
    ${t*-1}px ${o*-1}px 0 rgba(0, 255, 255, 0.7), 
    ${t/2}px ${o/2}px 0 rgba(255, 165, 0, 0.7)   
`});
