import React from 'react'
import IndexLayout from './IndexLayout'
import IndexBanner from './IndexBanner'
import VideoSection from './VideoSection'
import ApplySection from './ApplySection'
import IndexSection from './IndexSections'
import ContactSection from './ContactSection'
import indexContent from './content'

const {
  bannerContent,
  introContent,
  sectionsContent,
  applyContent,
  contactContent,
} = indexContent

const IndexPage = () => {
  return (
    <IndexLayout seoTitle="Apply for CLB" seoContent={bannerContent.content}>
      <IndexBanner content={bannerContent} />
      <VideoSection
        title={introContent.title}
        content={introContent.content}
        url={bannerContent.videoUrl}
      />
      <IndexSection content={sectionsContent.content} />
      <ApplySection content={applyContent} />
      <ContactSection content={contactContent} />
    </IndexLayout>
  )
}

export default IndexPage
