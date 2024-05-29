import { PageHeader } from "./layouts/PageHeader.tsx";
import {CategoryPills} from "./components/CategoryPills.tsx";
import {categories, videos} from "./data/home.ts";
import {useState} from "react";
import {VideoGridItem} from "./components/VideoGridItem.tsx";
import { Analytics } from "@vercel/analytics/react"

export default function App() {
    const [selectedCategory, setSelectedCategory] = useState(categories[0])
    return <div className="max-h-screen flex flex-col scrollbar-hide">
        <Analytics/>
        <PageHeader />
        <div className={'grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto scrollbar-hide'}>
            <div className={'overflow-x-hidden px-5 rounded-lg scrollbar-hide'}>
                <div className={'flex sticky top-0 z-10 py-3 bg-black bg-opacity-85 scrollbar-hide justify-center'}>
                    <CategoryPills categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory}/>
                </div>
                <div className={'grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] scrollbar-hide'}>
                    {videos.map(video => (
                        <VideoGridItem id={video.id} title={video.title} channel={video.channel} views={video.views} duration={video.duration} videoUrl={video.videoUrl} thumbnailUrl={video.thumbnailUrl}/>
                    ))}
                </div>
            </div>
        </div>
    </div>
}
