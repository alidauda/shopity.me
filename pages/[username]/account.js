
export default function Test(){
    function goBack() {

        window.history.back();
      
        }
      
    return (
        <div>
            <button onClick={goBack}>Go Back</button> 
        </div>
    );

}
