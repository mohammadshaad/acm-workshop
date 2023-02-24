import React from 'react'
import Navbar from '../../Navbar'
import Timeline from '../../Main/Faculties/Timeline'
import Styles from '../Faculties/styles/Style.module.css'

function Index() {


  return (
    <>
      <Navbar students={false} faculties={true} />

      <div className='p-10'>
        <Timeline  />

      </div>
    </>
  )
}

export default Index