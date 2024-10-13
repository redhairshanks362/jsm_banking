import React from 'react'

//The purpose of this component is that we use a header on each page in the 
// design so we will keep a common page to show the header box
const HeaderBox = ({type="title", title, subtext, user} : HeaderBoxProps) => {
  return (
    <div className="header-box">
        <h1 className="header-box-title">
            {title}
            {type === 'greeting' && (
                <span className="text-bankGradient">&nbsp;{user}</span>
            )}
        </h1>
        <p className='header-box-subtext'>{subtext}</p>
    </div>
  )
}

export default HeaderBox