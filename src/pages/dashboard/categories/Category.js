import { List } from 'antd';
import propTypes from 'prop-types';
import React from 'react';

function Category() {
	return (
		<List
			itemLayout="horizontal"
			dataSource={data}
			renderItem={item => (
				<List.Item>
					<List.Item.Meta
						avatar={
							<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
						}
						title={<a href="https://ant.design">{item.title}</a>}
						description="Ant Design, a design language for background applications, is refined by Ant UED Team"
					/>
				</List.Item>
			)}
		/>
	);
}

export default Category;
