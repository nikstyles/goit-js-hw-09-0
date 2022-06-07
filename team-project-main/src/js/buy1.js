(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-buy-open1]"),
    openModal2Btn: document.querySelector("[data-buy-open2]"),
    closeModalBtn: document.querySelector("[data-buy-close1]"),
    modal: document.querySelector("[data-buy1]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModal2Btn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();