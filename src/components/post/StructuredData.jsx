import Head from 'next/head'

export default function StructuredData({ data }) {
    return (
      <Head>
        {data.map((structuredData,index) => {
         return(
          <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
         )

        })}
      </Head>
    );
  }