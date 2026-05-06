const catalogueList = document.getElementById("catalogue-list");
const detailModal = document.getElementById("detail-modal");
const orderModal = document.getElementById("order-modal");
const closeButtons = document.querySelectorAll("#close-modal-button");
const detailModalContent = document.getElementById("detail-modal-content");
const orderButtons = document.querySelectorAll("#order-button");
const orderModalForm = document.getElementById("order-modal-form");

function toggleModal() {
  detailModal.classList.toggle("is-open");
  document.body.classList.toggle("modal-open");
}

function toggleOrderModal() {
  orderModal.classList.toggle("is-open");
  document.body.classList.toggle("modal-open");
}

function closeOrderModal() {
  orderModal.classList.remove("is-open");
  document.body.classList.remove("modal-open");
  orderModalForm.reset();
}

function closeDetailModal() {
  detailModal.classList.remove("is-open");
  document.body.classList.remove("modal-open");
}

catalogueList.addEventListener("click", (e) => {
  if (e.target.id === "catalogue-more-button") {
    const parentItem = e.target.closest(".catalogue-list-item");

    const title = parentItem.querySelector(".catalogue-item-title").textContent;
    const price = parentItem.querySelector(".catalogue-item-price").textContent;
    const text = parentItem.querySelector(".catalogue-item-text").textContent;
    const imgElement = parentItem.querySelector(".catalogue-item-image");
    const src = imgElement.getAttribute("src");
    const srcset = imgElement.getAttribute("srcset");

    const markup = `
            <img
              class="detail-modal-image"
              src="${src}"
              srcset="${srcset}"
              alt="${title}"
            />
            <div class="detail-modal-texts-block">
              <h3 class="detail-modal-title">${title}</h3>
              <p class="detail-modal-price">${price}</p>
              <p class="detail-modal-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, non quas dolorem praesentium nemo
                numquam quos quibusdam nesciunt rerum, doloribus quod nobis cupiditate, maxime inventore voluptate?
                Reiciendis laborum saepe nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, non
                quas dolorem praesentium nemo numquam quos quibusdam nesciunt rerum, doloribus quod nobis cupiditate,
                maxime inventore voluptate? Reiciendis laborum saepe nostrum!Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Sapiente, non quas dolorem praesentium nemo numquam quos quibusdam nesciunt rerum,
                doloribus quod nobis cupiditate, maxime inventore voluptate? Reiciendis laborum saepe nostrum!Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Sapiente, non quas dolorem praesentium nemo numquam
                quos quibusdam nesciunt rerum, doloribus quod nobis cupiditate, maxime inventore voluptate? Reiciendis
                laborum saepe nostrum!
              </p>
              <button id="detail-modal-cta" type="button" class="primary-button detail-modal-button">Придбати</button>
            </div>
    `;

    detailModalContent.innerHTML = "";
    detailModalContent.insertAdjacentHTML("afterbegin", markup);

    toggleModal();
  }
});

closeButtons.forEach((button) =>
  button.addEventListener("click", () => {
    console.log("click");
    closeDetailModal();
    closeOrderModal();
  })
);

detailModal.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    closeDetailModal();
  }
});

orderModal.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    closeOrderModal();
  }
});

detailModalContent.addEventListener("click", (e) => {
  if (e.target.id === "detail-modal-cta" || e.target.closest("#detail-modal-cta")) {
    toggleModal();
    toggleOrderModal();
  }
});

orderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    toggleOrderModal();
  });
});

orderModalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);

  const data = Object.fromEntries(formData.entries());

  console.log("Form Data:", data);
  console.log("User Name:", data.name);
  console.log("Phone:", data.phone);

  alert(`Дякуємо, ${data.name}! Ми зателефонуємо вам за номером ${data.phone}.`);

  e.currentTarget.reset();
  closeOrderModal();
});
