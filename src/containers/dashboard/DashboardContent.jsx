// DashboardContent.jsx
import React from 'react';

export default function DashboardContent({children}) {
    return (
        <main className="sticky flex flex-1">
            <div className="py-6">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                    <div className="py-4">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}
