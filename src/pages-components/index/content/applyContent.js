import processMarkdown from '../../../libs/marked'

const embedUrl = 'https://www.smartsaver.org/startmyresp/?nsProv'

const applyContent = {
  title: 'Apply For Your Child’s Canada Learning Bond Today!',
  content: processMarkdown(`
_If you cannot see the form, [click here.](${embedUrl})_
  `),
  embedUrl,
  footerContent: processMarkdown(`
For more information contact us at 1-855-737-7252 (1-855-RESP-CLB) or info@smartsaver.org.
  `),
}

export default applyContent
