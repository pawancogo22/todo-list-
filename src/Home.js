import React from 'react'
import { useState,useEffect } from 'react';
const Form = () => {
    const [name, setName] = useState("");
    const [todos, setTodos] = useState([])
    const [filters, setFilter] = useState(0)
    useEffect(() => {
        let tempTodos = localStorage.getItem('todos');
        console.log(tempTodos);
        if (tempTodos)
        setTodos(JSON.parse(tempTodos));
    }, []);
    const handleSubmit = (evt) => {
        evt.preventDefault();
        setTodos([...todos, {name:name, status:0}])
        setName("")
        let copyTodo = todos.map((todo,index) => {
            return todo
        })
        localStorage.setItem('todos', JSON.stringify([...copyTodo, {name:name, status:0}]))
    }
    const deleteTodo = (index) => {
        // let tempTodos = 
        // let arr = todos.filter()
        setTodos((todos) => todos.filter((_, index) => index !== index));
    }
    const handleCheckBox  = (e,id) => {
        let arr = todos.map((todo,index) => {
            return todo
        })
        if (arr[id].status == 0) arr[id].status = 1;
        else arr[id].status = 0;
        localStorage.setItem('todos', JSON.stringify(arr))
        setTodos(arr)
    }
    const showOnlyChecked = (f) => {
        setFilter(f);
    } 
    
    return (
        <>
        <h1>Todo Project</h1>
        <div className='main'>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: 
                    <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                </label>
                <input type="submit" value="Add" />
            </form>
            <button onClick={e=>showOnlyChecked(0)}>Show All</button>
            <button onClick={e=>showOnlyChecked(1)}>Pending</button>
            <button onClick={e=>showOnlyChecked(2)}>Done</button>
            {
                todos.map((value, index)=>{
                    if ((filters == 0 && (value.status == 0 || value.status == 1)) || (filters == 1 && value.status == 0) || (filters == 2 && value.status == 1))
                    return (
                        <>
                        <div className='flex' key={index}>
                            <div className='newFlex'>
                                <div>
                                    <input type="checkbox" name="checkbox" id="check"  onChange={e => handleCheckBox(e.target.checked, index)} checked = {(value.status == 1 ? 'checked' : '' )} />
                                </div>
                                <div>
                                    <h2 className={(value.status == 1 ? 'strike' : 'notstrike' )} id={index}>{value.name}</h2>
                                </div>
                            </div>
                            <div className='delete' onClick={()=>deleteTodo(index)}>delete</div>
                        </div>
                        </>
                        ) 
                    })
            }
                
        </div>
        </>
    )
}
// function Counter() {
//     const data = [
//         {
//             id: 0,
//             name : "First",
//             price : 10,
//         },
//         {
//             id: 1,
//             name : "Second",
//             price : 20,
//         },
//         {
//             id: 2,
//             name : "Third",
//             price : 30,
//         },
//         {
//             id: 3,
//             name : "Foruth",
//             price : 40,
//         },
//     ]
//     const initalVal = 10000000
//     let initArr = [0,0,0,0,0]
//     const [count, setCount] = useState(initArr);
//     const [item, setItem] = useState(0);
//     const [totalPrice, setTotalPrice] = useState(initalVal);
//     const changeValue = (val, price, index) => {
//         console.log("index", index);
//         if (val == 0) {
//             let arr = count;
//             arr[index] = arr[index] + 1
//             console.log(arr, index);
//             setCount(arr);
//             setTotalPrice(totalPrice - price);
//             setItem(item + 1)
//         } else {
//             if (count[index] > 0) {
//                 let arr = count;
//                 arr[index] = arr[index] - 1
//                 setCount(arr);
//                 setTotalPrice(totalPrice + price);
//                 setItem(item - 1)
//             }
//         }
        
//     }
//     return (
//         <>
//         {
//             <h1>Initial Amout : {totalPrice}</h1>   
//         }
//         <div>

//         {
//             data.map((val, index)=> {
//                 return (
//                     <>
//                     <div className="column">
//                         <div className="card">

//                         <div key={index}>
//                             <p>{val.name}</p>
//                             <div className='flexBox'>

//                                 <button onClick={()=> changeValue(-1, val.price, index)}>
//                                 <span className="fa fa-minus"></span>
//                                 </button>
//                                 <input type="text" value={count[index]} name="count"/>
//                                 <button onClick={()=> changeValue(0, val.price, index)}>
//                                     <span className="fa fa-plus"></span>
//                                 </button>
//                             </div>
//                                 <p>Price : ${val.price}</p>
//                         </div>
//                         </div>
//                         </div>
//                     </>
//                 )
//             })
//         }
//         </div>
//         <p className='addMargin'>Cart Value :{ initalVal - totalPrice}</p>
        
//         <p>Item Count :{item}</p>
        
        
//         </>
//     )
// }
function Home() {
  return (
    <>
        <Form />
        {/* <Counter /> */}
    </>
  )
}

export default Home