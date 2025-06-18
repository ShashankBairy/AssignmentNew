import axios from "axios";

const API_BASE_URL = "http://localhost:8080"

export const feeheads = async()=>{
    try{
        const response = await fetch(`${API_BASE_URL}/getAllFeeHeads`);
        const result = await response.json();
        return result;
    }
    catch(error){
        console.log(error);
    }
}

export const studentMajorInfo = async(studentId) =>{
    const result = await axios.get(`${API_BASE_URL}/getStudentInfo?studentId=${studentId}`);
    return result;
}

export const addPayment = async (studentId, cash) => {
    console.log(cash);
    const result = await axios.post(
        `${API_BASE_URL}/payment?studentId=${studentId}`,
        JSON.stringify(cash),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    return result;
};

export const studentProfile = async(studentId)=>{
    try{
        const response = await fetch(`${API_BASE_URL}/getStudentProfile?studentId=${studentId}`);
        const result = await response.json();
        return result;
    }catch(error){
        console.log(error);
    }
}


export const requestCancellation = async(studentId, classType, requestBody)=>{
  const response = await axios.put(`${API_BASE_URL}/requestCancellation?studentId=${studentId}&classType=${classType}`, requestBody);
  return response;
}

export const getPaymentsHistory =async(studentId) =>{
    const result = await axios.get(`${API_BASE_URL}/paymentsHistory?studentId=${studentId}`);
    console.log(result.data.data);
    return result.data;
}