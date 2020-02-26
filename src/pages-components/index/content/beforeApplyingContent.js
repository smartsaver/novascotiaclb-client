import processMarkdown from '../../../libs/marked'

const beforeApplyingContent = {
  title: 'Before You Start',
  content: processMarkdown(`
When you register for the CLB, make sure you have:
  
* Your most recent income tax and benefit return
* Social Insurance Numbers (SIN) for you and your child. [Learn how to apply for a SIN.](https://www.canada.ca/en/employment-social-development/services/sin.html)
  `),
}

export default beforeApplyingContent
