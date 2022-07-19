import React from "react"

const LoaderComponent = (importFunc) => {
   return class WrapperComponent extends React.Component {
     constructor(props) {
       super(props);
       this.state = {
         Component: ''
       }
     }

     componentDidMount() {
      importFunc().then((module) => {
        this.setState({
          Component: module.default
        })
      })
     }

     render() {
       const Component = this.state.Component;
       console.log(this.props)
       return <>
        {Component && <Component {...this.props} /> }
       </>
     }
   }
}
export default LoaderComponent;