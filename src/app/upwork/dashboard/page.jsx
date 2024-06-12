import { Badge } from '@/components/ui/badge'
import { Dollar, User, Eye, Wallet } from 'iconoir-react'
import { AudioWaveformIcon, User2Icon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
    return (
        <div className="bg-gray-100 font-sans leading-normal tracking-normal">
            <header className="bg-white shadow p-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Link href="#" className="text-blue-500">My Workspace</Link>
                    <span>/</span>
                    <Link href="#" className="text-gray-500">My new form</Link>
                </div>
                <div className="flex space-x-4">
                    <Link href="#" className="text-gray-500">Create</Link>
                    <Link href="#" className="text-gray-500">Connect</Link>
                    <Link href="#" className="text-gray-500">Share</Link>
                    <Link href="#" className="text-gray-900 border-b-2 border-black">Results</Link>
                </div>
                <div className="flex space-x-4 items-center">
                    <button className="text-gray-500">
                        <Eye />
                    </button>
                    <button className="bg-black text-white px-4 py-2 rounded">Publish</button>
                    <button className="text-gray-500">
                        <User />
                    </button>
                </div>
            </header>
            <main className="p-4">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-4">
                        <Badge variant="outline" className="bg-white p-2 border rounded">
                            <i className="iconoir-calendar text-xl"></i>
                            <span>Jan 20, 2023 - Feb 09, 2023</span>
                        </Badge>
                        <Badge variant="secondary" className="bg-gray-200 p-2 rounded">28 days</Badge>
                        <Badge variant="secondary" className="bg-gray-200 p-2 rounded">14 days</Badge>
                        <Badge variant="secondary" className="bg-gray-200 p-2 rounded">7 days</Badge>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="bg-white p-4 rounded shadow">
                        <Dollar className='relative left-64' />
                        <h2 className="text-gray-500">Total Revenue</h2>
                        <p className="text-2xl font-bold">$45,231.89</p>
                        <p className="text-black">+20.1% from last month</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <User2Icon className='relative left-64' />
                        <h2 className="text-gray-500">Subscriptions</h2>
                        <p className="text-2xl font-bold">+2350</p>
                        <p className="text-black">+180.1% from last month</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <Wallet className='relative left-64' />
                        <h2 className="text-gray-500">Sales</h2>
                        <p className="text-2xl font-bold">+12,234</p>
                        <p className="text-black">+19% from last month</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <AudioWaveformIcon className='relative left-64' />
                        <h2 className="text-gray-500">Active Now</h2>
                        <p className="text-2xl font-bold">+573</p>
                        <p className="text-black">+201 since last hour</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="bg-gray-100 flex items-center justify-center ">
                        <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
                            <h2 className="text-xl font-bold mb-4">Overview</h2>
                            <div className="flex items-end space-x-4">
                                <div className="flex flex-col  text-gray-600">
                                    <span className='pt-8'>$6000</span>
                                    <span className='pt-8'>$4500</span>
                                    <span className='pt-8'>$3000</span>
                                    <span className='pt-8'>$1500</span>
                                    <span className='pt-8'>$0</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-black h-32 w-6"></div>
                                    <span className="mt-2 text-gray-600">Jan</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-black h-16 w-6"></div>
                                    <span className="mt-2 text-gray-600">Feb</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-black h-28 w-6"></div>
                                    <span className="mt-2 text-gray-600">Mar</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-black h-40 w-6"></div>
                                    <span className="mt-2 text-gray-600">Apr</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-black h-20 w-6"></div>
                                    <span className="mt-2 text-gray-600">May</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-black h-48 w-6"></div>
                                    <span className="mt-2 text-gray-600">Jun</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-black h-12 w-6"></div>
                                    <span className="mt-2 text-gray-600">Jul</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-black h-24 w-6"></div>
                                    <span className="mt-2 text-gray-600">Aug</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-black h-32 w-6"></div>
                                    <span className="mt-2 text-gray-600">Sep</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-black h-40 w-6"></div>
                                    <span className="mt-2 text-gray-600">Oct</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-black h-12 w-6"></div>
                                    <span className="mt-2 text-gray-600">Nov</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-black h-36 w-6"></div>
                                    <span className="mt-2 text-gray-600">Dec</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="bg-white p-4 rounded shadow overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr>
                                    <th className="py-2">#</th>
                                    <th className="py-2">Screens</th>
                                    <th className="py-2">Screen views</th>
                                    <th className="py-2">Exits</th>
                                    <th className="py-2">Drop-off rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2">1</td>
                                    <td className="py-2">start</td>
                                    <td className="py-2">13</td>
                                    <td className="py-2">9</td>
                                    <td className="py-2">69%</td>
                                </tr>
                                <tr>
                                    <td className="py-2">2</td>
                                    <td className="py-2">marketing-channels</td>
                                    <td className="py-2">6</td>
                                    <td className="py-2">3</td>
                                    <td className="py-2">50%</td>
                                </tr>
                                <tr>
                                    <td className="py-2">1</td>
                                    <td className="py-2">start</td>
                                    <td className="py-2">13</td>
                                    <td className="py-2">9</td>
                                    <td className="py-2">69%</td>
                                </tr>
                                <tr>
                                    <td className="py-2">2</td>
                                    <td className="py-2">marketing-channels</td>
                                    <td className="py-2">6</td>
                                    <td className="py-2">3</td>
                                    <td className="py-2">50%</td>
                                </tr>
                                <tr>
                                    <td className="py-2">1</td>
                                    <td className="py-2">start</td>
                                    <td className="py-2">13</td>
                                    <td className="py-2">9</td>
                                    <td className="py-2">69%</td>
                                </tr>
                                <tr>
                                    <td className="py-2">2</td>
                                    <td className="py-2">marketing-channels</td>
                                    <td className="py-2">6</td>
                                    <td className="py-2">3</td>
                                    <td className="py-2">50%</td>
                                </tr>
                                <tr>
                                    <td className="py-2">1</td>
                                    <td className="py-2">start</td>
                                    <td className="py-2">13</td>
                                    <td className="py-2">9</td>
                                    <td className="py-2">69%</td>
                                </tr>
                                <tr>
                                    <td className="py-2">2</td>
                                    <td className="py-2">marketing-channels</td>
                                    <td className="py-2">6</td>
                                    <td className="py-2">3</td>
                                    <td className="py-2">50%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard