import { connect } from 'react-redux'
import Total from '../components/Total'
import calculateTotal from '../../../helpers/calculateTotal'

console.log('calculateTotal: ', calculateTotal);

const mapStateToProps = state => ({
  total: calculateTotal(state.assets)
})

export default connect(mapStateToProps)(Total)
