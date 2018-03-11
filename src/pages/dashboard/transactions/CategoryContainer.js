import { connect } from 'react-redux';
import Category from './Category';

const mapStateToProps = ({ categories }, ownProps) => {
	const { categoriesById } = categories;
	const { pendingCategory } = ownProps;
	return {
		category: ownProps.category,
		pendingCategory: pendingCategory
			? categoriesById[pendingCategory].category
			: null,
	};
};

export default connect(mapStateToProps)(Category);
