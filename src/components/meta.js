import Head from "next/head";
import { siteMeta } from "@/lib/constants";
const { sitetitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta
import { useRouter } from "next/router";

const Meta = ({ pageTitle, pageDesc }) => {
    const title = pageTitle ? `${pageTitle} | ${sitetitle}` : sitetitle
    const desc = pageDesc ?? siteDesc

    const router = useRouter()
    const url = `${siteUrl}${router.asPath}`

    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} />

            <meta name="description" content={desc} />
            <meta property="og:descript" content={desc} />

            <link rel="canonical" href={url} />
            <meta property="og:url" content={url} />

            <meta property="og:site_name" content={sitetitle} />
            <meta property="og:type" content={siteType} />
            <meta property="og:local" content={siteLocale} />

            <link rel="icon" href={siteIcon} />
            <link rel="apple-touch-icon" href={siteIcon} />
        </Head>
    )
}

export default Meta