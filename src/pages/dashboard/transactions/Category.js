import { Dropdown, Button, Icon, Menu } from 'antd';
import propTypes from 'prop-types';
import React from 'react';

class Category extends React.PureComponent {
	static propTypes = {
		category: propTypes.string,
	};

	render() {
		const { category } = this.props;
		return (
			<Dropdown overlay={this.props.menu}>
				<Button style={{ marginLeft: 8 }}>
					{category || 'Undefined'}
					<Icon type="down" />
				</Button>
			</Dropdown>
		);
	}
}

export default Category;
