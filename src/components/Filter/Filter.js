import { Label, Input } from './Filter.styles'
import PropTypes from 'prop-types'

function Filter({ onChange }) {
  return (
    <Label>
      Find contacts by name:
      <Input onChange={onChange} type="text" name="filter"></Input>
    </Label>
  )
}

export default Filter

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
}
