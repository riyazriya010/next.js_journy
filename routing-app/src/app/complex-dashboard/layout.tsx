export default function DashboardLayout({ 
    children,
    user,
    revenue,
    notification,
    login,
 }:{
    children: React.ReactNode,
    user: React.ReactNode,
    revenue: React.ReactNode,
    notification: React.ReactNode,
    login: React.ReactNode
 }){
    const isLoggedIn = true
    return isLoggedIn ? (<>
    <div>{children}</div>
    <div style={{display: "flex"}}>
        <div style={{display: "flex", flexDirection: "column"}}>
            <div>{user}</div>
            <div>{revenue}</div>
        </div>
        <div style={{display: "flex", flex:1}}>{notification}</div>
    </div>
    </> ) : (
        <div>{login}</div>
    )
 }