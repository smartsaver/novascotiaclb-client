import processMarkdown from '../../../libs/marked'

const contactContent = {
  title: 'Contact',
  content: processMarkdown(`
If you have any questions about applying for the CLB, contact us.

Phone (toll-free): **1-855-737-7252** (1-855-RESP-CLB)

Email: info@smartsaver.org
  `),
}

export default contactContent
