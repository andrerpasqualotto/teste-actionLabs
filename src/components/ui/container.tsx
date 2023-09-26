//for components
import React from 'react'

const Container = ({children}: {children: React.ReactNode}) => (
    <div className="container px-[15px] mx-auto bg-background">
        {children}
    </div>
)

export default Container;