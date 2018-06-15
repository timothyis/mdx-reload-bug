import asset from 'next/asset'
import Layout from '../components/layout'

export const meta = {
  title: "something"
}

Hello

<asset('something')></>

export default ({ children }) => <Layout>{ children }</Layout>
