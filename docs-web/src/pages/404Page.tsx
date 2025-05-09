import { Link } from 'react-router-dom'; // or your routing solution


const Page404 = () => {
    return (
      <main className="bg-primary min-h-screen">
        <div className="container section-padding text-center">
          <div className="max-w-3xl mx-auto space-y-8">

            <div className="relative inline-block">
              <span className="text-9xl font-black text-accent animate-pulse">
                404
              </span>
              <svg
                className="absolute -top-8 -right-8 w-24 h-24 text-accent"
                viewBox="0 0 100 100"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              >
                <path d="M50 15L85 85H15L50 15Z" />
              </svg>
            </div>
  
            <h1 className="text-4xl md:text-5xl text-accent">
              Page Lost in the Digital Void
            </h1>
  
            <p className="text-secondary text-xl md:text-2xl mb-8">
              The page you're looking for has either wandered off or never existed. 
              Let's get you back to familiar territory.
            </p>
  
            <div className="flex justify-center gap-4">
              <Link to="" className="btn-primary">
                Return Home
              </Link>
              <button 
                onClick={() => window.history.back()} 
                className="btn-outline"
              >
                Go Back
              </button>
            </div>
  
            <div className="mt-12 space-y-4">
              <div className="flex justify-center gap-2 opacity-50">
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-3 h-3 bg-accent rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <p className="text-secondary/80">
                Error Code: 404 - Resource Not Found
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  };
export default Page404;