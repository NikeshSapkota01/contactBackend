import Boom from "@hapi/boom";

import Contact from "../models/contact";

export function getAllContacts(userId) {
  // return Contact.fetchAll();
  return Contact.where({ user_id: userId }).fetchAll();
}

export async function createContact(contact) {
  return new Contact({
    name: contact.name,
    phone: contact.phone,
    user_id: contact.userId,
  }).save();
}

export function getContact({ params, userId }) {
  console.log(`params, userId`, params, userId);
  return new Contact({ id: params })
    .where({ user_id: userId })
    .fetch()
    .then((contact) => contact)
    .catch(Contact.NotFoundError, () => {
      throw Boom.notFound("Contact not found");
    });
}

export function updateContact(id, contact) {
  console.log(`contact`, contact);
  return new Contact({ id }).save({
    name: contact.name,
    phone: contact.phone,
  });
}

export function deleteContact({ params, userId }) {
  return new Contact({ id: params })
    .where({ user_id: userId })
    .fetch()
    .then((contact) => contact.destroy());
}
