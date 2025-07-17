import { useTranslations } from 'next-intl'
import PageSubHeading from '@/components/common/PageSubHeading'
import InfiniteSkill from './InfiniteSkill'
import Certificates from './Certificates'

const Skill = ({skills,certificates}) => {
    const t = useTranslations();
    return (
        <>
            <InfiniteSkill skills={skills} />
            <hr className="hr !my-8" />
            <PageSubHeading title={t('Skillset.certificateTitle')} description={t('Skillset.certificateSubtitle')} icon='fad fa-file-certificate' />
            <Certificates certificates={certificates} />
        </>
    )
}

export default Skill