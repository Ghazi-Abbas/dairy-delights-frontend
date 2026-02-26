import Header from "./Header";
import Rolling from "./Rolling";

export default function NevBar({OnSerchEvent ,onChange}){
    return(
        <div style={{position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%'}} >
            <Rolling/>
            <Header OnSerchEvent={OnSerchEvent}  onChange={onChange}/>
        </div>
    )
}