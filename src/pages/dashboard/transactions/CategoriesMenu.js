import { Icon, Menu } from 'antd';
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'
import last from 'lodash/last'
import propTypes from 'prop-types'
import React from 'react'


const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
const Item = Menu.Item

class CategoriesMenu extends React.PureComponent {

    static propTypes = {
        categories: propTypes.array.isRequired
    }

    onClick = ({ key, keyPath }) => {
        const primaryCategory = last(keyPath)
        const subCategory = key
        this.props.updateTransactionCategory({
            transaction: this.props.transaction,
            primaryCategory,
            subCategory
        })
    }

    render(){

        const { props } = this

        return (
            <Menu
                style={{ width: 200 }}
                mode="vertical"
                theme="dark"
                onClick={this.onClick}>
                {props.categories.map(category =>
                    <SubMenu
                        key={category.name}
                        title={<span><Icon type="mail" /><span>{category.name}</span></span>}
                        onTitleClick={e => console.log(e)}>
                        {map(category.subCategories, (value, categoryName) => (
                                <Item key={categoryName}>{categoryName}</Item>
                            ))
                        }
                    </SubMenu>
                )}
          </Menu>
        )
    }
}

export default CategoriesMenu
