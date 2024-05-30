import {formatDuration} from "../utils/formatDuration.ts";

type VideoGridItemProps = {
    id: string
    title: string
    channel: {
        id: string
        name: string
        profileUrl: string
    }
    views: number
    duration: number
    videoUrl: string
    thumbnailUrl: string
}


const VIEW_FORMATTER = Intl.NumberFormat(undefined, {
    notation: 'compact'
})
export function VideoGridItem({
    id,
    title,
    channel,
    views,
    duration,
    videoUrl,
    thumbnailUrl

} : VideoGridItemProps) {
    return <div className={'flex flex-col gap-2 scrollbar-hide'}>
        <a href={`/video/${id}?url=${encodeURIComponent(videoUrl)}`} className={'relative aspect-video'}>
            <img alt={'Thumbnail'}
                 src={thumbnailUrl}
                 className={'block w-full h-full object-cover rounded-lg'}/>
            <div className={'absolute bottom-1 right-1 bg-black text-white text-sm px-0.5 rounded'}>
                {formatDuration(duration)}
            </div>
        </a>
        <div className={'flex gap-2'}>
            <a href={`/@${channel.id}`} className={'flex-shrink-0'}>
                <img alt={'Channel icon'} src={channel.profileUrl} className={'w-12 h-12 rounded-full'}/>
            </a>

            <div className="flex flex-col w-screen">
                <a href={`/watch?v=${id}`} className="text-white">
                    {title}
                </a>
                <div className="text-white text-opacity-50 text-sm flex justify-between pr-1.5">
                    <a href={`/@${channel.id}`} className="text-white text-opacity-50 text-sm">
                        {channel.name}
                    </a>
                    {VIEW_FORMATTER.format(views)} Views
                </div>
            </div>
        </div>
    </div>
}