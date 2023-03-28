export const Home = () => {
  return (
    <>
      <div className="p-5 h-[calc(100vh-108px)] w-full flex justify-center items-center">
        <div>
          <div className="grid grid-cols-2 gap-x-5">
            <div className="border-2 shadow-lg shadow-green-500">
              <img src="https://bilder.fernsehserien.de/gfx/pics/1408/Rick-And-Morty-3.jpg.jpg" />
            </div>
            <div className="flex justify-center items-center">
              <p className="text-white text-lg">
                Welcome to my technical test, I hope you like the view and you
                can navigate between the different sections that I organize. For
                the development, React, Hooks, GraphQL, TailwindCSS, MaterialUI,
                SweetAlert2, Vite and some React Router Dom tools were used.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
