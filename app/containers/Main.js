import React, {Component} from 'react'
import {Link} from 'react-router'
import GetCityContainer from './GetCityContainer'

const styles = {
    container: {
        width: '100%',
        height: '92%'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(252, 90, 44, 0.89)',
        color: '#fff',
        padding: 5,
    },
    link: {
        color: '#fff'
    }
}

class Main extends Component {
    render () {
        return (
            <div style={styles.container}>
                <div style={styles.header}>
                    <h2 style={{ margin: 0, marginLeft: 20}}>
                        <Link to="/" style={styles.link}>
                            Home
                        </Link>
                    </h2>
                    <GetCityContainer direction='row' />
                </div>
                {this.props.children}
            </div>
        )
    }
};

export default Main;