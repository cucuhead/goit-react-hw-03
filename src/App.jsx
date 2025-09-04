import { useState, useEffect } from "react";
import { ContactForm } from "./components/ContactForm";
import { SearchBox } from "./components/SearchBox";
import { ContactList } from "./components/ContactList";

import "./App.css";

function App() {
  // Uygulama yüklendiğinde yerel depodan veriyi al
  const [data, setData] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      return JSON.parse(savedContacts);
    }
    // Eğer yerel depoda veri yoksa, başlangıç verilerini kullan
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  // 'data' state'i her değiştiğinde yerel depoya kaydet
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(data));
  }, [data]);
  const [filter, setFilter] = useState("");

  //Her yazdığın harfi tutmak için
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  //asıl filtrelemenin yapıldığı yer

  const filteredContacts = data.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  //Yeni kişi ekleme
  const addContact = (newContact) => {
    setData([...data, newContact]);
  };

  //kişi silme

  const deleteContent = (contactId) => {
    setData(data.filter((contact) => contact.id !== contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContent} />
    </div>
  );
}

export default App;
