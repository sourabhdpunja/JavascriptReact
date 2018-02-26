/**
 * Created by Sourabh Punja on 2/20/2018.
 */

import React, { Component } from 'react';
import { connect } from 'react-router';

export default function (ComposedComponent) {
    class Authentication extends Component{
    static contextTypes = {
        router: React.PropTypes.object
    }

    componentWillMount(){
        if(!this.props.authenticated){
            this.context.router.push('/');
        }
    }

    componentWillUpdate(nextProps){
        if(!nextProps.authenticated){
            this.context.router.push('/');
        }
    }

        render(){
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state){
        return { authenticated: state.authenticated };
    }

    return connect(mapStateToProps)(Authentication);
}


// In Some Other location ... Not in this file ...
// We want to use this HOC
// import Authentication // Thic is my HOC
// import Resources // This is the component I want to wrap

// const ComposedComponent = Authentication(Resources);

//In some Render Method
{/*<ComposedComponent></ComposedComponent>*/}