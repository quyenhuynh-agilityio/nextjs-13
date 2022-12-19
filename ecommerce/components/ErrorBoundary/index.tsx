// Libraries
import { Component, ReactNode, ErrorInfo } from "react";

// Components
import { Box, Button, Heading, Text } from "@chakra-ui/react";

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | ErrorInfo | null;
};
type ErrorBoundaryProps = { children: ReactNode };

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidCatch(_: Error, errorInfo: ErrorInfo) {
    this.setState({
      error: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box>
          <Heading as="h2">Oops, something went wrong!</Heading>
          <Text style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
          </Text>
          <Button
            variant="primary"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
