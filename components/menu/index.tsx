import { useState } from "react";
import { Dropdown, Icon, Menu } from "semantic-ui-react";
import Link from 'next/link'

export default function AdminMenu() {
    const [activeItem, setActiveItem] = useState<string | undefined>(undefined)

    function handleItemClick() {

    }

    return (
        <Menu
            vertical
            fixed="left"
        >
            <Menu.Item>
                Home
            <Menu.Menu>
                    <Menu.Item
                        name='search'
                        active={activeItem === 'search'}
                        onClick={handleItemClick}
                    >
                        Search
            </Menu.Item>
                    <Menu.Item
                        name='add'
                        active={activeItem === 'add'}
                        onClick={handleItemClick}
                    >
                        Add
                    </Menu.Item>
                    <Menu.Item
                        name='about'
                        active={activeItem === 'about'}
                        onClick={handleItemClick}
                    >
                        Remove
                    </Menu.Item>
                </Menu.Menu>
            </Menu.Item>

            <Menu.Item
                name='browse'
                active={activeItem === 'browse'}
                onClick={handleItemClick}
            >
                <Icon name='grid layout' />
            Browse
            </Menu.Item>
            <Menu.Item
                name='messages'
                active={activeItem === 'messages'}
                onClick={handleItemClick}
            >
                Messages
            </Menu.Item>

            <Dropdown item text='More'>
                <Dropdown.Menu>
                    <Dropdown.Item icon='edit' text='Edit Profile' />
                    <Dropdown.Item icon='globe' text='Choose Language' />
                    <Dropdown.Item icon='settings' text='Account Settings' />
                </Dropdown.Menu>
            </Dropdown>
        </Menu>
    )
}