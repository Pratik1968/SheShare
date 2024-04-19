export default function RootLayout(){
    return(
        <div className="w-full p-5 flex flex-row bg-primary">
<Logo/>
<Tabs/>
<User/>

        </div>
    )
}
function Logo(){
    return(
        <div className="flex-[2]">
<p className="">SheShare</p>
        </div>
    )
}
function Tabs(){
    const Tab = ({text}:{text:string})=>{
 return       <div>
{text}
<div></div>
        </div>
    }
    return(
        <div className="flex-[5] flex flex-row">
<Tab text={"Home"}></Tab>
<Tab text={"Rent"}></Tab>
<Tab text={"Host"}></Tab>
<Tab text={"Cities"}></Tab>
        </div>
    )
}
function User(){
    return(
        <div className="flex-1 bg-white">

        </div>
    )
}