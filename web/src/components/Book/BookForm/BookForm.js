import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  SelectField,
  Submit,
} from '@redwoodjs/forms'
import { PickerDropPane } from 'filestack-react'
import { useState } from 'react'

const BookForm = (props) => {
  const [image, setImage] = useState(props?.image?.image)

  const onSubmit = (data) => {
    const dataWithUrl = Object.assign(data, { image })
    props.onSave(dataWithUrl, props?.book?.id)
  }

  const onFileUpload = (response) => {
    setImage(response.filesUploaded[0].url)
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

        <div className="drop-pane-wrapper">
          <PickerDropPane
            apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY}
            onSuccess={onFileUpload}
          />
        </div>

        {image && (
          <img
            src={image}
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
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default BookForm
