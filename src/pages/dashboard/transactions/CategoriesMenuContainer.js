import { connect } from 'react-redux';
import { categorizeTransaction } from '../../../modules/transactions/actions';
import CategoriesMenu from './CategoriesMenu';

const mapStateToProps = ({ categories }) => {
	const { allTypes, categoriesById, typesById } = categories;

	const types = allTypes.map((typeId) => typesById[typeId]);

	return {
		categoriesById,
		types,
	};
};

export default connect(mapStateToProps, { categorizeTransaction })(
	CategoriesMenu,
);
