import React from 'react'
import IndexLayout from './IndexLayout'
import IndexBanner from './IndexBanner'
import VideoSection from './VideoSection'
import indexContent from './content'

const { bannerContent, introContent } = indexContent

const IndexPage = () => {
  return (
    <IndexLayout>
      <IndexBanner content={bannerContent} />
      <VideoSection
        title={introContent.title}
        content={introContent.content}
        url={bannerContent.videoUrl}
      />
    </IndexLayout>
  )
}

export default IndexPage
