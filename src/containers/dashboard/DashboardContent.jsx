// DashboardContent.jsx
import React from 'react';

export default function DashboardContent({children}) {
    return (
        <main className="sticky flex max-w-screen-2xl">
            <div className="py-6">
                <div className="mx-auto px-4 sm:px-6 md:px-8">
                    <div className="py-4">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}
