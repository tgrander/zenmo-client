import propTypes from 'prop-types'
import React from 'react'
import Card from '../../../shared/components/Card'
import { Collapse } from 'antd'

import './Categories.css'

const Panel = Collapse.Panel

class Categories extends React.PureComponent {

    static propTypes = {
        isLoading: propTypes.bool
    }

    render() {

        const { props } = this

        return (
            <div className="categories-wrapper">

                <Card {...{
                    isLoading: props.isLoading,
                    title: 'Categories'
                }}>

                    <Collapse>



                    </Collapse>

                </Card>
            </div>
        )
    }
}

export default Categories
