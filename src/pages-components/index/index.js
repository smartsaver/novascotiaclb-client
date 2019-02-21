import React from 'react'
import IndexLayout from './IndexLayout'
import IndexBanner from './IndexBanner'
import VideoSection from './VideoSection'
import ApplySection from './ApplySection'
import IndexSection from './IndexSections'
import indexContent from './content'

const {
  bannerContent,
  introContent,
  sectionsContent,
  applyContent,
} = indexContent

const IndexPage = () => {
  return (
    <IndexLayout>
      <IndexBanner content={bannerContent} />
      <VideoSection
        title={introContent.title}
        content={introContent.content}
        url={bannerContent.videoUrl}
      />
      <IndexSection content={sectionsContent.content} />
      <ApplySection content={applyContent} />
    </IndexLayout>
  )
}

export default IndexPage
