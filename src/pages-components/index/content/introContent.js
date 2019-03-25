import processMarkdown from '../../../libs/marked'

const introContent = {
  title: 'Canada Learning Bonds',
  content: processMarkdown(`
**Your child could be eligible to receive up to $2,000 in free money for their post-secondary education from the Canada Learning Bond (CLB).**

If your child is eligible, the Government of Canada will deposit the money directly into a bank account called a Registered Education Savings Plan (RESP). All you have to do is register.

You don’t have to pay fees or put any money into the RESP for your child to receive the CLB.
  `),
}

export default introContent
