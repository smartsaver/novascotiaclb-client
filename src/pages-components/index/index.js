import React from 'react'
import IndexLayout from './IndexLayout'
import IndexBanner from './IndexBanner'
import indexContent from './content'

const { bannerContent } = indexContent

const IndexPage = () => {
  return (
    <IndexLayout>
      <IndexBanner content={bannerContent} />
    </IndexLayout>
  )
}

export default IndexPage
