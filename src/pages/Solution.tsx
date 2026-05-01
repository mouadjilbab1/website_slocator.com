import React from 'react'
import { useParams, Navigate } from 'react-router-dom'

import ServicePOI from './ServicePOI'
import ServicePopulation from './ServicePopulation'
import ServiceRealEstate from './ServiceRealEstate'
import ServiceRoadTraffic from './ServiceRoadTraffic'
import ServiceEnvironment from './ServiceEnvironment'
import ServiceAreaIncome from './ServiceAreaIncome'
import ServiceInfrastructureLocation from './ServiceInfrastructureLocation'
import ServiceAreaInternetUsage from './ServiceAreaInternetUsage'

export default function Solution() {
  const { slug } = useParams()

  switch (slug) {
    case 'point-of-interest-locator':
      return <ServicePOI />
    case 'area-population-density-intelligence':
      return <ServicePopulation />
    case 'real-estate-area-pricing-intelligence':
      return <ServiceRealEstate />
    case 'road-traffic-data-intelligence':
      return <ServiceRoadTraffic />
    case 'environment-intelligence':
      return <ServiceEnvironment />
    case 'area-income-intelligence':
      return <ServiceAreaIncome />
    case 'infrastructure-location-intelligence':
      return <ServiceInfrastructureLocation />
    case 'area-internet-usage-intelligence':
      return <ServiceAreaInternetUsage />
    default:
      return <Navigate to="/" replace />
  }
}