import React from "react";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError == true) {
      return (
        <>
          <div>Fallback UI or Display Error</div>
        </>
      );
    } else {
      return this.props.children;
    }
  }
}
export default ErrorBoundary;
