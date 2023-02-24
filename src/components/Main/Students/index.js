import React from 'react'
import Navbar from '../../Navbar'
import Timeline from '../../Main/Students/Timeline'
import Styles from '../Students/styles/Style.module.css'

function Index() {


  return (
    <>
      <Navbar students={true} faculties={false} />

      <div className='p-5 md:p-10 '>
        <Timeline  />

      </div>
    </>
  )
}

export default Index