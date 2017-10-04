import { Collapse } from 'antd'
import map from 'lodash/map'
import propTypes from 'prop-types'
import React from 'react'
import Card from 'shared/components/Card'
import Category from './Category'


import './Categories.css'


const { Panel } = Collapse

class Categories extends React.PureComponent {

    static propTypes = {
        changeTransactionsFilter: propTypes.func.isRequired,
        isLoading: propTypes.bool.isRequired
    }

    render() {

        const { props } = this

        return (
            <div className="categories-wrapper">

                <Card {...{
                    isLoading: props.isLoading,
                    title: 'Categories'
                }}>

                    <Collapse {...{
                            bordered: false,
                            onChange: e => console.log(e)
                        }}>

                        {map(props.categories, (value, key) => (
                            <Panel {...{
                                    header: <Category {...{
                                        amount: value.toFixed(2),
                                        name: key
                                    }}/>,
                                    key
                                }}>
                                <p>{'category info'}</p>
                            </Panel>
                        ))}

                    </Collapse>

                </Card>
            </div>
        )
    }
}

export default Categories
