import { useState } from 'react'

import { PickerDropPane } from 'filestack-react'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  SelectField,
  Submit,
} from '@redwoodjs/forms'

const BookForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.book?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        <TextField
          name="title"
          defaultValue={props.book?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="image"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image
        </Label>
        <div>{props.book?.image}</div>
        <TextField
          name="image"
          defaulValue={props.book?.image}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="image" className="rw-field-error" />

        {props.book?.image && (
          <img
            src={props.book?.image}
            alt="book cover"
            style={{ marginTop: '2rem', width: '100px' }}
          />
        )}

        <Label
          name="categoryId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Category
        </Label>
        <SelectField
          className="rw-input"
          name="categoryId"
          defaultValue={props.book?.category.name}
        >
          {props.categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </SelectField>

        <FieldError name="categoryId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button">
            Add
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default BookForm
