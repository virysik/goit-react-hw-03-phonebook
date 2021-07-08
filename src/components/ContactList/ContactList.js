import { Ul } from './ContactList.styles'
import ContactListElement from '../ContactListElement'
import PropTypes from 'prop-types'

function ContactList({ contactsArr, onDelete }) {
  return (
    <Ul>
      {contactsArr.map(({ id, name, number }) => {
        return (
          <ContactListElement
            key={id}
            contactId={id}
            contactName={name}
            contactNumber={number}
            onDelete={onDelete}
          />
        )
      })}
    </Ul>
  )
}

export default ContactList

ContactList.propTypes = {
  contactsArr: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
}
