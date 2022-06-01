import React from 'react'
import home from '../image/Home.png'
import cars from '../image/Administrator.png'
import menu from '../image/fi_menu.svg'
import arrowDown from '../image/fi_chevron-down.svg'

import { useState } from 'react'

function Cms() {
    const people = [
        {
            id: 1,
            userEmail: 'User Email',
            car: 'Car',
            startRent: 'Start Rent',
            finishRent: 'Finish Rent',
            price: 'Price',
            status: 'Status',
        },
        {
            id: 2,
            userEmail: 'User Email',
            car: 'Car',
            startRent: 'Start Rent',
            finishRent: 'Finish Rent',
            price: 'Price',
            status: 'Status',
        },
        {
            id: 3,
            userEmail: 'User Email',
            car: 'Car',
            startRent: 'Start Rent',
            finishRent: 'Finish Rent',
            price: 'Price',
            status: 'Status',
        },
        {
            id: 4,
            userEmail: 'User Email',
            car: 'Car',
            startRent: 'Start Rent',
            finishRent: 'Finish Rent',
            price: 'Price',
            status: 'Status',
        },
        {
            id: 5,
            userEmail: 'User Email',
            car: 'Car',
            startRent: 'Start Rent',
            finishRent: 'Finish Rent',
            price: 'Price',
            status: 'Status',
        },
        {
            id: 6,
            userEmail: 'User Email',
            car: 'Car',
            startRent: 'Start Rent',
            finishRent: 'Finish Rent',
            price: 'Price',
            status: 'Status',
        },
    ]

    const [clickMenu, setClickMenu] = useState(false)

    const handleClickMenu = () => {
        
        setClickMenu(!clickMenu)
    }

    const tableData = () => {
        const row = []
        for (let i = 1; i < 5; i++) {
            console.log(row)
            row.push(
                <tr key={i}>
                    <td>{i}</td>
                    <td>User Email</td>
                    <td>Car</td>
                    <td>Start Rent</td>
                    <td>Finish Rent</td>
                    <td>Price</td>
                    <td>Status</td>
                </tr>
            )
            return row
        }
    }

    const printNumbers0To5 = () => {
        const test = [];
        for (var i = 0; i < 5; i++) {
            test.push(<p key={i}>{i}</p>);
        }
        return test;
    };

    return (
        <>
            <div className="wrapper-admin flex flex-row">
                <div className= {`${!clickMenu ? 'hidden ' : 'flex '} flex-col w-screen-30 h-screen-200`}>
                    <div className='flex flex-col h-screen  font-helvetica '>
                        <div className='h-[70px]  flex'>
                            <nav className='flex justify-center w-[100px] items-center  bg-background-blue-car'>
                                <div className='bg-slate-400 w-[40px] h-[40px]'></div>
                            </nav>
                            <div className='flex items-center w-[320px]  min-w-[100px]'>
                                <div className='font-bold px-3'><p>Binarian</p></div>
                            </div>
                        </div>
                        <div className='flex flex-row h-full'>
                            <div className=' flex gap-y-5 items-center flex-col w-[100px] bg-background-blue-car'>
                                <button>
                                    <img className='mt-5 w-[80px]' src={home} alt="" />
                                </button>
                                <button>
                                    <img className='w-[80px]' src={cars} alt="" />
                                </button>
                            </div>
                            <div className='w-[320px]'>
                                <div className='flex flex-col gap-y-4'>
                                    <div className='text-slate-500 font-bold text-[24px] px-5'>DASHBOARD</div>
                                    <div className='font-bold text-[20px] bg-[#CFD4ED] px-5'>Dashboard</div>
                                </div>

                                <div className='hidden flex-col gap-y-4'>
                                    <div className='text-slate-500 font-bold text-[24px] px-5'>Cars</div>
                                    <div className='font-bold text-[20px] bg-[#CFD4ED] px-5'>Cars</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col w-screen-70 h-screen-200  font-helvetica'>
                    <div className='flex justify-between px-5  h-[100px]'>
                        <div className='flex'>
                            <button onClick={handleClickMenu}>
                                <img src={menu} alt="" />
                            </button>
                        </div>
                        <div className='flex gap-x-5 '>
                            <div className=' flex flex-row items-center'>
                                <input className='border-2 border-[rgba(0, 0, 0, 0.1)] h-[40px] rounded-[4px] w-[200px] px-3' type="text" placeholder='Search' />
                                <button className='border-2 border-background-blue-car w-[90px] h-[40px] rounded-[4px] text-background-blue-car font-bold'>Search</button>
                            </div>
                            <div className='flex items-center gap-x-3'>
                                <div className='rounded-full w-[50px] h-[50px] bg-slate-400'></div>
                                <div>Admin</div>
                                <img src={arrowDown} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='font-helvetica p-10  h-screen flex flex-col gap-y-5'>
                        {/* {printNumbers0To5()} */}
                        <div className='font-bold'>
                            <p> Dashboard &gt; <span className='font-normal'>Dashboard</span></p>
                        </div>
                        <h2 className='font-bold text-[32px]'>Dashboard</h2>
                        <div className='flex flex-row items-center gap-x-2'>
                            <div className='w-[5px] h-[30px] bg-background-blue-car'></div>
                            <p className='font-bold'>List Order</p>
                        </div>
                        <div>
                            <table className='w-full  table-fixed font-helvetica border-separate '>
                                <thead>
                                    <tr className='text-left bg-[#CFD4ED] '>
                                        <th className='rounded-l-[4px] h-[50px] text-center w-[60px]'>No</th>
                                        <th className='px-2'>User Email</th>
                                        <th className='px-2'>Car</th>
                                        <th className='px-2'>Start Rent</th>
                                        <th className='px-2'>Finish Rent</th>
                                        <th className='px-2'>Price</th>
                                        <th className='px-2 rounded-r-[4px]'>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {people.map((person) => (
                                        <tr className='' key={person.id}>
                                            <td className='border-y border-slate-200 text-center h-[50px]'>{person.id}</td>
                                            <td className='border-y border-slate-200 px-2'>{person.userEmail}</td>
                                            <td className='border-y border-slate-200 px-2'>{person.car}</td>
                                            <td className='border-y border-slate-200 px-2'>{person.startRent}</td>
                                            <td className='border-y border-slate-200 px-2'>{person.finishRent}</td>
                                            <td className='border-y border-slate-200 px-2'>{person.price}</td>
                                            <td className='border-y border-slate-200 px-2'>{person.status}</td>
                                        </tr>
                                    ))}
                                    {/* {tableData()} */}
                                    {/* <tr>
                                        <td>1</td>
                                        <td>User Email</td>
                                        <td>Car</td>
                                        <td>Start Rent</td>
                                        <td>Finish Rent</td>
                                        <td>Price</td>
                                        <td>Status</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>User Email</td>
                                        <td>Car</td>
                                        <td>Start Rent</td>
                                        <td>Finish Rent</td>
                                        <td>Price</td>
                                        <td>Status</td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>
                        <nav className='mt-[40px] flex justify-between items-center'>
                            <div className=' flex gap-x-10'>
                                <div className='flex flex-col gap-y-5'>
                                    <p>Limit</p>
                                    <input className='border border-slate-300 rounded-[3px] w-[100px] h-[40px]' type="number" />
                                </div>
                                <div className='flex flex-col gap-y-5'>
                                    <p>Jump to page</p>
                                    <div className='flex flex-row items-center'>
                                        <input className='border border-slate-300 rounded-[3px] w-[100px] h-[40px]' type="number" />
                                        <button className='bg-background-blue-car text-white w-[50px] h-[40px] rounded-[3px]'>Go</button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <div className='border text-slate-400 border-slate-400 h-[30px] rounded-[3px] min-w-[30px]  items-center justify-center flex'>&lt;&lt;</div>
                                <div className='border text-slate-400 border-slate-400 h-[30px] rounded-[3px]  min-w-[30px] justify-center flex items-center'>1</div>
                                <div className='border text-slate-400 border-slate-400 h-[30px] rounded-[3px]  min-w-[30px] justify-center flex items-center'>2</div>
                                <div className='border text-slate-400 border-slate-400 h-[30px] rounded-[3px]  min-w-[30px] justify-center flex items-center'>3</div>
                                <div className='border text-slate-400 border-slate-400 h-[30px] rounded-[3px] min-h-[30px] min-w-[30px] justify-center flex items-center'>...</div>
                                <div className='border text-slate-400 border-slate-400 h-[30px] rounded-[3px]  min-w-[30px] justify-center flex items-center'>9</div>
                                <div className='border text-slate-400 border-slate-400 h-[30px] rounded-[3px]  min-w-[30px] justify-center flex items-center'>&gt;&gt;</div>
                            </div>
                        </nav>
                    </div>
                    <div className=' h-screen'></div>
                </div>
            </div>
        </>
    )
}

export default Cms