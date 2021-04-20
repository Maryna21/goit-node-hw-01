const path = require('path')
const fs = require('fs').promises

contactsPath = path.normalize(__dirname + '/db/contacts.json')

// TODO: задокументировать каждую функцию
async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const parseData = JSON.parse(data).then(data => console.table(data));
     return parseData;  
  } catch (error) {
    console.log(error);
  }
}

// listContacts()

// listContacts().then(data => console.table(data))

async function getContactById(contactId) {
    try {
      const data = await fs.readFile(contactsPath)
      const parseData = JSON.parse(data)
      const variable1 = parseData.find(contact => contact.id === contactId)
      console.log(variable1);
    } catch (error) {
      console.log(error);
    }
  }

  // getContactById(2)
  
  async function removeContact(contactId){
    try {  
      const data = await fs.readFile(contactsPath)
      const parseData = JSON.parse(data)
      const deleteContact = parseData.filter(contact => contact.id !== contactId);
      fs.writeFile(contactsPath, JSON.stringify(deleteContact))
      console.log(deleteContact);
    }catch (error) {
      console.log(error)
    }
  }

console.log(removeContact(1));
  
async function addContact(name, email, phone) {
  try {  
    const data = await fs.readFile(contactsPath)
    const parseData = JSON.parse(data)
    const newContact = {name, email, phone}
    const allContact = [...parseData, newContact];
    await fs.writeFile(contactsPath, JSON.stringify(allContact))
    console.log(allContact);
  }catch (error) {
    console.log(error)
  }
  }
  // addContact('Maryna', 'mmmarina21@i.ua', '5555555')
module.exports = {listContacts, getContactById, removeContact, addContact}
