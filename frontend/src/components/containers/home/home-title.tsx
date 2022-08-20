import React from 'react'


interface Props {
    title: string
    description: string
}

function HomeTitle({ title, description }: Props) {
    return (
        <div className='hero min-h-screen'>
            <div className="hero-overlay bg-opacity-10">
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold font-ptmono">
                            {title}
                        </h1>
                        <p className="mb-5 py-2 font-ptmono">
                            {description}
                        </p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeTitle

