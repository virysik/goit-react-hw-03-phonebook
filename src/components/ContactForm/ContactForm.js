import { Component } from 'react'
import { Form, Label, Input, Button } from './ContactForm.styles'
import PropTypes from 'prop-types'

class ContactForm extends Component {
  static propTypes = { onSubmit: PropTypes.func.isRequired }

  state = { name: '', number: '' }

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (e) => {
    const { onSubmit } = this.props
    e.preventDefault()

    onSubmit(this.state)
    this.resetFormInputs()
  }

  resetFormInputs = () => {
    this.setState({
      name: '',
      number: '',
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            onChange={this.handleInputChange}
            type="text"
            name="name"
            autoComplete="off"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </Label>
        <Label>
          Number
          <Input
            onChange={this.handleInputChange}
            type="tel"
            name="number"
            autoComplete="off"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    )
  }
}

export default ContactForm
