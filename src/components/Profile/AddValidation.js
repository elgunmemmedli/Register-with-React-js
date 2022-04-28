import * as yup from 'yup';


const validations = yup.object().shape({
    title: yup.string().required(),
    context: yup.string().required(),
    price : yup.number(),
    image : yup.string()
  });

 export default validations;