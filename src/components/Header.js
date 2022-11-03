import Button from "./Button"
const Header = ({title}) => {
    const onClick = (e) => {
        console.log('Click')
      }

  return (
    <header>
      <h1 className="header">{title}</h1>
    <Button color='green' text='add' onClick={onClick}/>
 
    </header>
  )
}
Header.defaultProps = {
    title: 'Task Tracker'
}
export default Header
