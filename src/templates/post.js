import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { byline, title } from "./post.module.css"

export default function Post({ data: { mdx } }) {
  return (
    <Layout>
      <h1 className={title}>{mdx.frontmatter.title}</h1>
      <p className={byline}>
        {mdx.frontmatter.author} — {formatDate(mdx.frontmatter.date)} —{" "}
        {mdx.timeToRead} minute read
      </p>
      <section className="content">
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </section>
    </Layout>
  )
}

function formatDate(isoString) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const suffixes = ["st", "nd", "rd"]

  const date = new Date(Date.parse(isoString))
  const suffix = suffixes[(date.getDate() % 10) - 1] || "th"

  return `${date.getDate()}${suffix} ${
    months[date.getMonth()]
  } ${date.getFullYear()}`
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
      timeToRead
      frontmatter {
        title
        author
        date
      }
    }
  }
`
