import React from 'react'

const LoginLayout = ({ children }) => {
  return (
    <div className='container h-p100'>
      <div className='row align-items-center justify-content-md-center' style={{
        height:'100vh'
      }}>
        <div className='col-12'>
          <div className='row justify-content-center no-gutters'>
            <div className='col-lg-5 col-md-5 col-12'>
              <div className='bg-white rounded shadow-lg'>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginLayout
