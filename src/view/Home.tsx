import React, { Component } from 'react'
import {observer,inject} from 'mobx-react'

@observer
@inject(store => store)
export default class Home extends Component {
    render() {
        return (
            <div>
                this is Home page
            </div>
        )
    }
    componentDidMount () {
        console.log(this.props);
    }
}
