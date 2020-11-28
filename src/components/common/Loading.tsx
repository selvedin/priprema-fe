import React, { Fragment } from 'react'
import Loader from 'react-loader-spinner'

const Loading = (props: any) => {
  return (
    <Fragment>
      <Loader
        {...props}
        type="ThreeDots"
        color="#00BFFF"
        height={50}
        width={70}
      />
    </Fragment>
  )
}

export default Loading
