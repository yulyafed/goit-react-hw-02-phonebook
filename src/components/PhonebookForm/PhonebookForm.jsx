import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
});

const initialValues = {
    name: "",
}


export const PhonebookForm = ({ contacts }) => { 
    console.log(contacts)
     
      const handleSubmit = (values, { contacts }) => {
            
        // return console.log(contacts) ;
      }
    
    
        return (

        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ schema } >

            <Form autoComplete='off' >

                <label htmlFor="name">
                    Name
                    <Field
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required/>
                <ErrorMessage name="name"/>    
                  
                </label>
                <button type='submit' >Add contact </button>
                                           
            </Form>
 
        </Formik>

    )
}