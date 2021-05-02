import Logo from "components/logo";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { Dropdown, Icon, Menu, MenuItemProps } from "semantic-ui-react";
import Link from 'next/link';
import Store from 'store';
import useFetch from "use-http";
import { logout } from "api/auth";

export default function AdminMenu() {
    const router = useRouter()
    const { get, response, loading, error } = useFetch(...logout())
    const [activeItem, setActiveItem] = useState<string | undefined>(undefined)

    function handleItemClick(event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>, data: MenuItemProps) {
        router.push(String(data.name), undefined, { shallow: true })
    }

    async function logoutHandler() {
        await get()

        if (response.ok) {
            Store.remove('auth.user')
            router.push("/login", undefined, { shallow: true })
        }
    }

    return (
        <Menu
            fixed="left"
            vertical
        >
            <Menu.Header
                content={
                    <Link href="/">
                        <Logo>
                            <Icon name="universal access" size="large" />
                        </Logo>
                    </Link>
                }
            />

            <Dropdown item text='Allan Naranjo'>
                <Dropdown.Menu>
                    <Dropdown.Item icon='edit' text='Edit Profile' />
                    <Dropdown.Item icon='settings' text='Account Settings' />
                    <Dropdown.Item icon='logout' text='Log out' onClick={logoutHandler} />
                </Dropdown.Menu>
            </Dropdown>

            <Menu.Item
                name='contacts'
                active={activeItem === 'contacts'}
                content="Contactos"
                onClick={handleItemClick}
            />

            <Menu.Item
                name='activity'
                active={activeItem === 'activity'}
                content="Actividad"
                onClick={handleItemClick}
            />

            <Menu.Item
                name='notifications'
                active={activeItem === 'notifications'}
                content="Notificaciones"
                onClick={handleItemClick}
            />

            <Menu.Item
                name='reports'
                active={activeItem === 'reports'}
                content="Reportes"
                onClick={handleItemClick}
            />
        </Menu>
    )
}