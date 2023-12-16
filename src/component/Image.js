import React from 'react'
import './Style.css'
export default function Image() {
  return (
    <div className='contanior'>
      <h1>Visit  Our School In 360° View</h1>

      <div className="img">
        <iframe src="https://momento360.com/e/u/0630c1125fd34f50b6bdc4dc8d6704b4?utm_campaign=embed&utm_source=other&heading=-316.08&pitch=2.03&field-of-view=75&size=medium&display-plan=true"
        width={'100%'} height={'400px'} frameborder="0" title='map'></iframe>
      </div>
    </div>
  )
}
