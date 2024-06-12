import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Check, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { User, Eye } from 'iconoir-react'
import { Input } from '@/components/ui/input'



const Workspace = () => {
    return (
        <div className="bg-gray-100 font-sans leading-normal tracking-normal">
            <header className="bg-white shadow p-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Link href="#" className="text-gray-600 hover:text-gray-900">My Workspace</Link>
                    <span className="text-gray-400">/</span>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">My new form</Link>
                </div>
                <nav className="flex space-x-4">
                    <Link href="#" className="text-gray-600 hover:text-gray-900">Create</Link>
                    <Link href="#" className="text-gray-900 border-b-2 border-black">Connect</Link>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">Share</Link>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">Results</Link>
                </nav>
                <div className="flex items-center space-x-4">
                    <Eye />
                    <Button className="bg-black text-white px-4 py-2 rounded">Publish</Button>
                    <User />

                </div>
            </header>
            <main className="max-w-4xl mx-auto p-4">

                <div className="mb-4 w-full p-2 relative ml-auto flex items-center md:grow-0 ">
                    <Search className="absolute left-4  h-4 w-4 text-muted-foreground " />
                    <Input
                        type="search"
                        placeholder="Search Integrations"
                        className="rounded-lg bg-background pl-8"
                    />
                </div>
                <div className="space-y-4">
                    <div className="bg-white p-4 rounded shadow flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Image src={'/img/email.png'} alt="Email Icon" width={75} height={75} />
                            <div>
                                <div className="flex items-center space-x-2">
                                    <h2 className="text-lg font-bold">Email</h2>
                                    <Badge className='bg-green-200 hover:bg-green-200 '>
                                        <span className="text-green-500">Active
                                        </span>
                                        <Check className='text-green-500 ' />
                                    </Badge>

                                </div>
                                <p className="text-gray-600">Receive an email every time a user submits their answer</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded shadow flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Image src={'/img/google.png'} alt="Google sheets Icon" width={75} height={75} />
                            <div>
                                <h2 className="text-lg font-bold">Google Sheets</h2>
                                <p className="text-gray-600">Send your data straight to Google Sheets. Automatically syncs as
                                    results come in.</p>
                            </div>
                        </div>
                        <Button className="bg-black text-white px-4 py-2 rounded">Connect</Button>
                    </div>
                    <div className="bg-white p-4 rounded shadow flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Image src={'/img/excel.png'} alt="Excel Icon" width={75} height={75} />
                            <div>
                                <h2 className="text-lg font-bold">Excel</h2>
                                <p className="text-gray-600">Send your typeform responses to Excel Online. Turn feedback into
                                    graphs, support queries into workflows, and much more.</p>
                            </div>
                        </div>
                        <Button className="bg-black text-white px-4 py-2 rounded">Connect</Button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Workspace