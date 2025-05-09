
const Loader = ({ fullscreen = true }: { fullscreen?: boolean }) => {
    return (
        <div className={`${fullscreen ? 'h-screen w-full' : ''} grid place-items-center`}>
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-accent border-t-transparent"></div>
        </div>
    );
};

export default Loader;