import { connect } from 'react-redux';
import { updateTransactionCategory } from 'modules/transactions/actions';
import CategoriesMenu from './CategoriesMenu';


const mapStateToProps = ({ categories }) => {
  const { allTypes, typesById } = categories;

  const types = allTypes.map(typeId => typesById[typeId]);

  return {
    types,
  };
};

export default connect(mapStateToProps, { updateTransactionCategory })(CategoriesMenu);
