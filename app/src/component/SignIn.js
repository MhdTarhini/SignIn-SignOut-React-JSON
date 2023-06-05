import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseFetchUser from "../hooks/useFetchUsers";


function SignIn() {
    const [formValues, setFormValues] = useState({
      UserName: "",
      Password: "",
    });
    const [formErrors,setFormErrors]=useState({});
    const [submit,setSubmit]=useState(false);
    const {User}=UseFetchUser();
    const navigate=useNavigate();

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormValues({...formValues,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormErrors(Validated(formValues));
        setSubmit(true);
    }
    useEffect(() => {
      if (Object.keys(formErrors).length === 0 && submit) {
        navigate("/homePage");
      }}, [submit, formErrors,navigate]);
      
      const Validated = (formValues)=>{
        let ValidUser=false;
        let ValidPassword = false;
        const errors={};
        if(!formValues.Password||!formValues.UserName){
            errors.FillRequired="fill required forms"
          }else{
          User.map((ele)=>{
          if (ele.UserName !== formValues.UserName) {
            errors.FillRequired = "Invalid User Name or Password";
          }else{
              ValidUser = true;
              if (ele.Password !== formValues.Password) {
                errors.Password = "Invalid Password";
              }else{
                 ValidPassword = true;
              }
            }
            return errors
          });
          if (ValidUser === true && ValidPassword===true) {
            delete errors.FillRequired; 
            delete errors.Password;
          }
        }
          return errors
      }



  return (
    <form
      style={{
        width: 400,
        height: 400,
        position: "relative",
        marginLeft: "auto",
        marginRight: "auto",
        top: "70px",
        borderRadius: "8%",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px 15px",
      }}
      onSubmit={handleSubmit}>
      <div style={{ textAlign: "center", paddingTop: 20, fontSize: 30 }}>
        Sign in
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
          <span style={{ fontSize: 12, textAlign:"center"}} className="m-0 text-danger h6">
            {formErrors.FillRequired}
          </span>
          </div>
          <p style={{ textAlign: "center", marginBottom: 10, marginTop: 20 }}>
            New Here ? <Link to="/SignUp">Sign Up</Link>
          </p>
          <button
            style={{ marginTop: 15 }}
            type="Submit"
            className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default SignIn;
