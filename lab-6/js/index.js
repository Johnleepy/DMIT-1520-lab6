/*
  HTML for the project.
  Template
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">FULLNAME HERE</h5>
    </div>
  <small>EMAIL HERE<</small>
  </div>
*/
async function getContacts() {
  const res = await fetch("/public/data/contacts.json");
  const payload = await res.json();
  return payload;
}

async function renderContacts() {
  const contactsSection = document.querySelector("#contacts");
  contactsSection.innerHTML = "";
  const contacts = await getContacts();

  contacts.forEach((element) => {
    let template = `<div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${element.name}</h5>
    </div>
  <p class="mb-0 text-start">${element.email}</p>
  </div>`;
    contactsSection.insertAdjacentHTML("afterend", template);
  });
}

renderContacts();