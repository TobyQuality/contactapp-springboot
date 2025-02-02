import axios from "axios";

const API_URL = "http://localhost:8080/contacts";

export interface Contact {
  id?: number;
  name: string;
  email: string;
  phone: string;
}

export const getContacts = () => axios.get<Contact[]>(API_URL);
export const addContact = (contact: Contact) => axios.post<Contact>(API_URL, contact);
export const updateContact = (id: number, contact: Contact) => axios.put<Contact>(`${API_URL}/${id}`, contact);
export const deleteContact = (id: number) => axios.delete(`${API_URL}/${id}`);
