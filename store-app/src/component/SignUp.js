import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseFetchCategory from "../hooks/useFetchCategory";
import UseFetchUser from "../hooks/useFetchUsers";


function SignUp() {

    const [formValues, setFormValues] = useState({
      UserName: "",
      Email:"",
      Password: "",
      category: [],
    });
    const [formErrors,setFormErrors]=useState({});
    const [submit,setSubmit]=useState(false);
    const { Category } = UseFetchCategory();
    const { User } = UseFetchUser();
    const navigate=useNavigate();

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormValues({...formValues,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        let checkBox = document.querySelectorAll("input[type=checkbox]");
        checkBox.forEach((ele) => {
          if (ele.checked && !formValues.category.includes(ele.name)) {
            formValues.category.push(ele.name);
          } else if (!ele.checked && formValues.category.includes(ele.name)) {
            formValues.category = formValues.category.filter(
              (item) => item !== ele.name
            );
          }
        });
        setFormErrors(Validated(formValues));
        setSubmit(true);
    }
    useEffect(() => {
      if (Object.keys(formErrors).length === 0 && submit) {
        fetch("http://localhost:9000/Users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        });
        navigate("homePage");
      }
    }, [submit, formErrors, formValues,navigate]);
    const Validated = (formValues)=>{
        const errors={};
        User.map((ele) => {
          if (!formValues.UserName) {
            errors.UserName = "User Name is required";
          } else if (ele.UserName === formValues.UserName) {
            errors.UserName = "User Name already exist";
          }
          if (!formValues.Email) {
            errors.Email = "Invalid Email";
          } else if (ele.Email === formValues.Email) {
            errors.Email = "Email already exist";
          }
          return errors
        });
        if(!formValues.Password||formValues.Password.length <=7){
            errors.Password="Invalid Password 8 Characters minimum"
        };
        if(formValues.category.length<1){
            errors.Category = "select Your favorite Category";
        }
        return errors
    }


  return (
    <form
      style={{
        width: 400,
        height: 600,
        position: "relative",
        marginLeft: "auto",
        marginRight: "auto",
        top: "70px",
        borderRadius: "8%",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px 15px",
      }}
      onSubmit={handleSubmit}>
      <div style={{ textAlign: "center", paddingTop: 20, fontSize: 30 }}>
        Sign SignUp
      </div>
      <div className="container">
        <div className="row">
          <div className="form-group row ">
            <label htmlFor="UserNames" className="col-sm-2 col-form-label m-1">
              UserName
            </label>
            <div className="col-sm-10">
              <input
                name="UserName"
                type="text"
                className="form-control"
                id="UserNames"
                placeholder="UserName"
                onChange={handleChange}
              />
            </div>
            <p style={{ fontSize: 12 }} className="m-0 text-danger h6">
              {formErrors.UserName}
            </p>
          </div>
          <div className="form-group row">
            <label
              htmlFor="staticEmail"
              className="col-sm-2 col-form-label m-1">
              Email
            </label>
            <div className="col-sm-10">
              <input
                name="Email"
                type="text"
                className="form-control"
                id="staticEmail"
                placeholder="example@gmail.com"
                onChange={handleChange}
              />
            </div>
            <p style={{ fontSize: 12 }} className="m-0 text-danger h6">
              {formErrors.Email}
            </p>
          </div>
          <div className="form-group row ">
            <label
              htmlFor="inputPassword"
              className="col-sm-2 col-form-label m-1">
              Password
            </label>
            <div className="col-sm-10">
              <input
                name="Password"
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <p style={{ fontSize: 12 }} className="m-0 text-danger h6">
              {formErrors.Password}
            </p>
          </div>
          <div
            style={{ height: 152 }}
            className="form-check form-check-inline mt-1">
            <label className="col-sm-2 col-form-label">Category</label>
            {Category.map((ele, index) => {
              return (
                <div key={ele}>
                  <label
                    className="form-check-label"
                    htmlFor={`inlineCheckbox-${index}`}>
                    {ele}
                  </label>
                  <input
                    className="form-check-input m-1 p-1"
                    type="checkbox"
                    id={`inlineCheckbox-${index}`}
                    name={ele}
                  />
                </div>
              );
            })}
            <p style={{ fontSize: 12 }} className="m-0 text-danger h6">
              {formErrors.Category}
            </p>
          </div>
          <span style={{ textAlign: "center", marginBottom: 10 }}>
            have an account ?
            <Link to="/" style={{marginLeft: 5}}>
              Sign In
            </Link>
          </span>
          <button
            style={{ position: "relative" }}
            type="submit"
            className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
