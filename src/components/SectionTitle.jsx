import React from 'react'

export const SectionTitle = ({title}) => {
  return (
    <section id="gridRow sectionTitle" className="flex flex-row flex-wrap justify-start items-center">
        <div className="flex flex-col items-start gap-2.5 pb-2 self-stretch">
          <h1 className="font-h1-primetitle text-4xl text-nbgreenmain underline underline-offset-4 leading-none decoration-2 decoration-nbgreylight decoration-wavy">{title}</h1>
        </div>
      </section>
  )
}

export default SectionTitle
