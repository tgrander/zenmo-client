import { Dropdown, Button, Icon, Menu } from 'antd';
import propTypes from 'prop-types';
import React from 'react';

class Category extends React.PureComponent {
	static propTypes = {
		category: propTypes.string,
		pendingCategory: propTypes.string,
	};

	render() {
		const { category, pendingCategory } = this.props;
		return (
			<Dropdown overlay={this.props.menu}>
				<Button style={{ marginLeft: 8 }}>
					{pendingCategory || (category || 'Undefined')}
					<Icon type="down" />
				</Button>
			</Dropdown>
		);
	}
}

export default Category;
