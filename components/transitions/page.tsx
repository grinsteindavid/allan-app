import {
    TransitionGroup,
    Transition as ReactTransition,
    TransitionStatus,
} from "react-transition-group";
import { useRouter } from "next/router";

import { CSSProperties, ReactNode } from "react"

type TransitionKind<RC> = {
    children: RC
}

const TIMEOUT: number = 200

const getTransitionStyles: {
    [key in TransitionStatus]: CSSProperties
} = {
    entering: {
        position: `absolute`,
        opacity: 0,
    },
    entered: {
        transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
        opacity: 1,
        animation: "blink .3s linear 2",
    },
    exiting: {
        transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
        opacity: 0,
    },
    exited: {

    },
    unmounted: {

    }
}

const PageTransition: React.FC<TransitionKind<ReactNode>> = ({
    children,
}) => {
    const router = useRouter()

    return (
        <TransitionGroup
            style={{ position: "relative" }}
        >
            <ReactTransition
                key={router.pathname}
                timeout={{
                    enter: TIMEOUT,
                    exit: TIMEOUT,
                }}
            >
                {(status) => (
                    <div
                        style={{
                            ...getTransitionStyles[status],
                        }}
                    >
                        {children}
                    </div>
                )}
            </ReactTransition>
        </TransitionGroup>
    )
}
export default PageTransition