(()=>{const e={openModalBtns:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("backdrop--hidden")}e.openModalBtns.forEach((e=>e.addEventListener("click",t))),e.closeModalBtn.addEventListener("click",t)})(),(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]");e.addEventListener("click",(()=>{const o="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-active"),e.setAttribute("aria-expanded",!o),t.classList.toggle("is-open")}))})();
//# sourceMappingURL=index.bf8bbe75.js.map
