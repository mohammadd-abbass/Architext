import React from 'react';
import MainLayout from '../layouts/MainLayout';

const LandingPage = () => {
    return (
        <MainLayout>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-4xl font-bold mb-4">Welcome to Our Landing Page</h1>
                <p className="text-lg mb-8">This is a simple landing page built with React.</p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Get Started
                </button>
            </div>
        </MainLayout>
    );
};

export default LandingPage;