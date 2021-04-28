import Code from 'components/code';
import Container from 'components/container';
import Description from 'components/description';
import Title from 'components/title';
import React from 'react'

function withErrorBoundary(WrappedComponent: any) {
    return class extends React.Component {
        constructor(props: any) {
            super(props);
        }

        state = {
            error: undefined,
            errorInfo: undefined
        };

        componentDidCatch(error: any, errorInfo: any) {
            // Catch errors in any child components and re-renders with an error message
            this.setState({
                error: error,
                errorInfo: errorInfo
            });
        }

        render() {
            if (this.state.error) {
                // Fallback UI if an error occurs
                return (
                    <Container>
                        <Title>
                            Oh-no! Something went wrong
                        </Title>

                        <Description>
                            <Code>{this.state.error && (this.state.error as any).toString()}</Code>
                        </Description>
                    </Container>
                );
            }

            return (
                <WrappedComponent {...this.props} />
            )
        }
    }
}

export default withErrorBoundary