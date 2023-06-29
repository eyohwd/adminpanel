import Avaimg1 from './assets/ava1.jpg';
import Avaimg2 from './assets/ava2.jpg';
import Avaimg3 from './assets/ava3.jpg';
import Avaimg4 from './assets/ava4.jpg';
import Avaimg5 from './assets/ava5.jpg';
import Avaimg6 from './assets/ava6.jpg';
import Avaimg7 from './assets/ava7.jpg';
import Avaimg8 from './assets/ava8.jpg';
import Avaimg9 from './assets/ava9.jpg';
import Avaimg10 from './assets/ava10.jpg';


export const columns= [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 230, 
    renderCell:(params)=>{
        return(
            
            <div className='cellWidthImg'>
                <img className='cellImg' src={params.row.img} alt='avatar'/>
                {params.row.username}
            </div>
            
            
        )
    }},

    {
        field: 'email', 
        headerName: 'Email', 
        width: 230
    },

    {
        field: 'age', 
        headerName: 'Age', 
        width: 100
    },

    
    {
        field: 'statu', 
        headerName: 'Status', 
        width: 160,
        renderCell: (params)=>{
            return (
                <div className={`cellWidthStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
]


export const rows = [
    {
    id: 1,
    username: "Snow",
    img: Avaimg1,
    status: "active",
    email: "snow@gmail.com",
    age: 35,
},
 
{
    id: 2,
    username: "Jamie Lannister",
    img: Avaimg2,
    status: "passive",
    email: "Jamiegmail.com",
    age: 42,
},

{
    id: 3,
    username: "Seun",
    img: Avaimg3,
    status: "pending",
    email: "seau@gmail.com",
    age: 72,
},

{
    id: 4,
    username: "Wale",
    img: Avaimg4,
    status: "pending",
    email: "wale@gmail.com",
    age: 50,
},

{
    id: 5,
    username: "Targaryen",
    img: Avaimg5,
    status: "passive",
    email: "targar@gmail.com",
    age: 22,
},

{
    id: 6,
    username: "Melisandre",
    img: Avaimg6,
    status: "active",
    email: "melisandre@gmail.com",
    age: 15,
},

{
    id: 7,
    username: "Clifford",
    img: Avaimg7,
    status: "passive",
    email: "clifford@gmail.com",
    age: 44,
},

{
    id: 8,
    username: "Frances",
    img: Avaimg8,
    status: "active",
    email: "frances@gmail.com",
    age: 36,
},

{
    id: 9,
    username: "Roxie",
    img: Avaimg9,
    status: "pending",
    email: "roxie@gmail.com",
    age: 65,
},

{
    id: 10,
    username: "Femi",
    img: Avaimg10,
    status: "active",
    email: "femi@gmail.com",
    age: 35,
},
]
