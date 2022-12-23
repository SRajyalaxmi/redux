import {connect} from 'react-redux'
import {IncAction} from './actions'
import {DecAction} from './actions'


const App = ({local_variable,IncAction,DecAction}) => {
    return (
      <center>
         <div>
           <h1>{local_variable}</h1><br/>
           <button onClick={()=>IncAction(1)} >increment</button><br/>
           <button onClick={DecAction} >decrement</button>
         </div>
      </center>
    )
  }
const mapStateToProps = state => ({
  local_variable : state
})
export default connect(mapStateToProps,{IncAction,DecAction})(App)
