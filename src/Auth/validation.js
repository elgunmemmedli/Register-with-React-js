import * as yup from 'yup';


const validations = yup.object().shape({
    firstName: yup.string(),
    lastName: yup.string(),
    email : yup.string().email('Duzgun email daxil edin').required('Daxil edin'),
    password : yup.string().min(5, 'Minimum 5 daxil edin').required('Daxil edin')
  });

 export default validations;