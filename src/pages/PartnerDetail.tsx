import { Navigate, useParams } from 'react-router-dom'
import { PartnerDetailPage } from '../components/DetailPages'
import { liveDetails } from '../data/liveDetails'

export default function PartnerDetail() {
  const { slug } = useParams()
  const detail = slug ? liveDetails.partnerDetails[slug as keyof typeof liveDetails.partnerDetails] : undefined

  if (!detail) {
    return <Navigate to="/partners" replace />
  }

  return <PartnerDetailPage detail={detail} backTo="/partners" />
}
