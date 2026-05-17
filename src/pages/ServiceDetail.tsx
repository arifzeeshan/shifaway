import { Navigate, useParams } from 'react-router-dom'
import { CareDetailPage } from '../components/DetailPages'
import { liveDetails } from '../data/liveDetails'

export default function ServiceDetail() {
  const { slug } = useParams()
  const detail = slug ? liveDetails.serviceDetails[slug as keyof typeof liveDetails.serviceDetails] : undefined

  if (!detail) {
    return <Navigate to="/services" replace />
  }

  return (
    <CareDetailPage
      detail={detail}
      backTo="/services"
      overviewTitle="Service Overview"
      featuresTitle="Service Features"
      bookingType="service"
    />
  )
}
