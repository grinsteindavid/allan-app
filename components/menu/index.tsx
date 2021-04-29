import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { Dropdown, Icon, Menu, MenuItemProps } from "semantic-ui-react";

export default function AdminMenu() {
    const router = useRouter()
    const [activeItem, setActiveItem] = useState<string | undefined>(undefined)

    function handleItemClick(event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>, data: MenuItemProps) {
        router.push(String(data.name), undefined, { shallow: true })
    }

    return (
        <Menu
            fixed="left"
            vertical
        >
            <Dropdown item text='Allan Naranjo'>
                <Dropdown.Menu>
                    <Dropdown.Item icon='edit' text='Edit Profile' />
                    <Dropdown.Item icon='globe' text='Choose Language' />
                    <Dropdown.Item icon='settings' text='Account Settings' />
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