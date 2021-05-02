import AdminMenu from 'components/menu';
import Container from 'components/container';
import { ReactNode } from 'react';

export interface IProps {
    children: ReactNode
}

export default function AdminLayout({ children }: IProps) {

    return (
        <>
            <AdminMenu />
            <Container padding="0.5rem 1rem 0.5rem 17rem">
                {children}
            </Container>
        </>
    )
}