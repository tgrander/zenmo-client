import { Dropdown, Button, Icon, Menu } from 'antd';
import propTypes from 'prop-types'
import React from 'react'


class Category extends React.PureComponent {

    render(){
        const { props } = this
        return(
            <Dropdown overlay={this.props.menu}>
              <Button style={{ marginLeft: 8 }}>
                { props.category || 'Undefined' } <Icon type="down" />
              </Button>
            </Dropdown>
        )
    }
}

export default Category
