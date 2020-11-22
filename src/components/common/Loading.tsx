import React, { Fragment } from 'react'
import Loader from 'react-loader-spinner'

const Loading = () => {
  return (
    <Fragment>
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={50}
        width={70}
      />
    </Fragment>
  )
}

export default Loading
