import React from 'react'
import Navbar from '../../Navbar'
import Timeline from '../../Main/Students/Timeline'
// import Styles from '../Students/styles/Style.module.css'
// import Test from './test'

function Index() {


  return (
    <>
      <Navbar home={false} achievements={true} />

      <div className='p-5 md:p-10 '>
        <Timeline  />

        {/* <Test /> */}

      </div>
    </>
  )
}

export default Index