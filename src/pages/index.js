import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { post, title, byline } from "./index.module.css"

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Viktor Charypar" description="Clever title: " />
      <section className="content">
        {data.allMdx.edges.map(({ node }) => (
          <article className={post}>
            <Link to={`/posts/${node.frontmatter.slug}`}>
              <h2 className={title}>{node.frontmatter.title}</h2>
              <p className={byline}>
                {node.frontmatter.date} – {node.timeToRead} minute read
              </p>
              <p>{node.frontmatter.description}</p>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          frontmatter {
            title
            description
            slug
            author
            date(formatString: "Do MMMM YYYY")
          }
          timeToRead
        }
      }
    }
  }
`
