import AsideResponsive from './AsideResponsive'
import AsideButton from './AsideButton'

export default function Aside() {
  return (
    <div>
      <div>
        <AsideResponsive />
      </div>
      <div className="xl:hidden">
        <AsideButton />
      </div>
    </div>
  )
}
