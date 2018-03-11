import { Icon, Menu } from 'antd';
import last from 'lodash/last';
import propTypes from 'prop-types';
import React from 'react';

class CategoriesMenu extends React.PureComponent {
	static propTypes = {
		categoriesById: propTypes.object.isRequired,
		categorizeTransaction: propTypes.func.isRequired,
		transaction: propTypes.object,
		types: propTypes.arrayOf(
			propTypes.shape({
				allCategories: propTypes.arrayOf(propTypes.string.isRequired),
				id: propTypes.string.isRequired,
				type: propTypes.string.isRequired,
			}),
		).isRequired,
	};

	categorizeTransactionHandler = ({ key, keyPath }) => {
		const type = last(keyPath);
		const category = key;
		this.props.categorizeTransaction({
			transaction: this.props.transaction,
			category,
			type,
		});
	};

	render() {
		const { categoriesById, types } = this.props;

		return (
			<Menu
				style={{ width: 200 }}
				mode="vertical"
				theme="dark"
				onClick={this.categorizeTransactionHandler}
			>
				{types.map(({ allCategories, id, type }) => (
					<Menu.SubMenu
						key={id}
						title={
							<span>
								<Icon type="mail" />
								<span>{type}</span>
							</span>
						}
						onTitleClick={e => console.log(e)}
					>
						{allCategories.map(categoryId => (
							<Menu.Item key={categoryId}>
								{categoriesById[categoryId].category}
							</Menu.Item>
						))}
					</Menu.SubMenu>
				))}
			</Menu>
		);
	}
}

export default CategoriesMenu;
