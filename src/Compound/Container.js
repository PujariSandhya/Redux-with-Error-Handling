import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import { getData } from "../actions/Action";
import React,{Component} from 'react';
class Container extends Component{
  componentDidMount(){
    this.props.getData();
  }
  render (){
   
    return(
      <div ><h1 style={{color:"blue"}}>FETCHING DATA</h1>
        <div >{this.props.fetch_data.map(u=>
        (<div key={u.id}>
            <h2>{u.title}</h2>
                <p>{u.body}              
            </p>
         </div>
        //   <p>{u.id}.{u.name},
        //   {u.username},
        //   {u.email}</p>
        ))}</div>
         <h2 >
          {this.props.error_values.status}
        {this.props.error_values.statusText}</h2>
      </div> 
    )
  }
}
const mapStatetoprops = (state) => {
    console.log("Data in console", state)
    return {
        fetch_data: state.values.data,
        error_values: state.values.error,
    };
};
const mapDispatchtoProps = (dispatch) => { 
    return bindActionCreators(
        {
            getData,
        },
        dispatch
    );
};
export default connect(mapStatetoprops,mapDispatchtoProps)(Container);