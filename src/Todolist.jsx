import "./todolist.css"

export default function Todolist(props) {

 
    return (
        <div className='todolist'>
           {props.iteamlist.map((iteamObj)=>{
               return(
                  <div className="iteam">
               <p key={iteamObj.Key}>{iteamObj.iteam}</p>
               
               </div>
               )
           })}
        </div>
    )
}
