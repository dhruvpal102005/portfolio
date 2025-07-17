import { useState } from 'react'
import useSwr from 'swr'

import { PAGESPEED_API } from '@/constants/pagespeed'
import { fetcher } from '@/services/fetcher'

import SpeedSection from './SpeedSection'
import BadgeSection from './Badge'

export default function PageSpeed({ locale, style }) {

    const [url, setUrl] = useState(PAGESPEED_API + '/')
    const [active, setActive] = useState('/')

    const { data, isLoading, mutate } = useSwr(url, fetcher)

    function refetch(path) {
        setActive(path)
        setUrl(PAGESPEED_API + path)
        mutate()
    }

    return (
        <section className='pagespeed__section'>
            <BadgeSection active={active} refetch={refetch} />
            <SpeedSection data={data} isLoading={isLoading} locale={locale} />
        </section>
    )
}
