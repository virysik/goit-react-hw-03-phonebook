import { Component } from 'react'
import { nanoid } from 'nanoid'
import { Container, Title, TitleContacts } from './App.styles'
import { TiContacts } from 'react-icons/ti'
import { IoIosContacts } from 'react-icons/io'
import ContactForm from './components/ContactForm'
import Filter from './components/Filter'
import ContactList from './components/ContactList'

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'))

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  handleFilterInputChange = (e) => {
    const { name, value } = e.currentTarget

    this.setState({
      [name]: value,
    })
  }

  addContact = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    }
    const normalizedName = name.toLowerCase()
    const contactExists = this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === normalizedName,
    )

    if (contactExists) {
      alert(`${contact.name} is already in contacts`)
      return
    }

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }))
  }

  getFilteredContact = () => {
    const { contacts, filter } = this.state
    const normalazedFilter = filter.toLowerCase()

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalazedFilter),
    )
  }

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }))
  }

  render() {
    const filteredArr = this.getFilteredContact()
    return (
      <Container>
        <Title>
          <TiContacts /> Phonebook
        </Title>
        <ContactForm onSubmit={this.addContact} />
        <TitleContacts>
          <IoIosContacts />
          Contacts
        </TitleContacts>
        <Filter onChange={this.handleFilterInputChange} />

        <ContactList contactsArr={filteredArr} onDelete={this.deleteContact} />
      </Container>
    )
  }
}

export default App
