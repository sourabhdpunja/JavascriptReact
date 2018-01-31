/**
 * Created by Sourabh Punja on 1/31/2018.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{
    render() {
        return (
           <form>
               <Field
                   name="title"
                   component={}
               />
           </form>
        );
    }
}


export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);
