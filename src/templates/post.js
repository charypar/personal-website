import React from "react"
import Layout from "../components/layout"
import SEO from "../components/SEO"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { byline, title } from "./post.module.css"

export default function Post({ data: { mdx } }) {
  return (
    <Layout>
      <SEO
        author={mdx.frontmatter.author}
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
      />
      <h1 className={title}>{mdx.frontmatter.title}</h1>
      <p className={byline}>
        {mdx.frontmatter.author} — {mdx.frontmatter.date} — {mdx.timeToRead}{" "}
        minute read
      </p>
      <section className="content">
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
      timeToRead
      frontmatter {
        title
        author
        description
        date(formatString: "Do MMMM YYYY")
      }
    }
  }
`
