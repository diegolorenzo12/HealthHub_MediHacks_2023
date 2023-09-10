import List from './List'
import React from 'react'
import './Boardstyle.css'
export default function Board() {
  return (
    <div className="pag">
    <main id="site-main">
        <h1 className='.tect-dark.title'> Upcoming Appointments</h1>
    </main>
    <div className='board'>   
      <List />
    </div>
    </div>
  )
}
