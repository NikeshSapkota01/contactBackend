import Contact from "../models/contact";

export function getAllContacts() {
  return Contact.fetchAll();
}
