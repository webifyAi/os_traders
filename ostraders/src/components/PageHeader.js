import React from 'react'

const PageHeader = (props) => {
    return (
        <>
            <div className="page-header" style={{ backgroundImage: `url(${props.bgImage})`}}>
                <div className="container d-flex justify-content-center align-items-center flex-column" style={{ zIndex: "2", position: "relative" }}>
                    <span>{props.subTitle}</span>
                    <h1>{props.title} <span>{props.spanTitle}</span></h1>
                </div>
            </div>
        </>
    )
}

export default PageHeader
