import { Icon, Menu } from 'antd';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import last from 'lodash/last';
import propTypes from 'prop-types';
import React from 'react';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Item = Menu.Item;

class CategoriesMenu extends React.PureComponent {
    static propTypes = {
      types: propTypes.arrayOf(propTypes.shape({
        allCategories: propTypes.arrayOf(propTypes.string.isRequired),
        id: propTypes.string.isRequired,
        type: propTypes.string.isRequired,
      })).isRequired,
    }

    onClick = ({ key, keyPath }) => {
      const primaryCategory = last(keyPath);
      const subCategory = key;
      this.props.updateTransactionCategory({
        transaction: this.props.transaction,
        primaryCategory,
        subCategory,
      });
    }

    render() {
      const { types } = this.props;

      return (
        <Menu
          style={{ width: 200 }}
          mode="vertical"
          theme="dark"
          onClick={this.onClick}
        >
          {
                types.map(({ allCategories, id, type }) => (
                  <SubMenu
                    key={type}
                    title={<span><Icon type="mail" /><span>{type}</span></span>}
                    onTitleClick={e => console.log(e)}
                  >
                    {allCategories.map(category => (
                      <Item key={category}>{category}</Item>
                                    ))
                                }
                  </SubMenu>
                ))
            }
        </Menu>
      );
    }
}

export default CategoriesMenu;
