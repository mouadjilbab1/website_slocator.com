import React from 'react'
import { useParams, Navigate } from 'react-router-dom'

import Article1 from './Article1'
import Article2 from './Article2'
import Article3 from './Article3'
import Article4 from './Article4'

export default function Article() {
  const { slug } = useParams()

  switch (slug) {
    case 'feasibility-study-riyadh-guide':
      return <Article1 />
    case 'golden-zones-riyadh':
      return <Article2 />
    case 'feasibility-study-jeddah':
      return <Article3 />
    case 'pharmacy-site-analysis-riyadh':
      return <Article4 />
    default:
      return <Navigate to="/blog" replace />
  }
}