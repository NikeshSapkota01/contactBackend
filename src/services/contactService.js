import Boom from "@hapi/boom";

import Contact from "../models/contact";

export function getAllContacts() {
  return Contact.fetchAll();
}

export async function createContact(contact) {
  return new Contact(contact).save();
}

export function getContact(id) {
  return new Contact({ id })
    .fetch()
    .then((contact) => contact)
    .catch(Contact.NotFoundError, () => {
      throw Boom.notFound("Contact not found");
    });
}

export function updateContact(id, contact) {
  return new Contact({ id }).save({ name: contact.name, phone: contact.phone });
}

export function deleteContact(id) {
  return new Contact({ id }).fetch().then((contact) => contact.destroy());
}
