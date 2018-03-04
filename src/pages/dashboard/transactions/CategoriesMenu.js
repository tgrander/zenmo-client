import { Icon, Menu } from 'antd';
import last from 'lodash/last';
import propTypes from 'prop-types';
import React from 'react';

const { Item, SubMenu } = Menu;

class CategoriesMenu extends React.PureComponent {
    static propTypes = {
      transaction: propTypes.object,
      types: propTypes.arrayOf(propTypes.shape({
        allCategories: propTypes.arrayOf(propTypes.string.isRequired),
        id: propTypes.string.isRequired,
        type: propTypes.string.isRequired,
      })).isRequired,
      categorizeTransaction: propTypes.func.isRequired,
    }

    categorizeTransactionHandler = ({ key, keyPath }) => {
      const type = last(keyPath);
      const category = key;
      this.props.categorizeTransaction({
        transaction: this.props.transaction,
        category,
        type,
      });
    }

    render() {
      const { types } = this.props;

      return (
        <Menu
          style={{ width: 200 }}
          mode="vertical"
          theme="dark"
          onClick={this.categorizeTransactionHandler}
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
