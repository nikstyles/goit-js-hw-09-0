(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-fran-open1]"),
    openModal2Btn: document.querySelector("[data-fran-open2]"),
    closeModalBtn: document.querySelector("[data-fran-close]"),
    modal: document.querySelector("[data-fran]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModal2Btn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();