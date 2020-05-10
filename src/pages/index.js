import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        {data.allMdx.edges.map(({ node }) => (
          <article>
            <h2>
              <Link to={`/posts/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>
              {node.frontmatter.date} | {node.timeToRead} minute read
            </p>
            <p>
              {node.excerpt}{" "}
              <Link to={`/posts/${node.frontmatter.slug}`}>read more</Link>.
            </p>
          </article>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          excerpt(pruneLength: 250)
          frontmatter {
            title
            slug
            date
          }
          timeToRead
        }
      }
    }
  }
`
