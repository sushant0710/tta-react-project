import React from 'react'

const Main = () => {
  return (
    <>
    <section className='border-black border-t-0 border uppercase flex flex-col md:flex-row font-bold min-h-[400px]'>
        <div className="left text-center w-full md:w-1/2 border-b md:border-b-0 md:border-r border-black p-12 flex items-center" >this is some content aligned in the center verticaly and horizontally</div>
        <div className="right w-full md:w-1/2"></div>
    </section>
    </>
  )
}

export default Main
