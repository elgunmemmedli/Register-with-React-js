import React, {useState} from "react";
import { useFormik } from "formik";
import validationSchema from "./AddValidation";
import { RandomImage, AddproductsDb } from "../../api";


const Addproducts = () => {

  const [cariImage, setCariImage] = useState('https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg')


    const Image = async () =>{
      setCariImage('https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831');
   let  gelenSekil = await RandomImage();
    formik.values.image = gelenSekil;
    setCariImage(gelenSekil);
    }

  const formik = useFormik({
    initialValues: {
      title: "",
      context: "",
      price: "",
      image: "",
      status: 0,
    },
    validationSchema,
    onSubmit: async (values, { resetForm , setErrors }) => {
     try{
      let gelenData = await AddproductsDb(values);
      resetForm({values : ""});
      setErrors({ general: 'Successful operation'});
     }catch(e){
      setErrors({ general: 'An error occurred'});
     }
    },
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-3">
        {formik.errors.general && (
                <div class="alert alert-success" role="alert">
                  {formik.errors.general}
                </div>
              )}
          <form onSubmit={formik.handleSubmit}>
            <h1 className="h3 mb-3 fw-normal">Add Products</h1>
            <div className="form-floating">
              <input
                type="text"
                name="title"
                className={`form-control  ${
                  formik.touched.title && formik.errors.title && "is-invalid"
                }  `}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                id="title"
              />
              <label htmlFor="title" className="form-label">
                Product Title
              </label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                name="context"
                className={`form-control my-3  ${
                  formik.touched.context &&
                  formik.errors.context &&
                  "is-invalid"
                }  `}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.context}
                id="context"
              />
              <label htmlFor="lastName" className="form-label">
                Product About
              </label>
            </div>
            <div className="form-floating">
              <input
                type="number"
                name="price"
                className={`form-control my-3  ${
                  formik.touched.price && formik.errors.price && "is-invalid"
                }  `}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
                id="price"
              />
              <label htmlFor="price" className="form-label">
                Product Price
              </label>
            </div>
            {/* <div className="form-floating">
              <input
               
                name="password"
                className={`form-control my-3  ${formik.touched.password && formik.errors.password && 'is-invalid' }  `}
               type="file" onChange={(event) => {
                    formik.setFieldValue("file", event.currentTarget.files[0]);
                  }}
                id="password"
              />
             <label htmlFor="title" className="form-label">title</label>
            </div> */}

            <div className="form-floating mb-3 d-flex  justify-content-between align-items-center">
              <div>
              <button className="btn btn-warning" type="button" onClick={Image} > Random Image </button>

              </div>
              <img src={cariImage} width="100px" alt="" />
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
           Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addproducts;
