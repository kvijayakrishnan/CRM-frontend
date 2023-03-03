import './UpdateEmployee.css'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';


const UpdateEmployee = () => {

    const params = useParams();
    const navigate = useNavigate();

    const [employeeDetails, setEmployeeDetails] = useState({
        name:'',
        email:'',
        mobileNumber:'',
        address:'',
        dob:'',
        profession:'',
    })
   
    useEffect(() => {
        const empID = params.empID.toString();

        axios.get(`${process.env.REACT_APP_BASE_URL}/employees/${empID}`).then((response) =>{
            setEmployeeDetails(response.data);
            console.log('Reponse: ', response.data);
        }).catch(error => {
            console.log('Error: ', error);
        })
    }, [params.empID])

    useEffect(()=>{
        // employeeDetails;
    },[])



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Employee Details : ', employeeDetails);
        try{
            const empID = params.empID.toString();
            const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/employees/${empID}`, employeeDetails);
            if(response){
                setEmployeeDetails({
                    name:'',
                    email:'',
                    mobileNumber:'',
                    address:'',
                    dob:'',
                    profession:'',
                });

                navigate('/');
            }
        }catch(error){
            console.log('Error while register user: ', error);
        }
    }

    const handleChange = (value) => {
        return setEmployeeDetails((employee) => {
            return {...employee, ...value}
        })
    }



    
    return(
        <div>
            <h3 className='employeeList'>Update an Employee</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" id="name" type="text" value={employeeDetails.name} onChange={(e) => handleChange({name: e.target.value})} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" id="email" type="text" value={employeeDetails.email} onChange={(e) => handleChange({email: e.target.value})}  />
                </div>
                <div className="form-group">
                    <label>Mobile Number</label>
                    <input className="form-control" id="mobileNumber" type="text" value={employeeDetails.mobileNumber} onChange={(e) => handleChange({mobileNumber: e.target.value})}  />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input className="form-control" id="address" type="text" value={employeeDetails.address}  onChange={(e) => handleChange({address: e.target.value})}  />
                </div>
                <div className="form-group">
                    <label>D.O.B</label>
                    <input className="form-control" id="dob" type="text" value={employeeDetails.dob}  onChange={(e) => handleChange({dob: e.target.value})} />
                </div>
                <div className="form-group">
                    <label>Role</label>
                    <input className="form-control" id="role" type="text" value={employeeDetails.profession}  onChange={(e) => handleChange({profession: e.target.value})}  />
                </div>
                <div className="form-group">
                    <input className="btn btn-primary" value="Update an Employee" type="submit"/>
                </div>
            </form>
        </div>
    )
}


export default UpdateEmployee;




