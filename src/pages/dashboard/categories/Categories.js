import propTypes from 'prop-types'
import React from 'react'
import Card from '../../../shared/components/Card'
import { Collapse } from 'antd'

import './Categories.css'

const Panel = Collapse.Panel

class Categories extends React.PureComponent {

    static propTypes = {
        
    }

    render() {

        return (
            <div className="categories-wrapper">
                <Card title="Categories">

                    <Collapse>



                    </Collapse>

                </Card>
            </div>
        )
    }
}

export default Categories
