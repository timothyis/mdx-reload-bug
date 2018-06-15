import { MDXProvider } from '@mdx-js/tag'
import { withRouter } from 'next/router'

const components = {
  h2: DocH2
}

export const H3 = ({ children }) => (
  <h3>
    {children}
    <style jsx>
      {`
        h3 {
          font-weight: bold;
          font-size: 18px;
        }
      `}
    </style>
  </h3>
)


const Doc = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <div>
        {children}
      </div>
    </MDXProvider>
  )
}

const DocH2 = ({ children }) => (
  <div>
    <Heading lean offsetTop={175}>
      <H3>{children}</H3>
    </Heading>
    <style jsx>{`
      div {
        margin: 40px 0 0 0;
      }
    `}</style>
  </div>
)

const P = ({ children }) => (
  <p>
    {children}
  </p>
)


export default withRouter(Doc)
