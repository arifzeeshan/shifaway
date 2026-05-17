import { Navigate, useParams } from 'react-router-dom'
import { CareDetailPage } from '../components/DetailPages'
import { liveDetails } from '../data/liveDetails'

export default function TreatmentDetail() {
  const { slug } = useParams()
  const detail = slug ? liveDetails.treatmentDetails[slug as keyof typeof liveDetails.treatmentDetails] : undefined

  if (!detail) {
    return <Navigate to="/treatments" replace />
  }

  return (
    <CareDetailPage
      detail={detail}
      backTo="/treatments"
      overviewTitle="Treatment Overview"
      featuresTitle="Treatment Features"
      bookingType="treatment"
    />
  )
}
