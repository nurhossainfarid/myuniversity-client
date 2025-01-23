import { useParams } from "react-router-dom";

const StudentDetails = () => {
    const {studentId} = useParams();
    return (
        <div>
            The Details of student id is {studentId}
        </div>
    );
};

export default StudentDetails;