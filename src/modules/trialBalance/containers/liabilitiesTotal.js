import { connect } from 'react-redux'
import Total from '../components/Total'
import calculateTotal from '../../../helpers/calculateTotal'

const mapStateToProps = state => ({
  total: calculateTotal(state.liabilities)
})

export default connect(mapStateToProps)(Total)
