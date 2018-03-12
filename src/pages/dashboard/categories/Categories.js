import { Button, Collapse, List, Popover } from 'antd';
import propTypes from 'prop-types';
import React from 'react';
import Card from 'shared/components/Card';
import AddNewCategory from './addNew/AddNewCategory';

import './Categories.css';

const { Panel } = Collapse;

class Categories extends React.PureComponent {
	static propTypes = {};

	render() {
		const { isLoading, types } = this.props;

		return (
			<div className="categories-wrapper">
				<Card isLoading={isLoading} title="Categories">
					<Collapse bordered onChange={(e) => console.log(e)}>
						{types.map(({ allCategories, id, type }) => (
							<Panel header={type} key={id}>
								<List
									itemLayout="horizontal"
									dataSource={allCategories}
									renderItem={(category) => (
										<List.Item>
											<List.Item.Meta title={category} />
										</List.Item>
									)}
								/>
								<AddNewCategory />
							</Panel>
						))}
					</Collapse>
				</Card>
			</div>
		);
	}
}

export default Categories;
