import ErrorExample from "../../pages/ErrorExample";

const TestError = ({School}) => {
    if(School === "Nigeria") {
        throw new Error( "Not a school" );
    }

    return (  
        <ErrorExample error-example="Nhhh"/>
    );
}
 
export default TestError;