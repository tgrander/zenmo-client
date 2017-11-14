import { Icon, Menu } from 'antd';
import map from 'lodash/map'
import propTypes from 'prop-types'
import React from 'react'


const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
const Item = Menu.Item

class CategoriesMenu extends React.PureComponent {

    static propTypes = {
        categories: propTypes.array.isRequired
    }

    render(){

        const { props } = this

        return (
            <Menu
                style={{ width: 240 }}
                mode="vertical">
                {props.categories.map(category => (
                    <SubMenu
                        key={category.name}
                        title={<span><Icon type="mail" /><span>{category.name}</span></span>}>
                        {map(category.subCategories, (value, key) => (
                            <Item key={key}>{key}</Item>
                        ))}
                    </SubMenu>
                ))}
          </Menu>
        )
    }
}

export default categories => () => <CategoriesMenu categories={categories} />
