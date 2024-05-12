// Write your code here
import './index.css'
const TabItem = props => {
  const {tabDetails, SetAciveTabId, isActive} = props
  const {tadId, displayText} = tabDetails
  const onClickTab = () => {
    SetAciveTabId(tadId)
  }
  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item">
      <button type="button" onClick={onClickTab} className={tabBtnClassName}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
