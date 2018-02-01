/**
 * Created by Sourabh Punja on 1/31/2018.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{
    
    renderField(field) {
        return (
        <div className="form-group">
        <label>{field.label}</label>
            <input
                type="text"
                {...field.input}/>
                {field.meta.errors}
        </div>
        );
    }

    render() {
        return (
           <form>
               <Field
                   label="Title For Post"
                   name="title"
                   component={this.renderField}
               />
               <Field
                   label="Categories"
                   name="categories"
                   component={this.renderField}
               />
               <Field
                   label="Post Content"
                   name="content"
                   component={this.renderField}
               />
           </form>
        );
    }
}

function validate(values) {
    //console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf'}
    const errors = {};

    // Validate the inputs from 'values'
    if (!values.title || values.title.length < 3) {
        errors.title = "Enter a title that is at least 3 characters!";
    }
    if (!values.categories) {
        errors.categories = "Enter a categories!";
    }
    if (!values.content) {
        errors.content = "Enter a content please!";
    }
    
    // If errors is empty, the form is fine to submit
    // If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);
