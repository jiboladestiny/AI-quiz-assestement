'use client'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
// import { LogOutIcon }  from 'lucide-react';
import logout from '../public/images/icons/logout.png'
import Image from 'next/image'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from './ui/dropdown-menu'
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu'
import UserAvatar from './UserAvatar'

interface User {
    id?: string | null | undefined,
    name?: string | null | undefined,
    email?: string | null | undefined,
    image?: string | null | undefined
}

type Props = {
    user: User
}

const UserAccountNav = ({ user }: Props) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger><UserAvatar user={user} /></DropdownMenuTrigger>
            <DropdownMenuContent>
                {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                        {user.name && <p className="font-medium">{user.name}</p>}
                        {user.email && (
                            <p className="w-[200px] truncate text-sm text-zinc-700">
                                {user.email}
                            </p>
                        )}
                    </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild onClick={(e) => {
                    e.preventDefault();
                    signOut().catch(console.error)
                }}>
                    <Link href='/' className='flex items-center cursor-pointer text-red-700'>Sign out <Image src={logout} alt='logout' className='w-4 h-4 ml-1' /> </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default UserAccountNav