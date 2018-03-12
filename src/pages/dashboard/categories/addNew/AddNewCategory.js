import { Button, Input, Popover } from 'antd';
import React, { PureComponent } from 'react';

class InputCategory extends PureComponent {
	componentDidMount() {
		this.textInput.focus();
	}

	render() {
		return (
			<Input
				size="small"
				placeholder="small size"
				ref={(input) => (this.textInput = input)}
			/>
		);
	}
}

export default class AddNewCategory extends PureComponent {
	state = {
		visible: false,
	};

	hide = () => {
		this.setState({
			visible: false,
		});
	};

	handleVisibleChange = (visible) => {
		this.setState({ visible });
	};

	render() {
		return (
			<Popover
				content={<InputCategory />}
				title="Title"
				trigger="click"
				visible={this.state.visible}
				onVisibleChange={this.handleVisibleChange}
			>
				<Button type="primary" icon="plus-circle-o" size="small">
					Add New
				</Button>
			</Popover>
		);
	}
}
